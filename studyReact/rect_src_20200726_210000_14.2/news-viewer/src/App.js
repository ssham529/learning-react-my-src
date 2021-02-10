import React, { useState } from 'react';
import Axios from '../node_modules/axios/index';

const App = () => {

  const [data, setData] = useState(null);
  const onClick = () => {
    Axios.get("https://jsonplaceholder.typicode.com/todos/1").then(resopnse => {
      setData(resopnse.data);
    });
  }

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
};

export default App;