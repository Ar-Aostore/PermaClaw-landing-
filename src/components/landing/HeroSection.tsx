import React from "react";
import NavigationButton from "../NavigationsButton";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section" id="home">
      <div className="container">
        <div className="hero-badge">⚡ WALLET‑RECOVERABLE MEMORY</div>
        <h1 className="hero-title">
          Your AI, <span className="hero-highlight">Immortal</span>
        </h1>
        <p className="hero-description">
          PermaClaw is an ultra‑lightweight AI assistant that never forgets.
          All conversations, neuron spikes, and learned facts are stored permanently
          on the AO network – recoverable with just your wallet.
        </p>

        <div className="hero-cta">
          <NavigationButton
            path="/app"
            variant="premium"
            style={{
              fontSize: '1.2rem',
              padding: '1rem 2.5rem'
            }}
          >
            Launch App
          </NavigationButton>
          <p className="hero-note">
            No subscriptions • Self‑hostable • Wallet‑recoverable
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="trust-metrics">
          <div className="metric">
            <div className="metric-value">∞</div>
            <div className="metric-label">Permanent Memory</div>
          </div>
          <div className="metric-divider"></div>
          <div className="metric">
            <div className="metric-value">100%</div>
            <div className="metric-label">Wallet Recoverable</div>
          </div>
          <div className="metric-divider"></div>
          <div className="metric">
            <div className="metric-value">&lt;10MB</div>
            <div className="metric-label">RAM Footprint</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;