import React from 'react';

const Nutrition = (props) => {

  return (
    <div className="nutrients">
      <div className={`IconeContainer ${props.classname}`}>
        <img src={props.icon} alt={props.icon} className="iconeNutrients"/>
      </div>
      <div className='nutrientText'>
        <h2>{props.element}{props.elementUnit}</h2>
        <h3>{props.text}</h3>
      </div>
    </div>
  );
};

export default Nutrition;