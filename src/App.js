import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [space, setSpace] = useState([]);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7]);

  // const API_URL = `https://api.spacexdata.com/v3/launches`;

  useEffect(() => {
    // fetch the API JSON.data
    loadData();
  }, []);

  const loadData = async () => {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const res = await fetch(`https://api.spacexdata.com/v3/launches`);

    const data = await res.json();
    setSpace(data);
  };
  console.log('space', space.splice(0, 1));

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to first fetch API project</h1>
      </header>
      <div>
        <h1>Flight list </h1>
        {space
          .map((item, index) => {
            return (
              <div>
                <ul key={index}>
                  <li>Flight number: {item.flight_number}</li>
                  <br />
                  <li>Mission name: {item.mission_name}</li>
                  <br />
                  <li>Launch Year: {item.launch_year}</li>
                  <br />
                  {
                    <img
                      src={item.links.mission_patch}
                      alt='space patch'
                      style={{
                        height: '100px',
                        width: '100px',
                        border: '3px blue solid',
                        borderRadius: '15px',
                      }}
                    />
                  }
                </ul>
              </div>
            );
          })
          .splice(0, 10)}
      </div>
    </div>
  );
};

export default App;
