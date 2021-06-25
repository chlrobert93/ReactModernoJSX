//Import the React and ReactDOM libreries
import React from 'react';
import ReactDOM from 'react-dom';

 
if (module.hot) {
    module.hot.accept();
  }


//Create a react component
const App = () => {
   return <div>Hiiiii theree</div>;
};


//Take the react component and show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root'));