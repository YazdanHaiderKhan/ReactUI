import React from "react";
import RightHeroText from "./RIghtHeroText";

const RightCard = (props) => {
  
  
  return (
      <div className="h-full w-70 shrink-0 overflow-hidden relative rounded-4xl ">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
        <RightHeroText intro = {props.intro} tag = {props.tag} id  = {props.id} color = {props.color} textColor = {props.textColor}/>
    </div>
  );
};

export default RightCard;
