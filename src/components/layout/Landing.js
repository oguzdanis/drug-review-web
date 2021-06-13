const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">İlaçlar hakkında bilgilenmeye hazır mısınız</h1>
                    <p className="lead">
                        Merak ettiğiniz tüm ilaçlarla ilgili uzman ve kullanıcı yorumları burada.
                        Şimdi Üye ol.
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