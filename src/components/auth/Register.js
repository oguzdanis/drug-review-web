import React, {Fragment, useState} from 'react';
import axios from 'axios';
import {setAlert} from '../../actions/alert';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '../layout/Alert';

const Register = ({setAlert}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: ''
    });

    const { firstName, lastName, username, password, email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            username,
            password,
            email
        }
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const body = JSON.stringify(newUser);
            await axios.post('http://localhost:8090/api/token/register', body, config)
                .then(res => {
                    if (res.status === 200) {
                        setAlert('Kayit başarılı', 'success');
                    }
                }).catch(error => {
                    setAlert('Kayıt başarısız', 'danger');
                });

        } catch (err) {

        }

    };
    return (
        <Fragment>
            <Alert />
            <h1 className="large text-primary">Üye ol</h1>
            <p className="lead">
                <i className="fas fa-user"/> Hesap Oluşturun</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="İsim" name="firstName" value={firstName} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Soyisim" name="lastName" value={lastName} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Kullaniciadi" name="username" value={username} onChange={e => onChange(e)} required/>
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email" name="email" value={email} onChange={e => onChange(e)} required />
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
                <input type="submit" className="btn btn-primary" value="Üye ol" />
            </form>
        </Fragment>
    )
};

Register.prototype = {
    setAlert: PropTypes.func.isRequired,
};

export default connect(null, {setAlert})(Register);