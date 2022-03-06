import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import logo from './logo.svg';
import './App.css';

function App() {
  let api = `https://rickandmortyapi.com/api/character/?page=1`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      console.log(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center mb-3">
        Characters
      </h1>
      <div className="container">
        <div className="row">
          Filter components will be placed here
          <div className="col-lg-8 col-12">
            <div className="row">
              Card components will be placed here.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
