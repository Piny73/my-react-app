import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AccountPage from './AccountPage';
import Dashboard from './Dashboard';
import Layout from './Layout';
import Home from './Home';
import {AuthProvider} from './AuthContext';

function App() {
  const miotitolo = "Prima App React";

  return (
    <>
      <div className="App">
        <h1>{miotitolo}</h1>
        <header className="App-header">
        </header>
      </div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="accountpage" element={<AccountPage />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
