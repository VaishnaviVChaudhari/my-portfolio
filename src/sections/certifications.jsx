import { motion } from "framer-motion";

const certification = [
  {
    title: "TWM Internship Java Certificate",
    img: "https://raw.githubusercontent.com/VaishnaviVChaudhari/Certificates/main/TWM%20INTERNSHIP%20Java%20CERTIFICATE%20_20231114_113246_0000_page-0001.jpg",
    url: "https://github.com/VaishnaviVChaudhari/Certificates/blob/main/TWM%20INTERNSHIP%20Java%20CERTIFICATE%20_20231114_113246_0000_page-0001.jpg"
  },
  {
    title: "Micro-Internship Data Analytics Certificate",
    img: "https://raw.githubusercontent.com/VaishnaviVChaudhari/Certificates/main/Micro-Internship%20Data%20Analytics%20Completion%20Certificate_page-0001.jpg",
    url: "https://github.com/VaishnaviVChaudhari/Certificates/blob/main/Micro-Internship%20Data%20Analytics%20Completion%20Certificate_page-0001.jpg"
  }
];

export default function Certification() {
  return (
    <section
      id="certification"
      className="min-h-screen flex flex-col items-start px-4 py-12 transition-colors duration-500"
    >
      <motion.h2
        className="text-4xl font-bold mb-8 px-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.4 }}
      >
        Certifications 🏆
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-20 h-[250px]">
        {certification.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full h-64 flex items-center justify-center bg-white">
              <img
                src={cert.img}
                alt={cert.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            {/* <p className="text-center font-semibold">{cert.title}</p> */}
          </a>
        ))}
      </div>
    </section>
  );
}
