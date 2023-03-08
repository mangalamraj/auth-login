import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

import {DataContext} from "../context/DataProvider"

const Navbar = () => {
    const {account,setAccount} = useContext(DataContext);
    var el = document.getElementById('yo');
    if (el) {
        el.addEventListener('click', function (event) {
            event.preventDefault()
        });
    }
    const Logout =()=>{
        setAccount("")
    }
    return (
       
        <div className={styles.parent}> 
            <div className={styles.Navbar}>
                <div className={styles.Head}>
                    <Link to="/">Example</Link>
                </div>
                <div className={styles.items}>
                    {
                        account?<span className={styles.user}>{account}</span>:<span className={styles.user}></span>
                        }
                    {account?<button onClick={()=>Logout()} id="yo">Logout</button>:<Link to="/login"><div className={styles.login}>login</div></Link>}
                    <div className={styles.cart}>
                        Cart
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default Navbar