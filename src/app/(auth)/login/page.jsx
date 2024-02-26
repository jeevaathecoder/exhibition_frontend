
import styles from "./login.module.css"
import { handleGithubLogin } from "@/lib/action";
import LoginForm from "@/component/loginForm/loginForm"
import HeroSection from "@/component/hero-section/HeroSection";

const LoginPage = () => {
    return (
      <div className={styles.container}>
        <HeroSection />
        <div className={styles.wrapper}>
          <form action={handleGithubLogin}>
            <button className={styles.github}>Login with Google</button>
          </form>
          <LoginForm />
        </div>
      </div>
    );
  }
  
  export default LoginPage;