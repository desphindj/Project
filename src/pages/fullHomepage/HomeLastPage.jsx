import React from 'react'
import './hdcf.css';


const categories = {
    "Technical Skills": [
      "ChatGPT",
      "Coding",
      "Computer Science",
      "Cybersecurity",
      "DevOps",
      "Ethical Hacking",
      "Generative AI",
      "Java Programming",
      "Python",
      "Web Development",
    ],
    "Analytical Skills": [
      "Artificial Intelligence",
      "Big Data",
      "Business Analysis",
      "Data Analytics",
      "Data Science",
      "Financial Modeling",
      "Machine Learning",
      "Microsoft Excel",
      "Microsoft Power BI",
      "SQL",
    ],
    "Business Skills": [
      "Accounting",
      "Digital Marketing",
      "E-commerce",
      "Finance",
      "Google",
      "Graphic Design",
      "IBM",
      "Marketing",
      "Project Management",
      "Social Media Marketing",
    ],
    "Career Resources": [
      "Essential IT Certifications",
      "High-Income Skills to Learn",
      "How to Get a PMP Certification",
      "How to Learn Artificial Intelligence",
      "Popular Cybersecurity Certifications",
      "Popular Data Analytics Certifications",
      "What Does a Data Analyst Do?",
      "Career Development Resources",
      "Career Aptitude Test",
      "Share your Coursera Learning Story",
    ],
  };

function HomeLastPage() {
  return (
    <div>
        <div className='lasthome'>
        <div className="skills-container">
      {Object.entries(categories).map(([category, items]) => (
        <div key={category} className="category-column">
          <h2 className="category-title">{category}</h2>
          <ul className="category-list">
            {items.map((item) => (
              <li key={item} className="category-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="skills-container">
      {Object.entries(categories).map(([category, items]) => (
        <div key={category} className="category-column">
          <h2 className="category-title">{category}</h2>
          <ul className="category-list">
            {items.map((item) => (
              <li key={item} className="category-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
        </div>
        
    </div>
  )
}

export default HomeLastPage
