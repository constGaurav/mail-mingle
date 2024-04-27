import useMail from "./use-mail";
import styles from "./styles.module.css";

const Mail = () => {
  const { mail } = useMail();
  const { subject, message, sender, date } = mail;

  return (
    <div className={styles["mailContainer"]}>
      <h1 className={styles["title"]}>Mail</h1>
      <div className={styles["topSection"]}>
        <h2>{subject}</h2>
        <p>{date.toLocaleDateString()}</p>
      </div>
      <p className={styles["message"]}>{message}</p>

      <div className={styles["senderDetails"]}>
        <h3>From: </h3>
        <div className={styles["senderInfo"]}>
          <h4>{`${sender.firstName} ${sender.lastName} `}</h4>
          <p>({sender.email})</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
