import React, { useRef, useState } from "react";
import "./App.css";
import Table from "./Table";

function App() {
  const [result, setResult] = useState("");
  const [showData, setShowData] = useState(false);
  const [fork, setFork] = useState(false);
  const [error, setError] = useState(false);
  const usernameRef = useRef(null);
  const checkRef = useRef(null);

  const showUsers = (e) => {
    e.preventDefault();
    console.log(checkRef.current.checked);
    if (checkRef.current.checked) {
      setFork(true);
    } else {
      setFork(false);
    }
    console.log("showing users");
    const username = usernameRef.current.value;
    console.log(username);
    const data = fetch(`https://api.github.com/users/${username}/repos`)
      .then((res, err) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });

    data
      .then((res, err) => {
        console.log(res);
        setResult(res);
        if (res.length === 0) {
          setError(true);
          return;
        } else {
          setError(false);
        }
        setShowData(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  return (
    <div className="App">
      <div className="input">
        <label htmlFor="username">Github username: </label>
        <input id="username" type="text" ref={usernameRef} />
        <label htmlFor="fork">Include forks: </label>
        <input id="fork" type="checkbox" ref={checkRef} />
        <button onClick={showUsers}>Submit</button>
      </div>

      {/* {!error && showData && <Table data={result} fork={fork} />}
      {error && <div className="error">Data not found</div>} */}
      {error ? (
        <div className="error">Data not found</div>
      ) : (
        showData && <Table data={result} fork={fork} />
      )}
    </div>
  );
}

export default App;

// aswani@innoventes.co
