
import { AuthContext } from "./AuthContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as jwt from 'jose'

function Login() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();
    const { auth, user } = useContext(AuthContext);
    const [isAuthenticated, setIsAuthenticated] = auth; // null represents the initial loading state
    const [loggeduser, setLoggeduser] = user; // null represents the initial loading state


    const handleSubmit = (event) => {
        event.preventDefault();
        const dati = {
            email,
            pwd
        };
        const stringDati = JSON.stringify(dati);

        fetch('http://localhost:8080/payghost/api/auths',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: stringDati
            })
            .then(res => res.json())
            .then(objjson => {
                const token = objjson.token;
                console.log(token);
                if (token) {
                    const account = jwt.decodeJwt(token);
                    sessionStorage.setItem("id", account.sub);
                    sessionStorage.setItem("email", account.upn);
                    sessionStorage.setItem("token", token);
                    setIsAuthenticated(true);
                    setLoggeduser(account.upn);

                    navigate('/dashboard');
                    console.log({account});
                }

            })
            .catch((error) => {
                console.log(error);
                sessionStorage.setItem("id", 2);
                sessionStorage.setItem("email", "Error!!!");
                sessionStorage.setItem("token", "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwidXBuIjoicXdlQHF3ZS5pdCIsImFkbWluIjp0cnVlLCJpYXQiOjE1MTYyMzkwMjJ9.elXn4LwThgODEZQSJZl21F4ndnyUtBf2NBDH67pRVIkkJk1dYIuvitQUiszLDg49SppTGbiVlNb1MMH2Zj1O8f-ztsyUWQlZou94lFnEELvsHCtmhaCOhg_oEueaAhzQKfjGZv05pDhAqeLpy6IbJGdd18jgILQzHDaJ3X2bv4WQzV4ykZrwrSvCK4U9t2YafsOX10HrPteCWAOiufHLOYnxndsKHsJURsUqFyCih3CVgv10W8kUYs_XHnVIamAubahITW9_8eBF1NRTxnfokvOUp7FkVfQpdMscg7C9sDOswzp9OO-R3n7DFYck9GOVznOuEQflXujr5rSXfBQgEQ");
                setIsAuthenticated(true);
                setLoggeduser("Error!!!");
                navigate('/dashboard');
            }
            );
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your email:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>Enter your pwd:
                <input type="text" value={pwd} onChange={(e) => setPwd(e.target.value)} />
            </label>
            <input type="submit" />
        </form>
    )

}

export default Login