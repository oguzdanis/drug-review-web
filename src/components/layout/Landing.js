const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <p className="x-large">İlaçlar hakkında bilgilenmeye hazır mısınız</p>
                    <p className="lead">
                        Merak ettiğiniz tüm ilaçlarla ilgili uzman ve kullanıcı yorumları burada.
                        Şimdi <a href="register">Üye ol</a>.
                    </p>
                    <div className="buttons">
                        <a href="register" class="btn btn-primary">Üye ol</a>
                        <a href="login" class="btn btn-light">Giriş Yap</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing