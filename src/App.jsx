import { useState } from "react"

import './assets/app.css'

function App() {

  const [count, setCount] =useState(0);
  const [data, setData] = useState('');

   async function fetchData() {
    if(count >=1 && count < 10 && count.length == 1){
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
      const list = await response.json();
      setData(list);
    }
    else setData('');
  }

  
  return (
    <>
      <form>
        <label>
          <input type="number" placeholder="input number" onChange={(e) => setCount(e.target.value)}></input>
        </label>
      </form>
      <div className="app-button">
        <button className="button" type="button" onClick={fetchData}>request backend</button>
      </div>
      {data? 
        <div className="data-list">
          <ul>
            <li>{data.id}</li>
            <li>{data.title}</li>
          </ul>
        </div>: 
        ''
      } 
    </>
  )
}

export default App
