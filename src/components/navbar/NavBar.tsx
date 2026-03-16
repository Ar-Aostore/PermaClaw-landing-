import React from "react";
import NavigationButton from "../NavigationsButton";

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  return (
    <nav className="home-nav">
      <div className="container">
        <div className="nav-brand">
          <span className="brand-logo">🦞</span>
          <a href="/">PermaClaw</a>
        </div>
        <div className="nav-actions">
          <NavigationButton
            path="/docs"
            variant="premium"
            style={{
              fontSize: '1rem',
              padding: '0.75rem 1.5rem',
              marginLeft: '1rem'
            }}
          >
            Docs
          </NavigationButton>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;