import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        const newUser = {
            username,
            password
        }
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const body = JSON.stringify(newUser);
            console.log(body);
            console.log(config);
            const res = await axios.post('http://localhost:8090/api/token', body, config);
            console.log(res.data);

        } catch (err) {

        }

    };
    return (
        <Fragment>
            <h1 className="large text-primary">Giriş Yap</h1>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Kullaniciadi" name="username" value={username} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Parola"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Giriş Yap" />
            </form>
        </Fragment>
    )
};

export default Login;