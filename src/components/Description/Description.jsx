import { FaChartBar } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";
import { DiAndroid } from "react-icons/di";

const Description = () => {
  return (
    <div className=" py-5 lg:py-10 p-3 md:p-5">
      <div className="flex items-center lg:flex-row flex-col gap-5 p-3 md:p-5 container">
        <div className="space-y-4 flex-1 p-3">
          {/* Section Title */}
          <SectionTitle text="description" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-slate-800 leading-tight">
            Some Beautyful Features Of Our Software
          </h1>

          <p className="text-lg text-slate-600 pb-5 text-left">
            Web-enabled deliverables without enterprise strategic theme are
            backward-compatible process improvements thenabled deliverib without
            enterprise strategic theme areas.
          </p>

          <div className="space-y-4 pb-5">
            <div className="group flex flex-col lg:flex-row gap-2 space-x-4 space-y-3 lg:space-y-0 items-center lg:items-top text-lg text-slate-600 ">
              <span className="group-hover:border-[#740fd7] border group-hover:bg-transparent bg-[#740fd7] p-3 rounded-full h-20 w-20 flex items-center justify-center transition-all duration-300">
                <DiAndroid className="w-8 h-8 text-white group-hover:text-[#740fd7]" />
              </span>
              <div>
                <p className="text-2xl font-semibold">Responsive design</p>
                <p className="text-sm">
                  Lorem Ipsum is simply dummy the printing typeseing Lorem Ipsum
                  has been standarddummy.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-2 space-x-4 space-y-3 lg:space-y-0 items-center lg:items-top text-lg text-slate-600 group">
              <span className="group-hover:border-[#740fd7] border transition-all duration-300 group-hover:bg-transparent bg-[#740fd7] p-3 rounded-full h-20 w-20 flex items-center justify-center">
                <FaChartBar className="w-8 h-8 text-white group-hover:text-[#740fd7]" />
              </span>
              <div>
                <p className="text-2xl font-semibold">Responsive design</p>
                <p className="text-sm">
                  Lorem Ipsum is simply dummy the printing typeseing Lorem Ipsum
                  has been standarddummy.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Description Image */}
        <div className="flex-1 ">
          <img
            src="/description.png"
            alt="website-description-image"
            className="w-full lg:p-10 lg:h-[600px] object-cover aboutImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
