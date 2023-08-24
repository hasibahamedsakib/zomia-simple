import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container  py-20">
      <div className="flex items-center flex-col space-y-4">
        <SectionTitle text="Our Services" />
        <h1 className="text-5xl text-slate-900 font-bold">
          More Awesome Services
        </h1>
        <p className="text-lg text-slate-600 text-center">
          Web-enabled deliverables without enterprise strategic theme areas our
          land <br /> backward-compatible process improvements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 ">
        {services.map(({ id, title, description, image }) => {
          return (
            <div
              key={id}
              className="shadow-lg p-6 rounded-md space-y-3 text-center hover:shadow-2xl hover:scale-105 hover:top-10 transition-all duration-300"
            >
              <img
                src={image}
                alt=""
                className="w-40 h-40 mx-auto rounded-full"
              />
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className=" text-slate-600">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
