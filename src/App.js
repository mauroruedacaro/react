// import logo from './logo.svg';
// import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [issues, setIssues] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then((response) => response.json())
      .then((data) => setIssues(data));
  }, []);

  const filterIssues = issues.filter((issue) =>
    issue.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>React GitHub Issues</h1>
      <input
        type="text"
        placeholder="Search issues"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filterIssues.map((issue) => (
          <li key={issue.id}>
            <div>
              <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                {issue.title}
              </a>
            </div>
            <div>ID: {issue.id}</div>
            <div>User: {issue.user.login}</div>
            <div>
              Labels:
              {issue.labels.map((label) => (
                <span key={label.id}> {label.name},</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

//export default App;


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

export default App;
