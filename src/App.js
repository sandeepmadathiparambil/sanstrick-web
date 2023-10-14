import React, { useState } from 'react';
import './App.css';

function App() {
  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Sample API endpoint
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  };

  const captionStyle = {
    textAlign: 'center',
    padding: '20px',
    fontSize: '1.5em',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const contentTextStyle = {
    fontSize: '1.2em',
    lineHeight: '1.6',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  return (
    <div className="App">
      <header style={headerStyle}>
        <h1>Sanstrick</h1>
      </header>
      <div style={captionStyle}>
        <p>Your Sample Caption Goes Here</p>
      </div>
      <div style={contentStyle}>
        <div style={contentTextStyle}>
          <p>Welcome to Sanstrick! We provide top-notch solutions for your business needs.</p>
          <p>Our team of experts is dedicated to delivering high-quality services tailored to your requirements.</p>
        </div>
        <button style={buttonStyle} onClick={fetchData}>
          Get User
        </button>
        {apiData && (
          <div style={contentTextStyle}>
            <p>User ID: {apiData.userId}</p>
            <p>Number: {apiData.id}</p>
            <p>Title: {apiData.title}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
