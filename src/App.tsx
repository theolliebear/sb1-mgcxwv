import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import InitialPage from './components/InitialPage';
import MessagePage from './components/MessagePage';
import TerminatedPage from './components/TerminatedPage';

function App() {
  const [hasSeenMessage, setHasSeenMessage] = useState(false);

  useEffect(() => {
    const messageStatus = localStorage.getItem('missionStatus');
    if (messageStatus === 'terminated') {
      setHasSeenMessage(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            hasSeenMessage ? (
              <Navigate to="/terminated" replace />
            ) : (
              <InitialPage />
            )
          }
        />
        <Route
          path="/message"
          element={
            hasSeenMessage ? (
              <Navigate to="/terminated" replace />
            ) : (
              <MessagePage setHasSeenMessage={setHasSeenMessage} />
            )
          }
        />
        <Route path="/terminated" element={<TerminatedPage />} />
      </Routes>
    </Router>
  );
}

export default App;