import { useState } from "react";

const ReactServices = ({ servicesData }) => {
  const [IsActive, SetIsActive] = useState(servicesData?.section[0]?.Title || "");
  
  const baseUrl = import.meta.env.STRAPI_URL;
  const fallbackImages = [
    "/backpain.jpg",
    "/pregnancy.jpg",
    "/headaches.jpg",
    "/backpain.jpg",
    "/vertigo.jpg",
    "/arthritis.jpg",
    "/migraines.jpg"
  ];

  const getImageUrl = (img, index) => {
    if (!img) return fallbackImages[index % fallbackImages.length];
    return `${baseUrl}${img}`;
  };

  const activeService = servicesData?.section?.find(
    (service) => service.Title === IsActive
  );

  return (
    <section className="bg-[#67278503] pb-20">
      <div className="max-w-[1860px] mx-auto px-4 xl:px-8 overflow-hidden">
        <div className="w-full flex flex-col items-center justify-center gap-1 mt-16 mb-12 max-md:mb-7 max-md:mt-7">
          <div className="px-[25px] text-[22px] min-h-[52px] min-w-[163px] w-fit font-medium flex items-center py-[2px] pb-0 text-primary bg-[#FFF1F1] border-b-0 border-r-0 border-t-0 border-l-[3px] border-[#F0005C] rounded-[5px] max-lg:text-base max-lg:min-w-[130px] max-lg:min-h-[46px] mb-3 text-nowrap">
            Our Services
          </div>
          <h1 className="font-bold lg:text-4xl text-2xl">
            {servicesData?.Title || "Our Chiropractic Services"}
          </h1>
        </div>
        {servicesData?.section?.map((service, index) => (
          <div
            key={index}
            className={`flex gap-12 max-md:hidden pt-20 w-full ${service.reverse ? "flex-row-reverse" : ""}`}
          >
            <div className="w-[40%] relative">
              <img
                src={getImageUrl(service.image?.data?.attributes?.url, index)}
                alt={service.Title}
                className="w-full h-full object-cover rounded-tl-[120px] rounded-br-[120px]"
              />
              <span
                style={{ borderRadius: "38px 72px 0px 38px" }}
                className="absolute flex justify-center items-center gap-2 bg-primary text-white p-4 pr-6 text-lg font-bold bottom-4 left-4"
              >
                Read More
                <img src="whiteright.svg" alt="arrow" className="w-7 h-7" />
              </span>
            </div>
            <div className="w-[60%]">
              <h1 className="font-semibold text-[30px] mt-3 max-lg:text-center max-xl:text-2xl">
                {service.Title}
              </h1>
              {service.description.map((desc, i) => (
                desc.children[0].text && (
                  <p key={i} className="text-xl text-[#434343] mt-6 max-lg:text-center max-xl:text-[17px]">
                    {desc.children[0].text}
                  </p>
                )
              ))}
            </div>
          </div>
        ))}
        
        {/* Mobile view */}
        <div className="grid grid-cols-2 items-center justify-center md:hidden">
          {servicesData?.section?.map((service, index) => (
            <button
              key={index}
              className={`p-5 max-px-12 max-sm:text-sm font-semibold ${
                IsActive === service.Title
                  ? "bg-darkpurple text-white"
                  : "text-black bg-white border"
              } ${
                index === servicesData.section.length - 1
                  ? "col-span-2 justify-center mx-auto px-12"
                  : ""
              }`}
              onClick={() => SetIsActive(service.Title)}
            >
              {service.Title}
            </button>
          ))}
        </div>
        {activeService && (
          <div
            className={`flex flex-col-reverse justify-center items-center gap-12 md:hidden pt-3 w-full`}
          >
            <div className=" relative flex flex-col items-center gap-5 justify-center">
              <img
                src={getImageUrl(
                  activeService.image?.data?.attributes?.url,
                  servicesData.section.findIndex(s => s.Title === activeService.Title)
                )}
                alt={activeService.Title}
                className="w-full h-full object-cover rounded-tl-[120px] rounded-br-[120px]"
              />
              <span className=" flex w-fit justify-center items-center gap-2  bg-primary text-white p-4 pr-9 text-lg font-bold  left-4 rounded-2xl rounded-bl-none">
                Read More
              </span>
            </div>
            <div>
              <h1 className="font-semibold text-[30px]  mt-3 max-lg:text-center max-xl:text-2xl">
                {activeService.Title}
              </h1>
              {activeService.description.map((desc, i) => (
                desc.children[0].text && (
                  <p key={i} className="text-xl text-[#434343] mt-6 max-lg:text-center max-xl:text-[17px]">
                    {desc.children[0].text}
                  </p>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReactServices;
