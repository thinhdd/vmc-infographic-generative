import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import InfographicForm from "./InfographicForm";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  return (
    <Router>
      <div>
        <h1>Webapp Infographic</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/privacy-policy">Privacy Policy</Link>
        </nav>
        <Routes>
          <Route path="/" element={<InfographicForm />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;