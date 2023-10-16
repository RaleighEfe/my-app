"use client";
import Buttons from "../atoms/Buttons";
import Input from "../atoms/Input";
import { useState } from "react";
import Textarea from "../atoms/Textarea";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e, data) => {
    e.preventDefault();

    console.log("Hi");
    setIsSubmitting(true);
    try {
      fetch("/send-email", {
        method: "POST",
        body: {
          name,
          email,
          message,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            setSubmitMessage("Email sent successfully");
          } else {
            setSubmitMessage("Error sending email");
          }

          setName("");
          setEmail("");
          setMessage("");
        });

      setIsSubmitting(false);
    } catch (error) {
      console.error(error);
      setSubmitMessage("Failed to send message. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div>
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
          type="email"
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
        {submitMessage && (
          <p
            className={`mt-2 text-sm ${
              submitMessage.includes("Error")
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {submitMessage}
          </p>
        )}
        <Buttons disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Buttons>
      </form>
    </div>
  );
};

export default Form;
