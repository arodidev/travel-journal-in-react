import React from "react";
import Card from "./Card";
import cardData from "./cardData";
import Header from "./Header";

function App() {
  const cardElements = cardData.map((obj)=>{
    return(
      <Card {...obj}/>
    )
  })
  return (
    <div>
      <Header />
      {cardElements}
    </div>
  )
}

export default App;
