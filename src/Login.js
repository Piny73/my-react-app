import { useState } from 'react';
import * as jwt from'jose';

function Login() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const dati = {
            email,
            pwd,
        };
        const stringDati = JSON.stringify(dati);

        fetch('http://localhost:8080/payghost/api/auths',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: stringDati
            })
            .then(res => res.json())
            .then(objson => {
                const token = objson.token;
                console.log(token);
                const account =jwt.decodeJwt(token);
                console.log(account)
                
            })
            .catch((error) => {
                console.log(error)

            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your email:
                <input 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>Enter your pwd:
                <input 
                    type="text"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    );
}

export default Login;