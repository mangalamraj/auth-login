import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";


const Navbar = () => {
    return (
        <div className={styles.parent}> 
            <div className={styles.Navbar}>
                <div className={styles.Head}>
                    Example
                </div>
                <div className={styles.items}>
                    <span className={styles.user}></span>
                    <Link to="/login"><div className={styles.login}>login</div></Link>
                    <div className={styles.cart}>
                        Cart
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar