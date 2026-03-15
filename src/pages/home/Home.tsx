import React, { useState } from "react";
import NavigationButton from "../../components/NavigationsButton";
import { useTheme } from "../../services/ThemeProvider";

import "./Home.css";

const Home = () => {
  const [selectedUser, setSelectedUser] = useState<'bio' | 'memory' | 'both'>('both');
  const [walletPath] = useState("/home/user/.aos.json");
  const { theme, toggleTheme } = useTheme();

  // Example memory estimate (just for visual)
  const memoryEstimate = "10GB+";
  const recoveryTime = "< 5 min";

  return (
    <div className="home-body">
      {/* Navigation */}
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
      
      {/* Hero Section */}
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

      {/* Two User Groups */}
      <div className="section-dark">
        <div className="container">
          <h2 className="section-title">Built for Two Worlds</h2>
          <p className="section-subtitle">
            PermaClaw serves both biocomputer engineers and privacy‑conscious users.
          </p>
          
          <div className="user-groups">
            <div className="user-group-card">
              <div className="user-group-icon">🧬</div>
              <h3>Biocomputer Engineers</h3>
              <p>
                Stream live CL1 neuron spikes, stimulation events, and experimental data directly to your permanent AO process. Never lose expensive recordings again.
              </p>
              <ul className="user-group-features">
                <li>Real‑time spike ingestion</li>
                <li>Stimulation event logging</li>
                <li>Data replay & analysis</li>
                <li>Wallet‑recoverable experiments</li>
              </ul>
            </div>
            
            <div className="user-group-card">
              <div className="user-group-icon">💾</div>
              <h3>Users Seeking Permanent Memory</h3>
              <p>
                Your AI remembers everything – forever. Switch devices without losing context. All conversations are encrypted and stored on Arweave.
              </p>
              <ul className="user-group-features">
                <li>Cross‑device sync</li>
                <li>End‑to‑end encrypted</li>
                <li>No cloud lock‑in</li>
                <li>Recover with any wallet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
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

      {/* Features */}
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

      {/* Comparison Table (simplified) */}
      <div className="section-light">
        <div className="container">
          <h2 className="section-title">Why PermaClaw?</h2>
          <div className="comparison-table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="feature-column">Feature</th>
                  <th className="plan-column">Traditional AI</th>
                  <th className="plan-column featured">PermaClaw</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Memory Persistence</td>
                  <td>Ephemeral / Local only</td>
                  <td>Permanent on AO</td>
                </tr>
                <tr>
                  <td>Recovery after device loss</td>
                  <td>Lost forever</td>
                  <td>Recover with wallet</td>
                </tr>
                <tr>
                  <td>Biocomputing data storage</td>
                  <td>Local files (risk of loss)</td>
                  <td>Streamed to permanent process</td>
                </tr>
                <tr>
                  <td>Cloud dependency</td>
                  <td>Often required</td>
                  <td>Self‑hostable, no cloud</td>
                </tr>
                <tr>
                  <td>Cost</td>
                  <td>Monthly subscriptions</td>
                  <td>One‑time wallet gas</td>
                </tr>
                <tr>
                  <td>App store</td>
                  <td>Proprietary</td>
                  <td>Decentralized aoStore</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA Section */}
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

      {/* Footer */}
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
              <a href="https://github.com/yourname/permaclaw" aria-label="GitHub">🐙</a>
              <a href="https://twitter.com/permaclaw" aria-label="Twitter">𝕏</a>
              <a href="https://discord.gg/permaclaw" aria-label="Discord">💬</a>
              <a href="https://arweave.org" aria-label="Arweave" className="arweave-badge">⛓️ AR</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;