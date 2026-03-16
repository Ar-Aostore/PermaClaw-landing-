import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <div className="section-dark">
      <div className="container">
        <h2 className="section-title">Features</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🔐</div>
            <h3>Wallet‑Recoverable</h3>
            <p>Lose your device? Just provide your wallet path – all memories are back.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🛍️</div>
            <h3>Built‑in aoStore</h3>
            <p>Browse and install skills, DApps, and projects directly from the AO ecosystem.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">💬</div>
            <h3>Multi‑Channel Chat</h3>
            <p>Web UI, Telegram, Discord, WhatsApp, Matrix, IRC – all connected.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🧠</div>
            <h3>Tool Calling</h3>
            <p>Run shell commands, edit files, search the web – your agent can do it.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">⚡</div>
            <h3>Biocomputing Integration</h3>
            <p>Stream CL1 spikes in real time. All data stored permanently.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🔋</div>
            <h3>Ultra‑Lightweight</h3>
            <p>Runs on a Raspberry Pi, uses &lt;10MB RAM, starts in under a second.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;