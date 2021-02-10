import React, { useCallback } from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../modules/counter';

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <div>
//       <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
//     </div>
//   );
// };

const CounterContainer = () => {

  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
      <Counter 
        number={number} 
        // onIncrease={() => dispatch(increase())} 
        // onDecrease={() => dispatch(decrease())} 
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
  );
};

//======================================================

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

//======================================================
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       increase,
//       decrease,
//     },
//     dispatch,
//   );

// const mapDispatchToProps = {
//   increase,
//   decrease
// }
//======================================================

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(CounterContainer);

export default React.memo(CounterContainer);
