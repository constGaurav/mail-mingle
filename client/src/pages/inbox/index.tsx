import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { IMailRow } from "./types";
import useInbox from "./use-inbox";

const MailRow = (mail: IMailRow) => {
  const navigate = useNavigate();
  const { id, sender, subject, shortMessage, date } = mail;
  const handleClick = (id: string) => {
    navigate(`/mail/${id}`);
  };

  return (
    <div
      className={styles["mailRowContainer"]}
      role="button"
      onClick={() => handleClick(id)}
    >
      <div className={styles["topSection"]}>
        <div className={styles["heading"]}>
          <h3>{sender} | </h3>
          <h4>Subject : {subject}</h4>
        </div>
        <p>Date: {date.toLocaleDateString()}</p>
      </div>
      <p className={styles["message"]}>{shortMessage}</p>
    </div>
  );
};

const Inbox = () => {
  const { allMails } = useInbox();
  return (
    <div className={styles["inboxContainer"]}>
      <h1 className={styles["title"]}>Inbox</h1>
      {allMails.map((mail) => (
        <MailRow key={mail.id} {...mail} />
      ))}
    </div>
  );
};

export default Inbox;
