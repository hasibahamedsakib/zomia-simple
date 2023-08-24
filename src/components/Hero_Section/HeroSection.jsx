import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-[url('/hero-bg.jpg')] bg-cover   py-10">
      <div className="flex items-center lg:flex-row flex-col gap-5 p-3 md:p-5 container">
        <div className="space-y-4 flex-1 ">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold  text-slate-800 leading-tight">
            Bespoke Software <span>Development</span>
          </h1>

          <p className="text-lg text-slate-600 pb-5">
            Zomia software landing page software responsible whatever <br />{" "}
            modern Template suitable for Your business.
          </p>
          <Link to="/">
            <button className="btn-main ">Get A Started</button>
          </Link>
        </div>

        <div className="flex-1 pt-10">
          <img
            src="/hero-1.png"
            alt="website-hero_image"
            className="w-full p-6 "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
