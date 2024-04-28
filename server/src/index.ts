import { SMTPServer } from "smtp-server";

const server = new SMTPServer({
  onConnect(session, callback) {
    // callback(new Error("Not implemented")); // If you want to reject
    callback(); // If you want to accept
  },

  onMailFrom(address, session, callback) {
    console.log(`Mail from: ${address.address}`);
    callback();
  },

  onRcptTo(address, session, callback) {
    console.log(`Rcpt to: ${address.address}`);
    callback();
  },

  onData(stream, session, callback) {
    console.log("Data stream received");
    stream.pipe(process.stdout); // Pipe the email data to stdout
    stream.on("end", callback);
  },

  onClose(session) {
    console.log("Session closed");
  },
});

server.listen(25, () => {
  console.log("SMTP server listening on port 25");
});
