import HeroSection from "@/component/hero-section/HeroSection";
import styles from "./register.module.css";
import RegisterForm from "@/component/registerForm/registerForm";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <div className={styles.wrapper}>
        <RegisterForm/>
      </div>
    </div>
  );
};

export default RegisterPage;