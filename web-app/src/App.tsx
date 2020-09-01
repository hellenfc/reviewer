import React, { useState } from 'react';
import './App.css';
import Likert from './components/Likert';
import GoogleMap from './components/Map';
import * as data from './utils/candidates.json';
import { classification } from './utils/data';
import { ILocation } from './interfaces/index'

import Button from "@material-ui/core/Button";
import Select from '@material-ui/core/Select';

function App() {
  const [fruit, setFruit] = useState(data.fruits[0]);
  const [review, setReview] = useState({ taste: "Neutral", color: "Neutral", appearance: "Neutral" });
  const [location, setLocation] = useState({ latitud: 0, longitud: 0 });

  const handleSelectedFruit = (event: React.FormEvent<HTMLSelectElement>) => {
    setFruit(event.currentTarget.value);
  }

  const handleReview = (name: string, value: number) => {
    let newName = name.toLowerCase();
    setReview({ ...review, [newName]: classification[value] });
  }

  const handleSelectedLocation = (value: ILocation) => {
    setLocation(value)
  }

  const handleSubmit = () => {
    const userReview = {
      fruit,
      review,
      location
    }

    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        review: userReview
      })
    }
    fetch("http://localhost:3001/post", requestOptions)
      .then(res => res.json())
      .then(json => {
        console.log(json.message)
      })
  }

  const renderDropDown = () => {
    return data.fruits.map((fruit, i) => {
      return <option key={i} value={fruit} >{fruit}</option>;
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>
          Fruit Reviewer
        </h4>
        <div className="container">
          <p>Choose a fruit:</p>
          <select onChange={(event) => handleSelectedFruit(event)} value={fruit}>
            {renderDropDown()}
          </select>
        </div>
        <div className="container">
          <p>Make your review:</p>
            <Likert setReview={handleReview}></Likert>
        </div>
        <div className="container">
          <p>Select a location:</p>
          <GoogleMap setLocation={handleSelectedLocation}></GoogleMap>
        </div>
        <Button
          className="button"
          variant="contained"
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </header>
    </div>
  );
}

export default App;
