
import React, { useState, useEffect,useRef } from 'react';

import { ChevronDown, Menu,ChevronUp, X, Heart, Users, FileText, Calendar, Star,   BookOpen, ArrowRight,Phone, Mail, Download, ExternalLink } from 'lucide-react';
import './document.css';
const Documents = () => {
  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState({
    proposal: false,
    finalReport: false
  });

  // Toggle function for expanding/collapsing sections
  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  // Main documents list
  const documents = [
    { title: "TAF", id: "charter", fileUrl: "/documents/24-25J-228 -IT21293030.pdf" },
    { 
      title: "Proposal Document", 
      id: "proposal", 
      fileUrl: "/documents/proposal-document.pdf",
      isExpandable: true,
      hideDownload: true // Added this property to hide download button
    },
    { title: "Status Document - 1", id: "status1", fileUrl: "/documents/status-document-1.pdf" },
    { title: "Status Document - 2", id: "status2", fileUrl: "/documents/status-document-2.pdf" },
    {
      title: "Final Report",
      id: "finalReport",
      fileUrl: "/documents/final-report.pdf",
      isExpandable: true,
      hideDownload: true // Added this property to hide download button
    }
  ];

  // Proposal documents that will be shown when expanded
  const proposalDocs = [
    { title: "IT21296314", fileUrl: "/documents/proposal/project-scope.pdf", icon: "FileText" },
    { title: "IT21293030", fileUrl: "/documents/proposal/budget-plan.pdf", icon: "FileText" },
    { title: "IT21342394", fileUrl: "/documents/proposal/timeline.pdf", icon: "FileText" },
    { title: "IT21292972", fileUrl: "/documents/proposal/resources.pdf", icon: "FileText" }
  ];

  // Final report documents that will be shown when expanded
  const finalReportDocs = [
    { title: "IT21296314", fileUrl: "/documents/final-report/executive-summary.pdf", icon: "FileText" },
    { title: "IT21293030", fileUrl: "/documents/final-report/project-results.pdf", icon: "FileText" },
    { title: "IT21342394", fileUrl: "/documents/final-report/financial-report.pdf", icon: "FileText" },
    { title: "IT21292972", fileUrl: "/documents/final-report/future-recommendations.pdf", icon: "FileText" }
  ];

  

  // Function to handle file downloads
  const handleDownload = (fileUrl, fileName) => {
    // Create a link element
    const link = document.createElement("a");
    
    // Set the href to the file URL
    link.href = fileUrl;
    
    // Set download attribute with the file name
    link.download = fileName;
    
    // Append to the body
    document.body.appendChild(link);
    
    // Trigger the click event
    link.click();
    
    // Clean up
    document.body.removeChild(link);
  };

  // Function to handle download all files in a section
  const handleDownloadAll = (files, sectionName) => {
    // For each file in the array, trigger a download
    files.forEach((file) => {
      handleDownload(file.fileUrl, `${sectionName} - ${file.title}.pdf`);
    });
  };

  return (
    <section id="documents" className="documents-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Documents</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="documents-list">
          {documents.map((doc, index) => (
            <div key={index}>
              <div className="document-item">
                <span className="document-title">{doc.title}</span>
                <div className="flex items-center gap-2">
                  {doc.isExpandable && (
                    <button
                      className="download-button bg-gray-200 text-gray-800"
                      onClick={() => toggleSection(doc.id)}
                    >
                      {expandedSections[doc.id] ? (
                        <>
                          <ChevronUp size={20} className="button-icon" />
                          Collapse
                        </>
                      ) : (
                        <>
                          <ChevronDown size={20} className="button-icon" />
                          Expand
                        </>
                      )}
                    </button>
                  )}
                  {/* Only render download button if hideDownload is not true */}
                  {!doc.hideDownload && (
                    <button
                      className="download-button"
                      onClick={() => handleDownload(doc.fileUrl, `${doc.title}.pdf`)}
                    >
                      <Download size={20} className="button-icon" />
                      Download
                    </button>
                  )}
                </div>
              </div>
              
              {/* Expandable section for Proposal Document */}
              {doc.id === "proposal" && expandedSections.proposal && (
                <div className="proposal-files-container">
                  <div className="proposal-header">
                    <h3>Proposal Documents</h3>
                    <div className="proposal-actions">
                      <button 
                        className="download-all-button"
                        onClick={() => handleDownloadAll(proposalDocs, "Proposal")}
                      >
                        <Download size={16} />
                        Download All
                      </button>
                      <button 
                        className="close-button"
                        onClick={() => toggleSection("proposal")}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="proposal-files-grid">
                    {proposalDocs.map((file, idx) => (
                      <div key={idx} className="proposal-file-card">
                        <div className="proposal-file-icon">
                          <FileText size={36} />
                        </div>
                        <div className="proposal-file-title">{file.title}</div>
                        <button
                          className="proposal-file-button"
                          onClick={() => handleDownload(file.fileUrl, `Proposal - ${file.title}.pdf`)}
                        >
                          <Download size={14} />
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Expandable section for Final Report */}
              {doc.id === "finalReport" && expandedSections.finalReport && (
                <div className="proposal-files-container">
                  <div className="proposal-header">
                    <h3>Final Report Documents</h3>
                    <div className="proposal-actions">
                      <button 
                        className="download-all-button"
                        onClick={() => handleDownloadAll(finalReportDocs, "Final Report")}
                      >
                        <Download size={16} />
                        Download All
                      </button>
                      <button 
                        className="close-button"
                        onClick={() => toggleSection("finalReport")}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="proposal-files-grid">
                    {finalReportDocs.map((file, idx) => (
                      <div key={idx} className="proposal-file-card">
                        <div className="proposal-file-icon">
                          <FileText size={36} />
                        </div>
                        <div className="proposal-file-title">{file.title}</div>
                        <button
                          className="proposal-file-button"
                          onClick={() => handleDownload(file.fileUrl, `Final Report - ${file.title}.pdf`)}
                        >
                          <Download size={14} />
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
       
      </div>
    </section>
  );
};
export default Documents;