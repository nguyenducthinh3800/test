import React from 'react';
class App extends React.Component {
   render() {
      return (
        <div>
            <h1>Header</h1>
            <h2>Content</h2>
            <p>This is the content!!!</p>
            <h1>{1+1}</h1>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}

export default App; 