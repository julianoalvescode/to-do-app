import { Header, Input } from "@components";

import styles from "./styles.module.scss";

export function Home() {
  return (
    <>
      <main>
        <Header />
        <div className={styles["crm-container"]}>
          <Input />
        </div>
      </main>
    </>
  );
}
