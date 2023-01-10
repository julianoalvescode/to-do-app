import styles from "./styles.module.scss";
import logo from "@logo";

export function Header() {
  return (
    <header className={styles["crm-header"]}>
      <img src={logo} />
    </header>
  );
}
