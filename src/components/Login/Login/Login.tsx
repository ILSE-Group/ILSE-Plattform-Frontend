import './Login.scss';


function Login() {
    return (
        <div className="login-container">
            <h2>Einloggen</h2>

            <div className="login-form">
                <div className="input-group">
                    <label>Benutzername</label>
                    <input type="text" />
                </div>

                <div className="input-group">
                    <label>Passwort</label>
                    <input type="password" />
                </div>

                <button className="login-btn">
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;