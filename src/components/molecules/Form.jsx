"use client";
import Buttons from "../atoms/Buttons";
import Input from "../atoms/Input";
import { useState } from "react";
import Textarea from "../atoms/Textarea";

const Form = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  function handleInput(evt) {
    setMailData((prevState) => {
      return {
        ...prevState,
        [evt.target.name]: evt.target.value,
      };
    });
  }

  const handleSubmit = async (e, data) => {
    e.preventDefault();

    console.log("Hi");
    setIsSubmitting(true);
    try {
      fetch("/send-email", {
        method: "POST",
        body: JSON.stringify(mailData),
      })
        // .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            setSubmitMessage("Error sending email");
          } else {
            setSubmitMessage("Email sent successfully");
          }
          setMailData({
            name: "",
            email: "",
            message: "",
          });
        });

      setIsSubmitting(false);
    } catch (error) {
      console.error(error);
      setSubmitMessage("Failed to send message. Please try again later.");
    }
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
          name="name"
          value={mailData.name}
          setValue={handleInput}
        />

        <Input
          placeholder="Enter your Email"
          type="email"
          inputMode="email"
          name="email"
          value={mailData.email}
          setValue={handleInput}
        />
        <Textarea
          placeholder="Add description"
          setValue={handleInput}
          name="message"
          value={mailData.message}
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
