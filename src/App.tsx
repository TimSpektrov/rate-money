import React from 'react';
// import './App.css';
import {CustomInput} from "./components/CustomInput/CustomInput";

function App() {

  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 p-4">
      <CustomInput id={'dollars'} name={'USD'} ratio={1} symbol={'$'} />
      <CustomInput id={'euros'} name={'EUR'} ratio={1.07} symbol={'€'} />
    </div>
  );
}

export default App;
