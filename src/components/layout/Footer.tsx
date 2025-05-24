import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Database } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-secondary py-12 border-t border-background-accent">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-4">
              <Database size={24} className="text-primary-500" />
              <span className="text-xl font-semibold">
                <span className="text-primary-500">ETL</span> Engineer
              </span>
            </div>
            <p className="text-text-secondary mb-6">
              Transforming raw data into valuable insights through efficient ETL pipelines and data engineering solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary-500 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-text-secondary hover:text-primary-500 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-secondary hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-text-secondary hover:text-primary-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-text-secondary hover:text-primary-500 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-secondary hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'SQL', 'Apache Airflow', 'DBT', 'AWS', 'Azure', 'Snowflake', 'Spark'].map((skill) => (
                <span 
                  key={skill}
                  className="bg-background-accent px-3 py-1 text-sm rounded-full text-text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background-accent text-center text-text-muted">
          <p>&copy; {currentYear} ETL Engineer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;