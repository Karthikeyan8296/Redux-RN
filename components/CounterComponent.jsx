import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { increment, decrement } from "../context/actions/counterAction";
import { connect } from "react-redux";

const CounterComponent = ({ count, increment, decrement }) => {
  return (
    <View className="flex-1 items-center justify-center space-y-6">
      <Text className="text-3xl font-bold text-zinc-600">Counter</Text>
      <View className="flex items-center justify-center p-12 border border-zinc-400 rounded-xl">
        <Text className="text-3xl font-bold text-zinc-600">{count}</Text>
      </View>
      <View className="flex flex-row items-center justify-evenly w-full">
        <TouchableOpacity
          onPress={increment}
          className="py-3 px-5  bg-blue-500  rounded-xl flex items-center justify-center"
        >
          <Text className="text-3xl font-bold text-gray-50">+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={decrement}
          className="py-3 px-5  bg-blue-500 rounded-xl flex items-center justify-center"
        >
          <Text className="text-3xl font-bold text-gray-50">-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  //we are accessing the counter from index of the reducer//
  count: state.counter.count,
});

// this dispatch is accessing from our counterActions//
const mapDispatchToProps = {
  increment,
  decrement,
};

// we need to connect the map and dispatch to the component//
export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
