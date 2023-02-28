import { useState } from "react"
import { addUser } from "../services/api"
import styles from "../styles/Signup.module.css"
import Navbar from "./Navbar"
const Signup = () =>{

    
    
    const defaultValue={
        username: '',
        password: '',
        confirmpassword:''
    }
    const [User,SetUser]=useState(defaultValue)
    const onValueChange=(e)=>{
        
        SetUser({...User,[e.target.name]:e.target.value});
    }
    const addUserDetails = async()=>{
        await addUser(User);
        
    }
    return(
        <div className={styles.signuppage}>
            <Navbar/>
            <b>Signup</b>
            <div>
                <form className={styles.form}>
                    <input type="email" placeholder="Your UserName" onChange={(e)=>onValueChange(e)} name='email'></input><br></br>
                    <input type="password" placeholder="Password" name='password'></input><br/>
                    <input type="password" placeholder="ConfirmPassword" name='confirmpassword'></input><br/>
                   <br/>
                    <button onClick={addUserDetails}>Signup</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Signup