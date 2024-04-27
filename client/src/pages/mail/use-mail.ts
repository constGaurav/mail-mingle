import { useParams } from "react-router-dom";
import { IMail } from "./types";

const useMail = () => {
  const { mailId = "" } = useParams();

  const MOCK_MAIL: IMail = {
    id: "1",
    sender: {
      id: "user-1",
      firstName: "John",
      lastName: "Doe",
      email: "pIi5U@example.com",
    },
    subject: "Subject: Test",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni ipsam porro perspiciatis temporibus. Deserunt quas expedita unde possimus omnis.",
    date: new Date(),
  };

  return {
    mail: MOCK_MAIL,
  };
};

export default useMail;
