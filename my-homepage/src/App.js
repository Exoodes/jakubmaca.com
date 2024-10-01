import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Homepage</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Hello! I'm a web developer learning React.</p>
        </section>
        <section>
          <h2>My Projects</h2>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Email: example@email.com</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Homepage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;