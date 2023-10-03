"use client";
import Buttons from "../atoms/Buttons";
import Input from "../atoms/Input";
import { useState } from "react";
import SendMail from "../../../action/SendMails";
import Textarea from "../atoms/Textarea";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Hi");

    setIsSubmitting(true);
    try {
      SendMail({ name, email, message }).then((res) => {
        console.log(res.message);
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <form
      className="bg-gray-100 rounded-lg p-5 grid grid-rows_[min-content] gap-6"
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Enter your Name"
        type="text"
        inputMode="text"
        id="name"
        value={name}
        setValue={setName}
      />

      <Input
        placeholder="Enter your Email"
        type="text"
        inputMode="email"
        id="email"
        value={email}
        setValue={setEmail}
      />
      <Textarea
        placeholder="Add description"
        setValue={setMessage}
        id="message"
        value={message}
      />
      <Buttons disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Buttons>
    </form>
  );
};

export default Form;
