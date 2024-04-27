import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Inbox from "./pages/inbox";
import Mail from "./pages/mail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbox/:userId" element={<Inbox />} />
        <Route path="/mail/:mailId" element={<Mail />} />
      </Routes>
    </>
  );
}

export default App;
