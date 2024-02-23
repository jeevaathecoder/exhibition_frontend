import Link from "next/link";
import styles from "./links.module.css"

const Links = () => {
    
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Stall List",
            path: "/",
        }
    ];

    const session = true;
    const isAdmin = true;
    const isExhib = false;
    const isUser = false;

    return(
        <div className={styles.links}>
            
            {
                session ? (
                    <>
                    {
                        isAdmin && (
                            <Link href="/admin" className={styles.signlinks}>Admin</Link>   
                        )
                    }
                    {
                        isExhib && (
                            <Link href="/admin" className={styles.signlinks}>Exhibitor</Link>   
                        )
                    }
                    {
                        isUser && (
                            <Link href="/admin" className={styles.signlinks}>User</Link>   
                        )
                    }
                    
                    <button>Logout</button>
                    </>
                ) : (
                    <>
                    <Link href="/login" className={styles.signlinks}>Login</Link>
                    <Link href="/login" className={styles.signlinks}>Register</Link>
                    </>
                )
            }
        </div>
    )
}

export default Links