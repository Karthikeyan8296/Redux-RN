import { Text, View, TouchableOpacity } from "react-native";
import { Provider } from "react-redux";
import store from "./context/store";
import CounterComponent from "./components/CounterComponent";

export default function App() {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
}
