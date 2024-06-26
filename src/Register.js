import { useState } from 'react';

function Register() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmpwd, setConfirmpwd] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const dati = {
            fname: { fname },
            lname: { lname },
            email: { email },
            pwd: { pwd },
            confirmpwd: { confirmpwd }
        };
        const stringDati = JSON.stringify(dati);

        fetch('http://localhost:8080/payghost/api/accounts',
            {
                method: 'POST',
                Headers: { 'content-type': 'application/json' },
                body: stringDati
            })
            .then(res => res.text())
            .then(testo => {
                console.log(error)
                alert(`id nuovo=${testo}`)
            })
            .catch((error) => {
                console.log(error)

            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your first-name:
                <input
                    type="text"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                />
            </label>
            <label>Enter your last-name:
                <input
                    type="text"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                />
            </label>
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
            <label>Enter again your pwd:
                <input
                    type="text"
                    value={confirmpwd}
                    onChange={(e) => setConfirmpwd(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    );
}

export default Register;