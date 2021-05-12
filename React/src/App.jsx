import React, { useState } from "react";
import "./App.css";
// import.meta.env.VITE__APP_API_KEY;
import Profile from "./components/Profile.jsx";

function App() {
  const [nameData, setName] = useState(null);

  if (!nameData) {
    return (
      <div className="app">
        <h1 className="title">Look after your FAC member</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setName(e.target.username.value);
          }}
        >
          <label htmlFor="username">
            Search
            <input
              id="username"
              name="username"
              type="text"
              placeholder="search for github user"
              size="50"
            />
          </label>
        </form>
      </div>
    );
  } else {
    return <Profile name={nameData} />;
  }

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>Hello Vite + React!</p>
  //       <p>
  //         <button onClick={() => setCount((count) => count + 1)}>
  //           count is: {count}
  //         </button>
  //       </p>
  //       <p>
  //         Edit <code>App.jsx</code> and save to test HMR updates.
  //       </p>
  //       <p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //         {" | "}
  //         <a
  //           className="App-link"
  //           href="https://vitejs.dev/guide/features.html"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Vite Docs
  //         </a>
  //       </p>
  //     </header>
  //   </div>
  // );
}

export default App;
