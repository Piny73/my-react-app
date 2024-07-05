import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

import Accountlist from './Accountlist';
import MyAccount from './MyAccount';

function Dashboard() {
  const { auth, user } = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = auth; // null represents the initial loading state
  //const [loggeduser, setLoggeduser] = user; // null represents the initial loading state
  return (
    <>
      <h1>Dashboard</h1>
      <div className="container">
        {isAuthenticated &&
        <>
         <Accountlist />
         <MyAccount/>
         </>
         }
        {!isAuthenticated && <h2> Utente non loggato</h2>}
      </div>
    </>
  );
}
export default Dashboard;
