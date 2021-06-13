import React, { Fragment } from 'react';

const Register = () => {
    return (
        <Fragment>
            <h1 className="large text-primary">Üye ol</h1>
            <p className="lead"><i className="fas fa-user"></i> Hesap Oluşturun</p>
            <form className="form" action="create-profile.html">
                <div className="form-group">
                    <input type="text" placeholder="İsim" name="name" required />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email Adresi" name="email" />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Parola"
                        name="password"
                        minLength="6"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Parolayı yeniden girin"
                        name="password2"
                        minLength="6"
                    />
                </div>
                <input type="submit" class="btn btn-primary" value="Üye ol" />
            </form>
            {/*
            <p className="my-1">
                Hesabınız yok mu? <a href="login.html">Üye ol</a>
            </p>
            */}
        </Fragment>
    )
};

export default Register;