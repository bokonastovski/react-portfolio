import React from "react";
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Certificates</h1>
      <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          src="/images/BrainsterCertificate1.jpg"
          alt="Certificate 1"
          className="mx-auto"
        />
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          src="/images/BrainsterCertificate2.jpg"
          alt="Certificate 2"
          className="mx-auto"
        />
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          src="/images/BrainsterCertificate3.jpg"
          alt="Certificate 3"
          className="mx-auto"
        />
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          src="/images/CertificateSparkasse.jpg"
          alt="Certificate Sparkasse"
          className="mx-auto"
        />
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          src="/images/CertificateLargerWorld.jpg"
          alt="Certificate LargerWorld"
          className="mx-auto"
        />
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          src="/images/CertificateSava.jpg"
          alt="Certificate Sava"
          className="mx-auto"
        />
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          src="/images/letterOfRecommendation.jpg"
          alt="Letter of Recommendation"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Certificates;
