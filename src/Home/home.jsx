
import React, { useState, useEffect,useRef } from 'react';

import { ChevronDown, Menu,ChevronUp, X, Heart, Users, FileText, Calendar, Star,   BookOpen, ArrowRight,Phone, Mail, Download, ExternalLink } from 'lucide-react';
import './home.css';
// Home Component
// Animated Number Counter Component
const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);
  
  return <span>{count}+</span>;
};
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top < window.innerHeight * 0.8) {
          element.classList.add('animate-in');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="home-section">
      {/* Decorative elements */}
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
      <div className="decorative-circle circle-3"></div>
      
      {/* Hero section */}
      <div className="container">
        <div className={`hero-grid ${isVisible ? 'visible' : ''}`}>
          <div className="hero-content">
            <div className="badge">
              <Star className="badge-icon" size={14} />
              Empowering Special Children
            </div>
            
            <h1 className="hero-title">
              What is <span className="gradient-text">EnlightenDS</span>?
            </h1>
            
            <p className="hero-description">
              Discover EnlightenDS, the ultimate platform for children with Down syndrome. 
              EnlightenDS combines advanced technologies for skill enhancement and talent 
              recognition through innovative assessment tools, personalized learning programs, 
              and comprehensive support systems tailored for children with Down syndrome.
              Take control of your child's development journey and unlock their full potential 
              with EnlightenDS.
            </p>
            
            <div className="hero-buttons">
              <button 
                onClick={() => document.getElementById('domain')?.scrollIntoView({ behavior: 'smooth' })}
                className="primary-button"
              >
                Learn More <ChevronDown className="button-icon" size={20} />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="secondary-button"
              >
                Get Started <ArrowRight className="button-icon" size={20} />
              </button>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img
                src="/images/background.jpg"
                alt="Child with Down syndrome using technology"
                className="hero-image"
              />
              <div className="image-decoration"></div>
            </div>
            <div className="floating-card card-1">
              <Heart className="card-icon" size={20} />
              <p>Personalized Learning</p>
            </div>
            <div className="floating-card card-2">
              <BookOpen className="card-icon" size={20} />
              <p>Skill Development</p>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="stats-container animate-on-scroll">
          <div className="stat-item">
            <div className="stat-number"><AnimatedCounter target={5000} /></div>
            <div className="stat-label">Children Helped</div>
          </div>
          <div className="stat-item">
            <div className="stat-number"><AnimatedCounter target={200} /></div>
            <div className="stat-label">Expert Educators</div>
          </div>
          <div className="stat-item">
            <div className="stat-number"><AnimatedCounter target={100} /></div>
            <div className="stat-label">Learning Programs</div>
          </div>
          <div className="stat-item">
            <div className="stat-number"><AnimatedCounter target={50} /></div>
            <div className="stat-label">Partner Schools</div>
          </div>
        </div>
        
        {/* Features preview */}
        <div className="features-preview animate-on-scroll">
          <h2 className="section-title">How We Help</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper blue">
                <Star size={24} />
              </div>
              <h3>Talent Recognition</h3>
              <p>Identify and nurture your child's unique abilities and talents.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper green">
                <Users size={24} />
              </div>
              <h3>Community Support</h3>
              <p>Connect with families and experts in a supportive environment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper purple">
                <BookOpen size={24} />
              </div>
              <h3>Adaptive Learning</h3>
              <p>Customized education pathways that adapt to individual needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;