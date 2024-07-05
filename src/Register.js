import { useState } from "react";
import './Register.css';
function Register() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [credit, setCredit] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const dati ={
            fname,
            lname,
            email,
            pwd,
            confirmPwd,
            credit  }
        ;
        const stringDati=JSON.stringify(dati);

        fetch('http://localhost:8080/payghost/api/accounts',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: stringDati
            })
        .then(res => res.text())
        .then(testo => {
                console.log(testo);
                alert(`id nuovo=${testo}`);

            })
        .catch((error) => {
                console.log(error);
              }
            );
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your firstname:
                <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
            </label>
            <label>Enter your lastname:
                <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
            </label>
            <label>Enter your email:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>Enter your pwd:
                <input type="text" value={pwd} onChange={(e) => setPwd(e.target.value)} />
            </label>
            <label>Enter your confirmPwd:
                <input type="text" value={confirmPwd} onChange={(e) => setConfirmPwd(e.target.value)} />
            </label>
            <label>Enter your credit:
                <input type="text" value={credit} onChange={(e) => setCredit(e.target.value)} />
            </label>
            <input type="submit" />
        </form>
    )

}
export default Register