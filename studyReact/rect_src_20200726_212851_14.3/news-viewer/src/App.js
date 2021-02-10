import React, { useState } from 'react';
import Axios from '../node_modules/axios/index';

const App = () => {

  const [data, setData] = useState(null);
  const onClick = async () => {

    try {
      const response = await Axios.get("http://newsapi.org/v2/top-headlines?country=kr&apiKey=ce2c1b4dfa374e84a26408f54d574aa6");
      setData(response.data);
      
    } catch (e) {
      console.log(e);
    }
    
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