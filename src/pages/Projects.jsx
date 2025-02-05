import Slider from "react-slick";
import { useSelector } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaInfoCircle,
} from "react-icons/fa";
import LoadingSpinner from "../components/LoadingSpinner";

// Resimleri import et
import project1Img from "../assets/projectsResim/project1.jpg";
import project2Img from "../assets/projectsResim/project2.jpg";
import project3Img from "../assets/projectsResim/project3.png";

// Proje resimlerini eşleştir
const projectImages = {
  "Teknolojik Yemekler": project1Img,
  TwitterClone: project2Img,
  "N11 Test Otomasyonu": project3Img,
  "Technological Dishes": project1Img,
  "N11 Test Automation": project3Img,
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <LoadingSpinner />;
  }

  const headerData = data[0][0]["header"];
  const projeData = data[0][0].projects;

  if (!projeData || !Array.isArray(projeData)) {
    return (
      <div className="text-center py-10 text-gray-600 dark:text-gray-300">
        Proje verisi bulunamadı
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
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

  function closeModal() {
    setIsModalOpen(false);
    setSelectedProject(null);
  }

  function openModal(project) {
    setSelectedProject(project);
    setIsModalOpen(true);
  }

  return (
    <div className="space-y-8 py-8 md:py-10 px-4 md:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-left font-semibold text-2xl md:text-3xl">
          {headerData.title2}
        </h2>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
          <FaInfoCircle className="mr-2" />
          <span>Detaylar için kartlara tıklayın</span>
        </div>
      </div>

      <div className="md:-mx-6 lg:-mx-8">
        <Slider {...settings} className="project-slider">
          {projeData.map((proje, index) => (
            <div key={index} className="px-2 md:px-4">
              <div
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 h-full cursor-pointer relative"
                onClick={() => openModal(proje)}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="text-white text-center">
                    <FaInfoCircle size={24} className="mx-auto mb-2" />
                    <span className="text-sm font-medium">Detayları Gör</span>
                  </div>
                </div>

                <div className="relative">
                  <img
                    className="w-full h-48 md:h-64 object-cover group-hover:opacity-75 transition-opacity duration-300"
                    src={projectImages[proje.title]}
                    alt={proje.title}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={proje.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-200 p-2 rounded-full bg-black bg-opacity-50"
                    >
                      <FaGithub size={20} className="md:w-6 md:h-6" />
                    </a>
                    <a
                      href={proje.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-200 p-2 rounded-full bg-black bg-opacity-50"
                    >
                      <FaExternalLinkAlt size={20} className="md:w-6 md:h-6" />
                    </a>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg md:text-xl font-semibold dark:text-white">
                      {proje.title}
                    </h3>
                    <FaInfoCircle className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                  </div>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                    {proje.text}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proje.technologies?.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 md:px-3 py-1 text-xs md:text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {proje.technologies?.length > 3 && (
                      <span className="px-2 md:px-3 py-1 text-xs md:text-sm bg-blue-100 dark:bg-blue-900 rounded-full text-blue-700 dark:text-blue-300">
                        +{proje.technologies.length - 3} diğer
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  {selectedProject && (
                    <>
                      <div className="relative">
                        <button
                          onClick={closeModal}
                          className="absolute right-0 top-0 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <FaTimes size={24} />
                        </button>

                        <Dialog.Title
                          as="h3"
                          className="text-2xl font-bold leading-6 text-gray-900 dark:text-white mb-4"
                        >
                          {selectedProject.title}
                        </Dialog.Title>
                      </div>

                      <div className="mt-4">
                        <img
                          src={projectImages[selectedProject.title]}
                          alt={selectedProject.title}
                          className="w-full h-64 object-cover rounded-lg mb-6"
                        />

                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          {selectedProject.text}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-2 dark:text-white">
                            Kullanılan Teknolojiler
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies?.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                          >
                            <FaGithub size={20} />
                            GitHub Repo
                          </a>
                          <a
                            href={selectedProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                          >
                            <FaExternalLinkAlt size={20} />
                            Canlı Demo
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
