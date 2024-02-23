import styles from "./footer.module.css";

const Footer = () => {
    return(

        <div className={`${styles.container} h-10 bg-blue-500`}> 
            <div className={styles.textalign}>Copyright @airma_creatives | 2024</div>
        </div>


    )
}

export default Footer