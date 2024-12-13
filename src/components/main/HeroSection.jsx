import React from "react";
import { Typewriter } from "react-simple-typewriter";

import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { LuImages } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiSolidVideos } from "react-icons/bi";
import { GiCardJoker } from "react-icons/gi";

const HeroSection = () => {
  const navigate = useNavigate();

  const herotexts = ["Social Posts", "Images", "Memes", "Videos"];

  const features = [
    {
      name: "Text Posts",
      path: "/text",
      icon: <IoDocumentTextOutline className="text-[4rem]" />,
    },
    {
      name: "Images",
      path: "/images",
      icon: <LuImages className="text-[4rem]" />,
    },
    {
      name: "Memes",
      path: "/memes",
      icon: <GiCardJoker className="text-[4rem]" />,
    },
    {
      name: "Videos",
      path: "/videos",
      icon: <BiSolidVideos className="text-[4rem]" />,
    },
  ];
  const contributors = [
    {
      name: "Fahad Abbas",
      linkedin: "https://www.linkedin.com/in/fahadabbas-3042b0212/",
      image: assets.fahad,
    },
    {
      name: "Rahul",
      linkedin: "https://www.linkedin.com/in/rahulsinghds/",
      image: assets.rahul,
    },
    {
      name: "Sanket",
      linkedin:
        "https://www.linkedin.com/in/sanket-bodake-166a56294/?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app",
      image: assets.sanket,
    },
  ];

  const sponsors = [
    { name: "Groq", logo: assets.groq },
    { name: "IM", logo: assets.im },
    { name: "Vectara", logo: assets.vectara },
    { name: "BuildWithAi", logo: assets.buildWithAi },
  ];

  return (
    <div className="hero-section animate-fadeInTop">
      {/* Hero Text */}
      <div className="hero-text flex flex-col gap-8  p-4">
        <p className="text-2xl sm:text-3xl md:mt-4 md:text-[3rem] md:leading-[3rem] h-16 text-center">
          MetaMindAI can generate <br />
          <span className="bg-gradient-to-r from-[#4b90ff] to-[#ff5547] bg-clip-text text-transparent leading-8">
            <Typewriter
              words={herotexts}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>
        <p className="md:text-xl mt-10 lg:mt-14 text-gray-300 text-justify text-xs   leading-normal max-w-80 md:max-w-[80vw] mx-auto">
          Welcome to MetaMindAI, your one-stop platform for summary, text, images,
          videos, and memes generation! Whether you’re looking to write social
          posts, create stunning visuals, or produce engaging videos based on your summary, MetaMindAI
          tailors results to your unique needs.
        </p>
      </div>

      {/* Features */}
      <div className="features  mt-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Features
        </h2>
        <div className="featureCard flex  flex-wrap justify-center gap-8 p-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card flex p-2 flex-col gap-2 items-center justify-center bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md text-white rounded-lg shadow-lg cursor-pointer hover:bg-cyan-600 transition-all w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              onClick={() => navigate(feature.path)}
            >
              {feature.icon}
              <p className=" text-xs text-center">{feature.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="sponsors p-6 mt-20 flex flex-col gap-10 items-center">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Our Sponsors
        </h2>
        <div className="sponsor-logos flex flex-wrap justify-center gap-10">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 text-xl text-slate-200"
            >
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-lg shadow-lg hover:scale-105 transition-transform"
                />
              </a>
              <p>{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contributors Section */}
      <div className="contributors mt-16 flex flex-col gap-10 items-center">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Our Contributors
        </h2>
        <div className="contributor-profiles flex flex-wrap justify-center gap-10">
          {contributors.map((contributor, index) => (
            <div
              key={index}
              className="contributor text-center flex flex-col items-center mb-12"
            >
              <a
                href={contributor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={contributor.image}
                  alt={contributor.name}
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain rounded-full border-2 border-cyan-500 hover:scale-105 transition-transform"
                />
              </a>
              <p className="text-white mt-2">{contributor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
