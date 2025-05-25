
import React, { useState, useEffect,useRef } from 'react';

import { ChevronDown, Menu,ChevronUp, X, Heart, Users, FileText, Calendar, Star,   BookOpen, ArrowRight,Phone, Mail, Download, ExternalLink } from 'lucide-react';
import './footer.css';
// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">EnlightenDS</h3>
            <p className="footer-description">
              Advanced Technologies for Skill Enhancement and Talent Recognition 
              in Children with Down Syndrome
            </p>
          </div>
          <div>
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#domain" className="footer-link">Our Domain</a></li>
              <li><a href="#milestones" className="footer-link">Milestones</a></li>
              <li><a href="#documents" className="footer-link">Documents</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="footer-contact">
              <p>Email: info@enlightends.org</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 EnlightenDS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;