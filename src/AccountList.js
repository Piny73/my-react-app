import { useState, useEffect } from "react";
function Accountlist() {
    const [amount, setAmount] = useState(0);
    const [receiverId, setReceiverId] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        const dati ={
            amount,
            receiverId,};

        const stringDati=JSON.stringify(dati);
        const id=sessionStorage.getItem("id");
        const url = `http://localhost:8080/payghost/api/accounts` + id + `/transactions`;
        fetch(url,
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
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        const tk = sessionStorage.getItem("token");
        fetch('http://localhost:8080/payghost/api/accounts',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tk}`
                }
            })
            .then(res => res.json())
            .then(json => {
                setAccounts(json);
            })
            .catch((error) => {
                console.log(error);
            }
            );
    }, []);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Inserisci l'importo da trasferire:
                    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </label>
                <select className="form-select" value={receiverId} onChange={(e) => setReceiverId(e.target.value)}>
                    {accounts.map((curac) => <OptionAccount ac={curac} />)}

                </select>
                <input type="submit" />
            </form>
        </>
    )
}

function OptionAccount(props) {
    return <option account-id={props.ac.id} value={props.ac.id}>{props.ac.fname} {props.ac.lname}</option>;
}
export default Accountlist