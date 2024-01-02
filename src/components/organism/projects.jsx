import Layout from "../atoms/Layout";

const Projects = () => {
  const schema = [
    {
      image1: "",
      image2: "",
      prompt1: "Nextjs",
      prompt2: "Tailwind css",
      prompt3: "Responsive design",
      title: "Andemy Academy",
      text: "An online platform that offers introductory classes to tech enthusiasts in web programming and UI/UX design.",
      link: "https://www.andemyacademy.com/",
    },
    {
      image1: "",
      image2: "",
      prompt1: "Nextjs",
      prompt2: "Tailwind css",
      prompt3: "Responsive design",
      title: "Book Closet",
      text: "Book closet is the best eBook and audiobook app. Switch seamlessly between reading and listening, and discover a wide library of stories for hours of entertainment on the road.",
      link: "https://book-closet.vercel.app/",
    },
  ];
  return (
    <div>
      {/* <Layout> */}
      {schema.map((data) => (
        <div key={data}>
          <div>
            {/* images */}
            <div className="">
              <div className="h-56 w-full bg-slate-400 rounded-lg p-3">
                {/* <div className="bg-white h-full w-full rounded-lg"></div> */}
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* </Layout> */}
    </div>
  );
};

export default Projects;
