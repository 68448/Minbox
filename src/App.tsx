import React from 'react';
import ToDo from './components/ToDo';


function App() {
  return (
    <div className="App container m-auto">
        <h1 className='todoHeader text-6xl mt-5 text-center'>TODOS</h1>
        <ToDo />
    </div>
  );
}

export default App;
