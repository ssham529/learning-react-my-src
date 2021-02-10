import React, { useState, useMemo, useCallback } from "react";

const getAverage = (number) => {
  console.log("평균값 계산 중..");
  if (number.length === 0) {
    return 0;
  }
  const sum = number.reduce((a, b) => a + b);
  return sum / number.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  /*
    const onChange = e => {
        setNumber(e.target.value);
    };
    */

  // useCallback( 함수, 배열 );
  const onChange = useCallback( (e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  /*
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };
  */
  const onInsert = useCallback( () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  }, [number , list]); // number 혹은 list 가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value} </li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
