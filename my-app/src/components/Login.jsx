import { Link } from "react-router-dom"
import styles from "../styles/Login.module.css"
import Navbar from "./Navbar"

const Login = () =>{
    return(
        <div className={styles.loginpage}>
            <Navbar/>
            <b>LOGIN</b>
            <div>
                <form className={styles.form}>
                    <input type="text" placeholder="Your UserName"></input><br></br>
                    <input type="password" placeholder="Password"></input><br/>
                   <br/>
                    <button>Login</button>
                    
                </form>
            </div>
            <div>
                
                <Link to="/signup"><button>Signup</button></Link>
            </div>
        </div>
    )
}

export default Login