import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

interface SidebarProps {
  collapsed?: boolean;
  sections?: Array<{
    id: string;
    title: string;
    subsections?: Array<{ id: string; title: string }>;
  }>;
  onSectionChange?: (sectionId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  collapsed = false, 
  sections = [],
  onSectionChange 
}) => {
  return (
    <aside className={`dashboard-sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h3>Documentation</h3>
      </div>
      
      <div className="sidebar-divider"></div>
      
  
       
        
        {/* Optional: keep recent analyses if needed */}
        <div className="sidebar-section">
           {sections.map((section) => (
          <div key={section.id} className="sidebar-section">
            <h4>{section.title}</h4>
            {section.subsections && (
              <div className="subsection-list">
                {section.subsections.map((sub) => (
                  <a
                    key={sub.id}
                    href={`#${sub.id}`}
                    className="subsection-item"
                    onClick={(e) => {
                      e.preventDefault();
                      // Change the active section to the parent section
                      if (onSectionChange) {
                        onSectionChange(section.id);
                      }
                      // Optionally scroll to the subsection after section loads
                      // (will be handled after render, but we can use setTimeout)
                      setTimeout(() => {
                        document.getElementById(sub.id)?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    {sub.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        </div>
  
      
      <div className="sidebar-footer">
        <div className="user-stats"></div>
      </div>
    </aside>
  );
};

export default Sidebar;