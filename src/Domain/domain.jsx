import React, { useState, useEffect,useRef } from 'react';

import { ChevronDown, Menu,ChevronUp, X, Heart, Users, FileText, Calendar, Star,   BookOpen, ArrowRight,Phone, Mail, Download, ExternalLink } from 'lucide-react';
import './domain.css';

const Domain = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  
  const domains = [
    {
      title: "Literature Survey",
      icon: "📚",
      content: "The literature survey highlights studies applying advanced technologies for skill enhancement in children with Down syndrome, developing smartphone-based tools for cognitive assessment, educational programs for adaptive learning, communication enhancement systems, and therapeutic interventions. Key techniques include machine learning algorithms for personalized learning pathways, mobile applications with interactive games, speech therapy tools, and progress monitoring systems. The survey demonstrates growing interest in technology-driven solutions for comprehensive development and support.",
      image: "/images/literature-survey.jpg" // Replace with your actual image path
    },
    {
      title: "Research Gap",
      icon: "🔍",
      content: "The research gap focuses on improving accuracy, accessibility and personalization of Down syndrome intervention tools, adopting newer technologies like AI for adaptive learning, enhancing talent recognition through multimodal assessment strategies, developing specialized communication enhancement systems tailored for children's unique needs, and integrating advanced learning and monitoring techniques. Key gaps include comprehensive talent discovery tools, community engagement platforms for peer support, balancing innovation with affordability and strengthening interdisciplinary collaboration.",
      image: "/images/research-gap.jpg" // Replace with your actual image path
    },
    {
      title: "Research Problem",
      icon: "❓",
      content: "The main objective is developing a comprehensive platform to transform care and skill development for children with Down syndrome. Sub-objectives include predicting developmental milestones through advanced models, implementing adaptive learning systems for personalized education, generating customized therapy plans with innovative algorithms, and implementing monitoring solutions for real-time progress tracking. The goals focus on improving outcomes, enhancing quality of life, and pioneering data-driven child development.",
      image: "/images/research-problem.jpg" // Replace with your actual image path
    },
    {
      title: "Research Objectives",
      icon: "🎯",
      content: "Core objectives involve enhancing accessibility to specialized Down syndrome intervention tools, developing localized applications capturing unique developmental patterns, improving early skill recognition through advanced assessment techniques, addressing gaps in personalized learning approaches, absence of comprehensive talent discovery protocols and lack of real-time progress monitoring systems - ultimately empowering families and jeopardizing optimal development potential dependent on innovative technological solutions.",
      image: "/images/research-objectives.jpg" // Replace with your actual image path
    }
  ];
  
  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="domain" className="domain-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Domain</h2>
          <div className="section-divider"></div>
          {/* <p className="section-subtitle">
            Exploring technological innovations for children with Down syndrome
          </p> */}
        </div>
        
        <div className="domain-cards-container">
          {domains.map((domain, index) => (
            <div 
              key={index} 
              className={`domain-card ${expandedCard === index ? 'expanded' : ''}`}
              onClick={() => toggleCard(index)}
            >
              <div className="domain-card-wrapper">
                <div className="domain-card-content-wrapper">
                  <div className="domain-card-header">
                    <div className="domain-card-icon">{domain.icon}</div>
                    <h3 className="domain-card-title">{domain.title}</h3>
                  </div>
                  
                  <div className="domain-card-divider"></div>
                  
                  <div className="domain-card-body">
                    <div className="domain-card-text">
                      <p className="domain-card-content">{domain.content}</p>
                    </div>
                    
                    <div className="domain-card-image">
                      <img src={domain.image} alt={domain.title} />
                    </div>
                  </div>
                  
                  <div className="domain-card-footer">
                    <button className="domain-card-btn">
                      {expandedCard === index ? 'Show Less' : 'Learn More'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Domain;