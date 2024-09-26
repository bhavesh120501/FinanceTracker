import {BrowserRouter as Router , Routes,Route, Link } from 'react-router-dom'
import './App.css'
import { Auth } from './pages/auth/Auth'
import { Dashboard } from './pages/dashboard/Dashboard'
import { FinancialRecordProvider } from './contexts/FinancialRecordContext'
import { SignedIn, UserButton } from "@clerk/clerk-react";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Link to='/'>Dashboard</Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <FinancialRecordProvider>
                <Dashboard />
              </FinancialRecordProvider>
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
