import bamulogo from '../images/bamulogo.jpg';
import rblogo from '../images/RBLogo.png';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    
    <div className="min-h-screen  flex items-start px-10 px-4 py-16  transition-colors duration-500">
     
      <div className="max-w-4xl w-full">
        
 <motion.h2
          className="text-4xl font-bold mb-8 px-12 "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.4 }}
        >
          Education
        </motion.h2>
        <div className="space-y-6 ">
          {/* Master's Degree */}

<div
  className="
   p-6 rounded-lg hover:shadow-lg hover:shadow-black hover:border-black items-start px-12 dark:hover:shadow-white dark:hover:border-white
  "
>              <div className='flex'>
            <img src={bamulogo} alt="BAMU University Logo" className=" w-20 h-20 object-cover mt-4" />
            </div>
             <h3 className="text-xl flex font-semibold mt-4">DR BABASAHEB AMBEDKAR MARATHWADA UNIVERSITY </h3>
            <p className="flex font-semibold">Master of Science in Information Technology</p>
            <p className="flex ">Jully 2022 – April 2024</p>
          </div>

          {/* Bachelor's or Diploma */}
            <div className=" p-8 rounded-lg hover:shadow-lg hover:shadow-black hover:border-black items-start px-12 dark:hover:shadow-white dark:hover:border-white">
          <div className='flex'>
            <img src={rblogo} className='w-20 h-20 object-cover mt-4 '/>
          </div>
            <h3 className="text-xl flex  font-semibold mt-4">R B ATTAL COLLEGE OF SCIENCE </h3>
            <p className="flex font-semibold">Bachelor of Science in Computer Science</p>
            <p className="flex ">Jully 2018 – April 2021</p>
          </div>

        </div>


      </div>
    </div>
  )
}
