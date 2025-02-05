import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaJava } from "react-icons/fa";
import Slider from "react-slick";
import {
  SiTailwindcss,
  SiTypescript,
  SiSpringboot,
  SiPostgresql,
  SiPostman,
  SiJunit5,
  SiSelenium,
  SiJenkins,
} from "react-icons/si";
import LoadingSpinner from "./LoadingSpinner";

export const Skills = () => {
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <LoadingSpinner />;
  }

  const skillData = data[0][0].skills;
  const headerData = data[0][0]["header"];

  const skillIcons = {
    JavaScript: FaJs,
    "React.Js": FaReact,
    Java: FaJava,
    "Tailwind CSS": SiTailwindcss,
    TypeScript: SiTypescript,
    "Spring Boot": SiSpringboot,
    PostgreSQL: SiPostgresql,
    Postman: SiPostman,
    Testing: SiJunit5,
    Selenium: SiSelenium,
    Jenkins: SiJenkins,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-12 px-4 md:px-6 lg:px-8">
      <h2 className="font-semibold text-2xl md:text-3xl mb-8 md:mb-12 text-left dark:text-white">
        {headerData.title1}
      </h2>

      <div className="md:-mx-6 lg:-mx-8">
        <Slider {...settings} className="skills-slider">
          {skillData.map((skill, index) => {
            const Icon = skillIcons[skill.title];
            return (
              <div key={index} className="px-2 md:px-4">
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group h-full"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 md:p-3 rounded-lg bg-blue-50 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-gray-600 transition-colors duration-300">
                      {Icon && (
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-500 dark:text-blue-400" />
                      )}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold ml-3 md:ml-4 dark:text-white">
                      {skill.title}
                    </h3>
                  </div>

                  <div className="relative overflow-hidden">
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {skill.text}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${85 + index * 5}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
