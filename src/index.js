import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
//ReactDOM.render(<App />, document.getElementById('root'));
const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

 ReactDOM.render(myelement, document.getElementById('root'));
// class App extends React.Component {
//    render() {
//       return (
//         <div>
//             <h1>Header</h1>
//             <h2>Content</h2>
//             <p>This is the content!!!</p>
//             <h1>{1+1}</h1>
//          </div>
//       );
//    }
// }
// export default App; 