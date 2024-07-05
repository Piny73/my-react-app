import { useState, useEffect } from "react";

function MyAccount() {
    const vuoto = {
        id: "",
        credit: 0,
        fullname: "",
        email: ""
    }
    const [accounts, setAccount] = useState([vuoto]);
    useEffect(() => {
        const tk = sessionStorage.getItem("token");
        const id = sessionStorage.getItem("id");
        const url = 'http://localhost:8080/payghost/api/accounts/' + id;

        fetch(url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tk}`
                }
            })
            .then(res => res.json())
            .then(json => {
                setAccount(json);
            })
            .catch((error) => {
                console.log(error);
            }
            );
    }, [accounts]);

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-header">
                    My Info Account
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">id: {accounts.id}</li>
                    <li className="list-group-item">credit: {accounts.credit}</li>
                    <li className="list-group-item">email: {accounts.email}</li>
                    <li className="list-group-item">account: {accounts.fname}</li>
                </ul>
            </div>

        </>
    )
}

function OptionAccount(props) {
    return <option account-id={props.ac.id} value={props.ac.id}>{props.ac.fname} {props.ac.lname}</option>;
}
export default MyAccount
