import { toast } from "react-toastify";
import { useState } from "react";
import styles from "../styles/login.module.css";
import { login } from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    setLoggingIn(true);

    if (!email || !password) {
      toast.error("Enter both email/password");
      return;
    }

    const response = await login(email, password);

    if(response.success) {
      toast.success("Logged In!");
      return;
    } else {
      toast.error(response.message);
    }

    setLoggingIn(false);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Log In</span>

      <div className={styles.field}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <button disabled={loggingIn}>
          {loggingIn ? "Logging in.." : "Log In"}
        </button>
      </div>
    </form>
  );
}
