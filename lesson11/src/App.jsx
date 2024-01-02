import React from 'react'
import './App.css';
import Countries from './components/Countries';
import Albums from './components/Albums';

const App = () => {
  return (
    <div className='app'>
      {/* <Countries/> */}
      <Albums/>
    </div>
  )
}

export default App