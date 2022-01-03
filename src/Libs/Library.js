import React from "react";
import Card from "../components/Card"
import style from "../style/Buttons.module.css";
import DB from './LocalDB'

export let populateCountryes = () => {
  return DB.Countryes.map((country) => (
    <button
      key={country.id}
      className={style.advanceResearchButton}
      href={`./searchedForCountry=${country.name}`}
    >
      {country.name}
    </button>
  ));
};

export let populateIntolerances = () => {
  return DB.Intolerances.map((intolerance) => (
    <button
      key={intolerance.id}
      className={style.advanceResearchButton}
      href={`./searchedForIntolerance=${intolerance.name}`}
    >
      {intolerance.name}
    </button>
  ));
  }


export let populateDiet = () => {
  return DB.Diets.map((diet) => (
    <button
      key={diet.id}
      className={style.advanceResearchButton}
      href={`./searchedForIntolerance=${diet.name}`}
    >
      {diet.name}
    </button>
  ));
};


export let populateHistory = (history) => {
  if (history.length > 0){
    return (
      <>
        {history.map((element) => <Card key={element.id} id={element.id} image={element.image} title={element.title} />)}
      </>
    )
  }else{
    return
  }
}