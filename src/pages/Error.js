import React from 'react';
import HorizontalNav from '../components/nav/HorizontalNav';
import VerticalNav from '../components/nav/VerticalNav';

const Error = () => {
/**
* create error page
*
* @return html - error page
*/
  return (
    <div>
      <HorizontalNav/>
      <VerticalNav/>
      <h1 className="errorMessage">Une erreur s’est produite...</h1>
    </div>
  );
};

export default Error;