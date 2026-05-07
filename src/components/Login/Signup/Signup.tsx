import './Signup.scss';


function Signup() {

    return(
        <div className="signup-container">
            <h2>Registrieren</h2>
            
            <div className="signup-form">
                <div className="input-group" >
                    <label>Benutzername</label>
                    <input type="text" />
                </div>

                <div className="input-group" >
                    <label>Passwort</label>
                    <input type="text" />
                </div>

                <div className="input-group" >
                    <label>Passwort bestätigen</label>
                    <input type="text" />
                </div>

                <button className="signup-btn">
                    Registrieren
                </button>
            </div>
                
        </div>
    );

}

export default Signup;