import React from "react";
// import "App.css";

function Table(props) {
  console.log(props);
  let data = props.fork
    ? props.data.find((item) => item.fork === false && item.fork === true)
    : props.data.find((item) => item.fork === false);

  props.data.sort((a, b) => b.size - a.size);
  console.log(props);
  return (
    <section>
      <header>
        <div className="col">Name</div>
        <div className="col">Language</div>
        <div className="col">Description</div>
        <div className="col">Size</div>
      </header>

      {props.data.map((repo) => {
        return (
          <tbody>
            <div className="col">{repo.name}</div>
            <div className="col">{repo.language}</div>
            <div className="col">{repo.description}</div>
            <div className="col">{repo.size}</div>
          </tbody>
        );
      })}
    </section>
  );
}

export default Table;
