import axios from "axios";

const SendMail = ({ name, email, message }) => {
  let data = JSON.stringify({
    name,
    email,
    message,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/contact",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
//   await axios.post("http://localhost:4000/send_mail", {    // use port 4000 not 3000
//     name
// });

  const mail = axios
    .request(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });

  return mail;
};

export default SendMail;
