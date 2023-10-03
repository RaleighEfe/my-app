"use client";
import Layout from "../atoms/Layout";
import Buttons from "../atoms/Buttons";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const Portfolio = () => {
  const scroll = useRef();
  const router = useRouter();

  scroll.current !== null && console.log();

  const slide = (direction) => {
    if (scroll.current) {
      direction === "right" && (scroll.current.scrollLeft += 1000);
      direction === "left" && (scroll.current.scrollLeft -= 1000);
    }
  };

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
    <section className="bg-blue-950 rounded-lg" id="portfolio">
      <Layout>
        {/* Portfolio Header and view more button */}
        <div className="grid text-center md:text-start gap-4 md:grid-cols-2">
          <h3 className="text-3xl md:text-4xl font-sembold text-white">
            Lets have a look at <br></br>{" "}
            <span className="text-primary">My Portfolio</span>
          </h3>
          <div className="grid justify-center content-center md:justify-end md:content-end">
            <Link
              href="/all-works"
              className="bg-primary px-3 py-2 rounded-lg text-white text-base"
            >
              View All My Works
            </Link>
          </div>
        </div>

        {/* Portfolio Content */}
        <Layout>
          <div className="relative mx-auto">
            <div className="flex gap-3 overflow-hidden" ref={scroll}>
              {/* {schema.map((i, data) => ( */}
              {/* <div key={i}> */}
              <div className="grid grid-rows_[min-content] gap-4 w-full">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="h-56 w-full bg-slate-400 rounded-lg p-3">
                    {/* <div className="bg-white h-full w-full rounded-lg"></div> */}
                  </div>
                  <div className="h-56 w-full bg-slate-400 rounded-lg"></div>
                </div>
                <div className="flex gap-3 justify-center">
                  <span className="px-3 py-1 grid justify-center content-center bg-gray-100 rounded-3xl">
                    {/* {data.prompt1} */}
                    Nextjs
                  </span>
                  <span className="px-3 py-1 grid justify-center content-center bg-gray-100 rounded-3xl">
                    {/* {data.prompt2} */}
                    Tailwindcss
                  </span>
                  <span className="px-3 py-1 grid justify-center content-center bg-gray-100 rounded-3xl">
                    {/* {data.prompt3} */}
                    Responsive design
                  </span>
                </div>
                <Link href="">
                  <div className="flex gap-2 justify-center">
                    <h4 className="text-2xl text-white">
                      {/* {data.title} */}
                      Andemy Academy
                    </h4>
                    <span className="grid content-center justify-center">
                      <FiExternalLink color="orange" size={24} />
                    </span>
                  </div>
                </Link>
                <p className="text-lg text-white text-center">
                  {/* {data.text} */}
                  An online platform that offers introductory classes to tech
                  enthusiasts in web programming and UI/UX design.
                </p>
              </div>
              {/* </div> */}
              {/* ))} */}
            </div>
            {/* Slide Controls */}
            <div className="flex gap-3 justify-center pt-4">
              <button className="md:p-1 rounded-full md:absolute md:bottom-[65%] md:-left-5 md:bg-gray-400">
                <span className="inline-flex items-center justify-center p-3 rounded-full bg-gray-400 md:bg-blue-950">
                  <AiOutlineArrowLeft className="text-white text-lg" />
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button className="md:p-1 rounded-full md:absolute md:bottom-[65%] md:-right-5 md:bg-white">
                <span className="grid content-center justify-center p-3 rounded-full bg-primary">
                  <AiOutlineArrowRight className="text-white text-lg" />
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </Layout>
      </Layout>
    </section>
  );
};

export default Portfolio;
