import Icons from "../atoms/Icons";

const HeroSection = () => {
  return (
    <section className=" relative h-[80vh] grid grid-cols content-center bg-black/70">
      {/* <div className="bg-backgroundImage h-full w-full bg-cover bg-black/70"> */}
      <div className="w-3/4 grid mx-auto">
        <div className="grid grid-rows-3 gap-1">
          <h3 className="text-4xl font-bold">Raleigh Efe</h3>
          <p>
            {"I'm a "}
            <span className="text-primary">Frontend Developer</span>
          </p>
          <div class="flex space-x-5 md:mt-0">
            <Icons type="Discord" />
            <Icons type="LinkedIn" />
            <Icons type="GitHub" />
            <Icons type="Twitter" />
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default HeroSection;