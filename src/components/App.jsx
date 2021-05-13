import React, { useState } from "react";
// import "../assets/App.css";
// import.meta.env.VITE__APP_API_KEY;
import Profile from "./Profile.jsx";

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
}

export default App;
