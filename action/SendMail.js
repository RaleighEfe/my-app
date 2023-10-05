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
    url: "http://localhost:3000/api/sendEmail",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

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
