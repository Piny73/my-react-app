import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useEffect, useContext } from "react";

const Layout = () => {

    const { auth, user } = useContext(AuthContext);
    const [isAuthenticated, setIsAuthenticated] = auth; // null represents the initial loading state
    const [loggeduser, setLoggeduser] = user; // null represents the initial loading state
    useEffect(() => {
        console.log({loggeduser});
    }, [loggeduser]);
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand nav-link active" to="/">Home</Link>

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="nav-link" aria-current="page" to="/AccountPage">Account</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Dashboard">Area Privata</Link>
                            </li>


                        </ul>
                        <span >utente: {isAuthenticated ? `${loggeduser}` : `---`}</span>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;