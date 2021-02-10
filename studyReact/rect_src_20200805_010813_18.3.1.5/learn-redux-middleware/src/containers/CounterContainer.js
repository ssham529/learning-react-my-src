import React from "react";
import Counter from "../components/Counter";
import { increaseAsync, decreaseAsync } from "../modules/counter";
import { connect } from "react-redux";

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// export default connect(
//   (state) => ({
//     number: state.counter,
//   }),
//   {
//     increase,
//     decrease,
//   }
// )(CounterContainer);

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync} />
  );
};

// const mapDispatchToProps = dispatch => ({
//   increaseAsync: () => {
//     dispatch(increaseAsync());
//   },
//   decreaseAsync: () => {
//     dispatch(decreaseAsync());
//   }
// });

export default connect(
  (state) => ({
    number: state.counter,
  }),
  // mapDispatchToProps
  {
    increaseAsync,
    decreaseAsync,
  }
  
)(CounterContainer);