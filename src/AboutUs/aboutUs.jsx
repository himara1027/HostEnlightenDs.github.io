import React, { useState, useEffect,useRef } from 'react';

import { ChevronDown, Menu,ChevronUp, X, Heart, Users, FileText, Calendar, Star,   BookOpen, ArrowRight,Phone, Mail, Download, ExternalLink } from 'lucide-react';
import './aboutUs.css';


const AboutUs = () => {
  const teamMembers = [
    {
      name: "Prof. Samantha Thelijjagoda",
      role: "Supervisor",
      image: "images/supervisor.jpg",
    },
    {
      name: "Dr. Junius Anjana",
      role: "Co-supervisor",
      image: "images/co-supervisor.jpg",
     
    },
    {
      name: "Dr. Kamalani Wanigasinghe",
      role: "External Supervisor",
      image: "/images/external-supervisor.jpg",
      
    },
    {
      name: "Kumarasinghe D.P",
      role: "IT21296314",
      image: "/images/dilshi.jpg",
      bio: "Team leader"
    },
    {
      name: "Jayasuriya S.H",
      role: "IT21293030",
      image: "/images/senuri.png",
      bio: "Team Member"
    },
    {
      name: "Semini B.V.S",
      role: "IT21342394",
      image: "/images/save.png",
      bio: "Team Member"
    },
    {
      name: "Methsahani K.K.S.P",
      role: "IT21292972",
      image: "/images/sadee.jpg",
      bio:"Team Member"
    }
  ];

  // Separate supervisors and team members
  const supervisors = teamMembers.slice(0, 3);
  const students = teamMembers.slice(3);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Meet the Team</h2>
          <div className="section-divider"></div>
        </div>
        
        {/* Supervisors Section */}
        <h3 className="team-category">Supervisors</h3>
        <div className="team-grid supervisors-grid">
          {supervisors.map((member, index) => (
            <div key={index} className="team-member supervisor-card">
              <div className="team-member-image">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-photo"
                />
                <div className="image-overlay"></div>
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
              <div className="member-links">
                <button className="member-link-button">
                  <ExternalLink size={20} />
                </button>
                <button className="member-link-button">
                  <Mail size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Students Section */}
        <h3 className="team-category">Team Members</h3>
        <div className="team-grid students-grid">
          {students.map((member, index) => (
            <div key={index} className="team-member student-card">
              <div className="team-member-image">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-photo"
                />
                <div className="image-overlay"></div>
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
              <div className="member-links">
                <button className="member-link-button">
                  <ExternalLink size={20} />
                </button>
                <button className="member-link-button">
                  <Mail size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mission-section">
          <div className="mission-content">
            <h3 className="mission-title">Our Mission</h3>
            <p className="mission-text">
              At EnlightenDS, we are dedicated to empowering children with Down syndrome through innovative 
              technology solutions. Our team combines expertise in psychology, machine learning, and 
              assistive technology to create tools that enhance cognitive development, improve learning 
              outcomes, and support families on their journey. We believe every child deserves the 
              opportunity to reach their full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;