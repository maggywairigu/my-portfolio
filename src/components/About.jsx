import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{ max: 45, scale: 1, speed: 450}} className='bg-tertiery rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'></img>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div> 
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} > 
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'>
        I'm an ambitious third-year student at the Technical University of Kenya, specializing in software frontend development. With a passion for creating captivating user experiences, I excel in crafting dynamic and interactive applications using HTML, CSS, JavaScript, and React. Through my dedication and perseverance, I've earned certifications in these technologies from freeCodeCamp, showcasing my commitment to honing my skills. <br />As I expand my expertise, I've recently embarked on a journey into backend development with Python, as part of the esteemed ALX Software Development program. By combining my frontend prowess with backend knowledge, I'm poised to create comprehensive and robust solutions. Join me on this exciting journey as we bring innovation and creativity to life through the power of code. Together, let's build a digital world that captivates, inspires, and leaves a lasting impact.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")