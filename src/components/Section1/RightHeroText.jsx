import React from "react";

const RightHeroText = (props) => {
    console.log(props.color);
    
  return (
    <div className="absolute top-0 left-0 p-6 w-full h-full flex flex-col justify-between">
      <h1 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-semibold">
        {props.id + 1}
      </h1>
      <div>
        <p className="text-white mb-10 w-[90%] text-xl leading-normal">{props.intro}</p>
        <div className="flex justify-between">
          <button className=" px-8 py-2  font-medium rounded-full"
          style={{color:props.textColor,
          backgroundColor: props.color
          }}>
            {props.tag}
          </button>
          <button className=" px-3 py-2 font-medium rounded-full flex items-center justify-center "
          style={{backgroundColor: props.color,
          color:props.textColor
          }}>
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightHeroText;
