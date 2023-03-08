import { useState,useContext } from "react"
import { Link, Navigate, redirect, useNavigate } from "react-router-dom"
import styles from "../styles/login.module.css"
import Navbar from "./Navbar"
import { authenticateLogin } from "../service/api"
import { DataContext } from '../context/DataProvider'
const Login = () =>{
    const history = useNavigate();
    const { setAccount } = useContext(DataContext);
    
    const [error, setError] = useState(false)
    const LoginInitialValues = {
        username: '',
        password: ''
    }
    const [login,setlogin] = useState(LoginInitialValues);
    const onValueChange = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value });

    }
    const LoginUser=async()=>{
      let response =  await authenticateLogin(login)
      console.log(response);
      if (response.status === 200){
        setAccount(response.data.data.name)
        history("/")
      }else{
        setError(true)
      }
    }
    var el = document.getElementById('yo');
    if (el) {
        el.addEventListener('click', function (event) {
            event.preventDefault()
        });
    }
    return(
        <div className={styles.loginpage}>
            <Navbar/>
            <br/>
            <h1>LOGIN</h1>
            <div>
                <form className={styles.form}>
                    <input type="text" placeholder="Your UserName" name='username' onChange={(e)=> onValueChange(e)}></input><br></br>
                    <input type="password" placeholder="Password" name="password" onChange={(e)=> onValueChange(e)}></input><br/>
                   <br/>
                    <button onClick={()=>LoginUser()} id="yo">Login</button>

                </form>
            </div>
            <div>
                
                <Link to="/signup"><button>Signup</button></Link>
            </div><br>
            </br>
            {error&&"please Enter correct credentials"}
        </div>
    )
}

export default Login