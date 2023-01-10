import styles from "./styles.module.scss";
import { Button } from "@components";

import { AiOutlinePlusCircle } from "react-icons/ai";

export function Input() {
  return (
    <div className={styles["crm-input-container"]}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <Button icon={<AiOutlinePlusCircle />}>Criar</Button>
    </div>
  );
}
