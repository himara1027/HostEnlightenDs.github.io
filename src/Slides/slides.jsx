import React, { useState, useEffect,useRef } from 'react';

import { ChevronDown, Menu,ChevronUp, X, Heart, Users, FileText, Calendar, Star,   BookOpen, ArrowRight,Phone, Mail, Download, ExternalLink } from 'lucide-react';

import './slides.css';
const Slides = () => {
  const slides = [
    { title: "Proposal Presentation", type: "PowerPoint" },
    { title: "Progress Presentation -1", type: "PowerPoint" },
    { title: "Progress Presentation -2", type: "PowerPoint" },
    { title: "Final Presentation", type: "PowerPoint" }
  ];
  
  return (
    <section id="slides" className="slides-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Slides</h2>
          <div className="section-divider"></div>
        </div>
        <div className="slides-row">
          {slides.map((slide, index) => (
            <div key={index} className="slide-card">
              <div className="slide-content">
                <div className="slide-icon">
                  <FileText size={32} />
                </div>
                <h3 className="slide-title">{slide.title}</h3>
                <p className="slide-type">{slide.type}</p>
              </div>
              <button className="download-button-1">
                <Download size={20} className="button-icon" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slides;