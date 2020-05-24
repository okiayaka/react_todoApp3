// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Form from './Form';
import List from './List';

const App = () => {
  const [todos, setTodos] = React.useState([
    "HTMLを書く",
    "CSSを書く",
    "JSを書く"
  ])
  return (
    <div>
      <Form todos={todos} setTodos={setTodos}></Form>
      <List todos={todos} setTodos={setTodos}></List>
    </div>
  );
}

export default App
