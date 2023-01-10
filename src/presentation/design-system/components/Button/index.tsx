import styles from "./styles.module.scss";

import * as I from "./types";

export function Button({ icon, children, ...rest }: I.ButtonProps) {
  return (
    <>
      <button {...rest} className={styles["crm-button"]}>
        {children}
        {icon}
      </button>
    </>
  );
}
