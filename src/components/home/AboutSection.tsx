import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, ServerCog, Network, PenTool } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: <Database size={24} />,
      title: 'Data Pipeline Development',
      description: 'Design and implementation of robust ETL pipelines to transform and load data efficiently.'
    },
    {
      icon: <ServerCog size={24} />,
      title: 'Data Warehouse Architecture',
      description: 'Building scalable data warehousing solutions with optimal schemas and data modeling.'
    },
    {
      icon: <Network size={24} />,
      title: 'Cloud Data Integration',
      description: 'Seamless integration of data across various cloud platforms and on-premises systems.'
    },
    {
      icon: <PenTool size={24} />,
      title: 'Process Automation',
      description: 'Automating data workflows and processes to reduce manual intervention and improve efficiency.'
    }
  ];

  return (
    <section id="about" className="section bg-background-secondary" ref={ref}>
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div 
            className="md:col-span-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-text-secondary mb-4">
              I'm a passionate ETL Engineer with over 8 years of experience in designing and implementing data integration solutions. 
              My expertise lies in transforming complex, messy data into clean, structured, and actionable information that drives 
              business decisions.
            </p>
            <p className="text-text-secondary mb-4">
              Throughout my career, I've worked with a wide range of technologies and platforms, from traditional relational 
              databases to modern cloud data warehouses and big data ecosystems.
            </p>
            <p className="text-text-secondary">
              My approach combines technical excellence with a deep understanding of business needs, ensuring that the data 
              solutions I develop not only work technically but also deliver real value to business.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-background-accent p-6 rounded-lg"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
            <ul className="space-y-4">
              <li className="text-text-secondary">
                <div className="flex justify-between mb-1">
                  <span>Python Programming</span>
                  <span>75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-primary-500" style={{ width: '75%' }}></div>
                </div>
              </li>
              <li className="text-text-secondary">
                <div className="flex justify-between mb-1">
                  <span>SQL & Database Design</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-primary-500" style={{ width: '90%' }}></div>
                </div>
              </li>
              <li className="text-text-secondary">
                <div className="flex justify-between mb-1">
                  <span>Cloud Data Services</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-primary-500" style={{ width: '85%' }}></div>
                </div>
              </li>
              <li className="text-text-secondary">
                <div className="flex justify-between mb-1">
                  <span>Data Orchestration</span>
                  <span>92%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress bg-primary-500" style={{ width: '92%' }}></div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="mt-16">
          <motion.h3 
            className="text-2xl font-semibold mb-8 text-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            What I Do
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="card p-6 hover:shadow-lg hover:translate-y-[-5px]"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
              >
                <div className="text-primary-500 mb-4">{service.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-text-secondary">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;