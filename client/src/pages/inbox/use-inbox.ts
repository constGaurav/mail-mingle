import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMailRow } from "./types";

const generateRandomMails = (index: number, userId: string) => {
  const id = Math.random().toString(36).substring(2, 9);
  const sender = `John Doe ${userId}`;
  const subject =
    `Subject: ${index}` + Math.random().toString(36).substring(2, 9);
  const shortMessage =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni ipsam porro perspiciatis temporibus. Deserunt quas expedita unde possimus omnis.";
  const date = new Date();

  return { id, sender, subject, shortMessage, date };
};

const useInbox = () => {
  const { userId = "" } = useParams();

  const [allMails, setAllMails] = useState<IMailRow[]>([]);

  useEffect(() => {
    const mailList: IMailRow[] = [];
    for (let i = 0; i < 10; i++) {
      mailList.push(generateRandomMails(i, userId));
    }
    setAllMails(mailList);
  }, []);

  return {
    allMails,
  };
};

export default useInbox;
