import bannerImg from "./assets/banner-stack.png";
const Hero = () => {
  return (
    <div className="flex justify-between items-center container mx-auto ">
      <div className="space-y-8">
        <h1 className="text-5xl font-extrabold ">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p>
          Explore frontend, backend, database, and tooling options,
          <br /> compare them side by side, and put together the stack that fits
          your <br /> next project.
        </p>
        <div className="flex gap-4">
          <button className=" text-white bg-linear-to-r from-[#f97316] via-[#ec4899] to-[#8b5cf6] btn ">
            Explore Technologies
          </button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
