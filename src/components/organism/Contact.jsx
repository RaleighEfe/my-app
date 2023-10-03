import Heading from "../atoms/Heading";
import Layout from "../atoms/Layout";
import Form from "../molecules/Form";

const Contact = () => {
  return (
    <section id="contact">
      <Layout>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="">
            <Heading>
              {"Let's"} <span className="text-primary">Connect</span> &{" "}
              <br></br> <span className="text-primary">Collaborate</span>
            </Heading>
            <p className="text-lg">
              Send us an email today to book an appointment. {"Don't"} put it
              off any longer. Reach out!.
            </p>
          </div>
          <Form />
        </div>
      </Layout>
    </section>
  );
};

export default Contact;
