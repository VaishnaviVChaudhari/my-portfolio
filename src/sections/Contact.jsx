import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import myPhoto from "../images/Photo.jpg"; // ✅ Update path as needed

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-row justify-between items-center px-6 py-12  transition-colors duration-500"
    >
      {/* Left Section: Contact Info */}
      <div className="flex-1 ml-10">
        {/* <h2 className="text-5xl mb-4 text-gray-100">Reach Out to Me!</h2> */}
        <h2 className="text-5xl mb-4">Reach Out to Me!</h2>

        {/* <p className="text-lg text-gray-300 mb-6 max-w-xl"> */}
        <p className="text-lg mb-6 max-w-xl">

          I'm always open to discussing new projects, collaboration opportunities, or full-time roles. 
          Feel free to drop me a message — I’ll get back to you as soon as I can.
        </p>
         <p className="text-md  mb-6">
          Open to opportunities: <span className="font-semibold">Yes</span>
        </p>


       <div className="flex space-x-6 text-2xl mb-4">
  <a
    href="https://github.com/VaishnaviVChaudhari"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-700  text-white hover:bg-black hover:text-white transition duration-300"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/vaishnavi-chaudhari-70bb11256"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500 text-white-500 hover:bg-black hover:text-blue-300 transition duration-300"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:cvaishnavi300@gmail.com"
    className="flex items-center justify-center w-9 h-9 rounded-full bg-red-500 text-white-500 hover:bg-black hover:text-red-300 transition duration-300"
  >
    <FaEnvelope />
  </a>

  <a
    href="https://www.instagram.com/Vaishnavi_Chaudhari_18"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-9 h-9 rounded-full bg-pink-500 text-white-500 hover:bg-black hover:text-pink-500 transition duration-300"
  >
    <FaInstagram />
  </a>
</div>

       

       
        {/* <a
          href="mailto:cvaishnavi300@gmail.com"
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-500 transition"
        >
          Let's Connect
        </a> */}
      </div>

      {/* Right Section: Circular Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end pr-6">
        <img
          src={myPhoto}
          alt="Vaishnavi Chaudhari"
          className="w-64 h-64 object-cover rounded-full border-4 border-purple-600 shadow-lg"
        />
      </div>
    </section>
  );
}
