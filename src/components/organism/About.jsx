import Image from "next/image";
import Heading from "../atoms/Heading";
import Layout from "../atoms/Layout";

const About = () => {
  const data = [
    {
      icon: "/assets/icons/idea.png",
      title: "Requirements and design",
      text: "Meet with stakeholders, understand layout and aesthetic mockups, design user interactions, and define user journeys, flows, and interactive features.",
    },
    {
      icon: "/assets/icons/coding.png",
      title: "Coding and development",
      text: "Create HTML/CSS for a responsive design, JavaScript for interactivity, and utilize frameworks like React to enable accessibility depending on usecase",
    },
    {
      icon: "/assets/icons/cloud.png",
      title: "Optimization and deployment",
      text: "Optimize code and assets for speed, test on multiple platforms, deploy to servers/cloud, and manage with monitoring and updates.",
    },
  ];
  return (
    <div>
      <section className="bg-gray-100" id="about">
        <Layout>
          <div>
            <Heading>About Me</Heading>
            <p className="text-lg font-normal py-5">
              A dedicated web developer. I develop dynamic online experiences
              through user-centric design and a solid knowledge of front-end
              technology. I create clean and intuitive interfaces using HTML,
              CSS, JavaScript, and frameworks like as React. I work closely with
              clients to ensure their objectives are realized. My work is
              motivated by lifelong learning and remaining current with industry
              developments. {"Let's"} go on an exciting web development
              adventure together!
            </p>
          </div>
          <div className="">
            <h3 className="text-3xl font-sembold text-center py-5">
              My Working <span className="text-primary">Process</span>
            </h3>
            <div className="grid gap-3 md:grid-cols-3">
              {data.map((item, i) => (
                <div key={i} className="grid grid-rows-[1fr_auto] gap-1 p-5">
                  <div className="relative mx-auto">
                    <Image src={item.icon} height={70} width={70} alt="image" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-center grid content-center md:content-end">
                      {item.title}
                    </h4>
                    <p className="text-sm text-center">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Layout>
      </section>
    </div>
  );
};

export default About;
