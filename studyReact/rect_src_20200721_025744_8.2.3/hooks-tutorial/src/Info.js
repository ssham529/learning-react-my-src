import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  /* 
    useEffect(() => {
        console.log('렌더링이 완료되었습니다!');
        console.log({
            name,
            nickname
        });
    });
    */
  /*
  useEffect(() => {
      console.log(name);
  }, [name]);
  */
  useEffect( () => {
    console.log("effect - name ::[" + name+ "]");
    return () => {
      console.log('name::', name);
    }
  } );

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
        {/* <input value={''}/>  이런식의 input box 는 글이 안써졌음. */}
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
