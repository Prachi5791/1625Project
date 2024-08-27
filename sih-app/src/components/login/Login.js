
import "./login.css";
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const navigate = useNavigate();

  const handleLogin = () => {

    navigate('/dashboard/student');
  };

    return (
        <div className="login">
            <div className="item">
                <div className="login-info">
                    <h2>Login Credentials</h2>
                    <form >
                        <input type="text" name="email"  placeholder="Email"  />
                        <input type="password" placeholder="Password" name="password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>

        </div>
        
    )
}

export default Login