//we need to make the initial state value//
const initialState = {
  count: 0,
};

//we need to make seprate function for taking the state and from the action//
const counterReducer = (state = initialState, action) => {
  //anga mention panna types uh enga switch statement la logic podanum//
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT": {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
};

//don't forget to export//
export default counterReducer;
