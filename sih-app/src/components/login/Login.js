
import "./login.css";





const Login = () =>{
    

    return (
        <div className="login">
            <div className="item">
                <h2>Login Credentials</h2>
                <form >
                    <input type="text" name="email"  placeholder="Email"  />
                    <input type="password" placeholder="Password" name="password" />
                    <button>Login</button>
                </form>
            </div>
            
            
        </div>
    )
}

export default Login