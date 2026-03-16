import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="home-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-logo">🦞</span>
            <div className="footer-brand-text">
              <h4>PermaClaw</h4>
              <p>Your Immortal AI Assistant</p>
              <p className="footer-tagline">Never forget. Recover with wallet.</p>
            </div>
          </div>

          <div className="footer-links">
            <h4>Product</h4>
            <ul>
              <li><a href="/features">Features</a></li>
              <li><a href="/store">Store</a></li>
              <li><a href="/docs">Docs</a></li>
              <li><a href="/security">Security</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/api">API</a></li>
              <li><a href="/tutorials">Tutorials</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Ecosystem</h4>
            <ul>
              <li><a href="https://arweave.org">Arweave</a></li>
              <li><a href="https://ao.arweave.net">AO</a></li>
              <li><a href="https://corticallabs.com">Cortical Labs</a></li>
              <li><a href="/dao">PermaClaw DAO</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PermaClaw. Never forget. Recover with wallet.</p>
          <div className="footer-social">
            <a href="https://github.com/Ar-Aostore/PermaClaw" aria-label="GitHub">G</a>
            <a href="https://twitter.com/ar_aostore" aria-label="Twitter">𝕏</a>
            <a href="https://arweave.org" aria-label="Arweave" className="arweave-badge">⛓️ AR</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;