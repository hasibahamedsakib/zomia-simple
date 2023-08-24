import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const Services = () => {
  const [services, setServices] = useState([]);

  //Fetching Services Data on the service.data.json file.
  useEffect(() => {
    fetch("service.data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container py-5 lg:py-20 p-3 md:p-5">
      <div className="flex items-center flex-col space-y-4 ">
        <SectionTitle text="Our Services" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 font-bold">
          More Awesome Services
        </h1>
        <p className=" text-slate-600 text-center">
          Web-enabled deliverables without enterprise strategic theme areas
          ourland <br /> backward-compatible process improvements
        </p>
      </div>

      {/* display all services data. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 z-10 pt-10 p-3">
        {services.map(({ id, title, description, image }) => {
          return (
            <div
              key={id}
              className="shadow-md lg:w-[380px] lg:h-[420px]  p-6 rounded-md space-y-3 text-center hover:shadow-2xl hover:scale-105 hover:top-10 transition-all duration-300 hover:translate-y-[-10px] mb-5"
            >
              <img
                src={image}
                alt=""
                className="w-48 h-40 mx-auto rounded-full object-cover"
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
