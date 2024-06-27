import { useState, useEffect } from 'react';


function AccountList() {
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
                    console.log(error)

                });
    }, [accounts]);

    return (
        <>
            <select className='form-select'>
                {accounts.map((curac) => <OptionAccount ac={curac} />)}
            </select>
        </>
    )
}
function OptionAccount(props) {
    return <option account-id ={props.ac.id}>{props.ac.fname}{props.ac.lname}</option>;
}
export default AccountList;