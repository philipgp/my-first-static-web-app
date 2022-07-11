import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const  text  = await fetch(`https://mango-flower-0782f3800.1.azurestaticapps.net/api/HttpTrigger1?name=123`);
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;