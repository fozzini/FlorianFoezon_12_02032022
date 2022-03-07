import React from 'react';

const Header = (props) => {
  return (
    <div>
      <div className='header'>
          <div className='title'>
            <h2>Bonjour</h2>
            <h2 className='firstname'>{props.firstName}</h2>
          </div>
          <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
        </div>
    </div>
  );
};

export default Header;