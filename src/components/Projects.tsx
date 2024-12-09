import React, { useState } from "react";
import { PROJECTS } from "../constants/index.js";
import { motion } from "framer-motion";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image: string, images: string[], index: number) => {
    setModalImage(image);
    setModalImages(images);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    setModalImages([]);
    setCurrentIndex(0);
  };

  const navigateLeft = () => {
    const newIndex =
      (currentIndex - 1 + modalImages.length) % modalImages.length;
    setCurrentIndex(newIndex);
    setModalImage(modalImages[newIndex]);
  };

  const navigateRight = () => {
    const newIndex = (currentIndex + 1) % modalImages.length;
    setCurrentIndex(newIndex);
    setModalImage(modalImages[newIndex]);
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => {
          const [currentImage, setCurrentImage] = useState(project.image[0]);

          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={currentImage}
                  width={300}
                  height={300}
                  alt={project.title}
                  className="mb-4 rounded h-auto cursor-pointer"
                  onClick={() =>
                    openModal(
                      currentImage,
                      project.image,
                      project.image.indexOf(currentImage)
                    )
                  }
                />
                <div className="flex gap-2">
                  {project.image.map((image, thumbIndex) => (
                    <img
                      key={thumbIndex}
                      src={image}
                      alt={`Thumbnail ${thumbIndex}`}
                      width={30}
                      height={30}
                      className={`rounded cursor-pointer ${
                        currentImage === image
                          ? "border-2 border-purple-900"
                          : "border border-neutral-700"
                      }`}
                      onClick={() => setCurrentImage(image)}
                    />
                  ))}
                </div>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 my-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <button
                    key={index}
                    className="block my-2 bg-neutral-900 px-2 py-1 text-md text-purple-900 font-medium hover:bg-purple-900 hover:text-neutral-900 rounded"
                  >
                    GitHub Repo
                  </button>
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            className="absolute top-4 right-4 text-white text-xl"
            onClick={closeModal}
          >
            ✕
          </button>
          <button
            className="absolute left-4 text-white text-2xl"
            onClick={navigateLeft}
          >
            ◀
          </button>
          <img
            src={modalImage!}
            alt="Zoomed"
            className="max-h-full max-w-full rounded"
          />
          <button
            className="absolute right-4 text-white text-2xl"
            onClick={navigateRight}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
