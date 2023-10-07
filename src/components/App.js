import React, { useState } from 'react'


const data = [
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }
]


function App() {
    let [mail, setMail] = useState('');
    let [password, setPassword] = useState('');
    let [user, setuser] = useState('');
    let [pass, setPass] = useState('');

    function handle() {
        if ((!password && !mail) || (!password || !mail)) {
            setuser('User not found')
            return;
        }
        if (mail) {
            let matched = data.map((email) => (
                email.email === mail
            ))
            if (matched.length !== 0) {
                setuser('User not found');
                return
            }
        }
        if (password) {
            let matched = data.map((passcode) => (
                passcode.password === password
            ))
            if (matched.length !== 0) {
                setPass("Password Incorrect");
                return
            }
        }
        setTimeout(() => {
            data.map((obj) => {
                if (obj.password === password) {
                    console.log(obj);
                    setPass('');
                    setuser('');
                }
            })
        }, 3000)

    }

    return (
        <div>
            <form onSubmit={handle}>
                <input type='email' id='input-email' value={mail} onChange={(e) => { setMail(e.target.value) }} />
                <input type='password' id='input-password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button type='submit' id='submit-form-btn' />
                <p id='user-error'>{user}</p>
                <p id='password-error'>{pass}</p>
            </form>

        </div>
    )
}

export default App
