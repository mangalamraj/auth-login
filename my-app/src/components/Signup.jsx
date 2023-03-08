import { useState, useContext } from "react"
import styles from "../styles/signup.module.css"
import { authenticateSignup } from "../service/api"
import Navbar from "./Navbar"
import { DataContext } from '../context/DataProvider'
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const history = useNavigate();
    const { setAccount } = useContext(DataContext);
    const signupInitialValues = {
        name: '',
        username: '',
        phonenumber: '',
        password: '',
        confirmpassword: ''
    }
    const [signup, setsignup] = useState(signupInitialValues);
    const onInputChange = (e) => {
        setsignup({ ...signup, [e.target.name]: e.target.value });

    }
    var el = document.getElementById('hello');
    if (el) {
        el.addEventListener('click', function (event) {
            event.preventDefault()
        });
    }

    
    const signupUser = async () => {


        let response = await authenticateSignup(signup)
        console.log(response)
        if (!response) return;

        setAccount(signup.name)
        history("/")
    }
    return (

        <div className={styles.formdiv}>
            <Navbar />
            <br />
            <h1>Signup</h1>
            <form className={styles.form}>
                <input type="text" placeholder="name" onChange={(e) => onInputChange(e)} name="name"></input><br />
                <input type="text" placeholder="username" onChange={(e) => onInputChange(e)} name="username"></input><br />
                <input type="text" placeholder="phone number" onChange={(e) => onInputChange(e)} name="phonenumber"></input><br />
                <input type="text" placeholder="password" onChange={(e) => onInputChange(e)} name="password"></input><br />
                <input type="text" placeholder="confirm password" onChange={(e) => onInputChange(e)} name="confirmpassword"></input><br /><br />
                <button onClick={() => signupUser()} id="hello">Submit</button>
            </form>
        </div>

    )
}

export default Signup