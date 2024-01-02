import Layout from "../atoms/Layout";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import CropText from "../atoms/CropText";

const Works = () => {
  const schema = [
    {
      title: "phil",
      desc: "An online platform that offers introductory classes to tech enthusiasts in web programming and UI/UX design.",
      site: "https://www.andemyacademy.com/",
    },
    {
      title: "three",
      desc: "Book closet is the best eBook and audiobook app. Switch seamlessly between reading and listening, and discover a wide library of stories for hours of entertainment on the road.",
      site: "https://book-closet.vercel.app/",
    },
  ];
  return (
    <div>
      <section className="bg-blue-950 text-white">
        <Layout>
          <div className="grid md:grid-cols-2 gap-4">
            {schema.map((data) => (
              <div key={data}>
                <div className="max-w-s p-6 border border-gray-200 rounded-lg shadow">
                  <h3 className="text-3xl md:text-2xl font-sembold mb-2 font-bold tracking-tight">
                    {data.title}
                  </h3>
                  <p className="font-xl mb-2">
                    <CropText text={data.desc} />
                    {/* {data.desc} */}
                  </p>
                  <Link href={data.site}>
                    <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-orange-600">
                      Visit site
                      <span>
                        <IoIosArrowRoundForward size={24} />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Layout>
      </section>
    </div>
  );
};

export default Works;
