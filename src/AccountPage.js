import Register from './Register';
import Login from './Login';
import Logout from './Logout';


function AccountPage() {
  
  return (
    <>
      <h1>Account Page</h1>
      <div className="container">
      <Login />
      <Register />
      <Logout />
      
      </div>
</>
  );
}

export default AccountPage;
