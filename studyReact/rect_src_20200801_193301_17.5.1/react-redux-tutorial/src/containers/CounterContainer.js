import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <div>
      <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
    </div>
  );
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

// const mapDispatchToProps = (dispatch) => (
  // 1.
  // {
  //   increase: () => {
  //     dispatch(increase());
  //   },
  //   decrease: () => {
  //     dispatch(decrease());
  //   },  
  // }

  // 2.
  // bindActionCreators(
  //   {
  //     increase,
  //     decrease
  //   },
  //   dispatch
  // )
// );

const mapDispatchToProps = {
  increase,
  decrease
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CounterContainer);
