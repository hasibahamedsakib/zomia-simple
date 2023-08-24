import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { BsFillCheckCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="bg-[#f7f7ff] py-5 lg:py-10 p-3 md:p-5">
      <div className="flex items-center lg:flex-row flex-col gap-5 p-3 md:p-5 container">
        <div className="flex-1 ">
          <img
            src="/abt1.png"
            alt="website-about_image"
            className="w-full lg:p-10 lg:h-[600px] object-cover aboutImg"
          />
        </div>
        <div className="space-y-4 flex-1 p-3">
          <SectionTitle text="About Us" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-slate-800 leading-tight">
            Some Beautyful Features Of Our Software
          </h1>

          <p className="text-lg text-slate-600 pb-5 text-left">
            Web-enabled deliverables without enterprise strategic theme are
            backward-compatible process improvements thenabled deliverib without
            enterprise strategic theme areas.
          </p>

          <div className="space-y-2 pb-5">
            <span className="flex gap-2 items-center text-lg text-slate-600">
              {" "}
              <BsFillCheckCircleFill className="w-5 h-5 text-[#ff8c00]" />{" "}
              Deoset accusamus et iusto odio
            </span>
            <span className="flex gap-2 items-center text-lg text-slate-600">
              {" "}
              <BsFillCheckCircleFill className="w-5 h-5 text-[#740fd7]" />{" "}
              Distinctively brand adap innovation
            </span>
            <span className="flex gap-2 items-center text-lg text-slate-600">
              {" "}
              <BsFillCheckCircleFill className="w-5 h-5 text-[#00ced1]" />{" "}
              Elderly Is Detract Tedious Assured.
            </span>
          </div>
          <Link to="/">
            <button className="btn-main ">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
