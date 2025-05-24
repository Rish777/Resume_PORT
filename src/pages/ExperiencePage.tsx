import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase as BriefcaseBusiness, Award, GraduationCap, ArrowDown } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon?: string;
}

const experiences: Experience[] = [
  {
    title: "Senior ETL Engineer",
    company: "DataCorp Solutions",
    location: "San Francisco, CA",
    period: "2020 - Present",
    description: [
      "Lead a team of 5 data engineers in designing and implementing ETL pipelines for enterprise clients",
      "Architected and delivered a cloud data warehouse migration, reducing costs by 40% and query times by 65%",
      "Implemented real-time data integration pipelines processing over 5TB of data daily",
      "Spearheaded the adoption of data quality frameworks, reducing data errors by 85%"
    ],
    technologies: ["Snowflake", "AWS", "Apache Airflow", "Python", "dbt", "Kafka"]
  },
  {
    title: "Data Engineer",
    company: "FinTech Innovations",
    location: "New York, NY",
    period: "2017 - 2020",
    description: [
      "Developed robust ETL processes for financial data, ensuring regulatory compliance",
      "Built data pipelines to integrate 12 disparate source systems into a unified data warehouse",
      "Created automated data validation and reconciliation tools, saving 30+ hours weekly",
      "Improved ETL process performance by 50% through optimization and parallelization"
    ],
    technologies: ["Azure", "SQL Server", "SSIS", "Python", "C#", "PowerBI"]
  },
  {
    title: "Database Developer",
    company: "TechStart Inc.",
    location: "Chicago, IL",
    period: "2015 - 2017",
    description: [
      "Designed and optimized database schemas for performance and scalability",
      "Developed stored procedures and ETL scripts for data processing workflows",
      "Collaborated with data analysts to translate business requirements into technical solutions",
      "Implemented data archiving and purging strategies, improving system performance by 35%"
    ],
    technologies: ["PostgreSQL", "Oracle", "T-SQL", "PL/SQL", "Python"]
  }
];

const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    year: "2015",
    description: "Specialized in Data Science and Distributed Systems"
  },
  {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "University of Michigan",
    location: "Ann Arbor, MI",
    year: "2013",
    description: "Minor in Mathematics. Graduated with Honors."
  }
];

const certifications: Certification[] = [
  {
    name: "AWS Certified Data Analytics - Specialty",
    issuer: "Amazon Web Services",
    date: "2022"
  },
  {
    name: "Microsoft Certified: Azure Data Engineer Associate",
    issuer: "Microsoft",
    date: "2021"
  },
  {
    name: "Snowflake SnowPro Core Certification",
    issuer: "Snowflake",
    date: "2020"
  },
  {
    name: "Google Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2019"
  },
  {
    name: "Databricks Certified Developer - Apache Spark",
    issuer: "Databricks",
    date: "2018"
  }
];

const ExperiencePage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-background-secondary py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Experience
            </h1>
            <div className="h-1 w-20 bg-primary-500 mb-6"></div>
            <p className="text-text-secondary max-w-3xl mb-12">
              My professional journey in the world of data engineering, ETL development, and data integration,
              along with my educational background and relevant certifications.
            </p>
          </motion.div>
          
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <BriefcaseBusiness size={24} className="text-primary-500 mr-3" />
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </div>
            
            <div className="space-y-12 relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-background-accent"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center z-10">
                    <ArrowDown size={16} className="text-white" />
                  </div>
                  
                  <div className="bg-background-primary p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary-400">{exp.title}</h3>
                        <h4 className="text-lg font-medium">{exp.company}</h4>
                        <p className="text-text-muted">{exp.location}</p>
                      </div>
                      <p className="text-text-muted mt-1 md:mt-0 md:ml-4 bg-background-accent px-3 py-1 rounded-full inline-flex md:self-start">
                        {exp.period}
                      </p>
                    </div>
                    
                    <ul className="list-disc pl-5 mb-4 space-y-2 text-text-secondary">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs px-2 py-1 rounded-full bg-background-accent text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <GraduationCap size={24} className="text-primary-500 mr-3" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-background-primary p-6 rounded-lg shadow-md">
                    <div className="flex flex-col justify-between mb-2">
                      <h3 className="text-xl font-semibold text-primary-400">{edu.degree}</h3>
                      <p className="text-text-muted bg-background-accent px-3 py-1 rounded-full w-fit mt-2">
                        {edu.year}
                      </p>
                    </div>
                    <h4 className="text-lg font-medium">{edu.institution}</h4>
                    <p className="text-text-muted mb-2">{edu.location}</p>
                    <p className="text-text-secondary">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-center mb-8">
                <Award size={24} className="text-primary-500 mr-3" />
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="bg-background-primary p-5 rounded-lg shadow-md flex items-center"
                  >
                    <div className="bg-primary-500/20 rounded-full p-3 mr-4">
                      <Award size={20} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-400">{cert.name}</h3>
                      <p className="text-text-secondary text-sm">{cert.issuer} - {cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;