import React, { Fragment, useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''

    });

    const {name, email, password, password2} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if(password !== password2) {
            console.log('Password do not match');
        } else {
            console.log(formData);
        }
    }
    return (
        <Fragment>
            <h1 className="large text-primary">Üye ol</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Hesap Oluşturun</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="İsim" name="name" value={name} onChange={e => onChange(e)} required />
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
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Parola (Tekrar)"
                        name="password2"
                        value={password2}
                        onChange={e => onChange(e)}
                    />
                </div>
                <input type="submit" class="btn btn-primary" value="Üye ol" />
            </form>
        </Fragment>
    )
};

export default Register;