import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [title, setTitle] = useState('None');

  const callLamda = async () => {
    console.log('callLamda');
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const resp = await fetch('https://l6bigsc492.execute-api.us-east-2.amazonaws.com/dev', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName
      }),
      redirect: 'follow'
    })

    setTitle(JSON.parse(await resp.text()).body)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title}</h1>

        <form>
          <label>First Name :</label>
          <input type="text" id="fName"/>

          <label>Last Name :</label>
          <input type="text" id="lName"/>

          <button type="button" onClick={callLamda}>Call Lamda</button>
        </form>
      </header>
    </div>
  );
}

export default App;