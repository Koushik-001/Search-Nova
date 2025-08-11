// App.js
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          {/* <Route path="/home" element={<HomePage />} /> */}
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
