import React, {Fragment, useState} from 'react';
import axios from 'axios';
import {setAlert} from "../../actions/alert";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import Alert from '../layout/Alert';

const Login = ({setAlert}) => {
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    });

    const {username, password} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

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
            await axios.post('http://localhost:8090/api/token', body, config)
                .then(res => {
                    if (res.status === 200) {
                        setAlert('Giriş Başarılı', 'success');
                    }
                }).catch(error => {
                    setAlert('Giriş başarısız', 'danger');
                });


        } catch (err) {

        }

    };
    return (
        <Fragment>
            <Alert/>
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
                <input type="submit" className="btn btn-primary" value="Giriş Yap"/>
            </form>
        </Fragment>
    )
};

Login.prototype = {
    setAlert: PropTypes.func.isRequired
}

export default connect(null, {setAlert})(Login);