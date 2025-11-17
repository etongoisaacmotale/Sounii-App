// HelpScreen.jsx
import React, { Component } from "react";
import "./HelpScreen.css";

export default class HelpScreen extends Component {
  render() {
    return (
      <div className="help-screen-container">
        {/* Header */}
        <header className="help-header">
          <h1>Help & Support</h1>
        </header>

        {/* Main Content */}
        <main className="help-content">
          <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <ul>
              <li>
                <strong>How do I create an account?</strong>
                <p>
                  Go to the Register page, fill in your details, and agree to
                  the Terms & Conditions. Then click "Register".
                </p>
              </li>
              <li>
                <strong>How do I reset my password?</strong>
                <p>
                  Click on "Forgot Password?" on the Login screen and follow
                  the instructions.
                </p>
              </li>
              <li>
                <strong>How do I contact support?</strong>
                <p>
                  You can reach out to our support team via email at
                  support@sounii.com
                </p>
              </li>
            </ul>
          </section>

          <section className="help-tips">
            <h2>Tips & Tricks</h2>
            <ul>
              <li>Use the search bar to quickly find songs and artists.</li>
              <li>Explore the Library tab to save your favorite tracks.</li>
              <li>Keep your app updated for the latest features.</li>
            </ul>
          </section>
        </main>
      </div>
    );
  }
}
