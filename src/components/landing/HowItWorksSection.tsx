import React from "react";

const HowItWorksSection: React.FC = () => {
  return (
    <div className="section-light">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Simple, transparent, and under your control.
        </p>

        <div className="process-flow">
          <div className="process-step">
            <div className="step-icon">🪙</div>
            <div className="step-number">01</div>
            <h3 className="step-title">Provide Wallet</h3>
            <p className="step-description">
              Point to your Arweave wallet (e.g. <code>~/.aos.json</code>).
              PermaClaw never uploads it – only uses it to sign messages.
            </p>
          </div>

          <div className="process-connector">
            <div className="connector-line"></div>
            <div className="connector-arrow">→</div>
          </div>

          <div className="process-step">
            <div className="step-icon">⚙️</div>
            <div className="step-number">02</div>
            <h3 className="step-title">Spawn Memory Process</h3>
            <p className="step-description">
              One click creates your personal AO process. It runs the permanent memory
              Lua handlers – your private data vault.
            </p>
          </div>

          <div className="process-connector">
            <div className="connector-line"></div>
            <div className="connector-arrow">→</div>
          </div>

          <div className="process-step">
            <div className="step-icon">💬</div>
            <div className="step-number">03</div>
            <h3 className="step-title">Chat & Store</h3>
            <p className="step-description">
              Every conversation, tool result, or neuron spike is automatically
              saved to your process. Accessible from any device.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;