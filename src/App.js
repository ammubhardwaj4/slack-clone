import React, { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import Login from "./components/authentication/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useStateValue } from "./store/StateProvider";

function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  return (
    // BEM naming convention
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              {/* Sidebar */}
              <Sidebar />
              <Routes>
                <Route index path="/" element={<h1>Welcome</h1>} />
                <Route path="/room/:roomId" element={<Chat />} />
              </Routes>
              {/* React-Router --> Chat screen */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
