import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  useEffect(()=> {
    getAdvice();
  }, []);

  return (
    <div>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  )
}

export default App