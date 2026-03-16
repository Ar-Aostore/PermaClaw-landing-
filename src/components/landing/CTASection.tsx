import React from "react";
import NavigationButton from "../NavigationsButton";

const CTASection: React.FC = () => {
  return (
    <div className="section-cta">
      <div className="container">
        <h2 className="cta-title">Ready to Make Your AI Immortal?</h2>
        <p className="cta-description">
          Download the binary, provide your wallet, and spawn your memory process.
          Your AI will never forget again.
        </p>
        <div className="cta-actions">
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
          <div className="cta-links">
            <a href="/docs" className="cta-link">
              Read Documentation →
            </a>
            <a href="https://github.com/yourname/permaclaw" className="cta-link">
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;