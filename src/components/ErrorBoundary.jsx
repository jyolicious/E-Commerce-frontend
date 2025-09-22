// src/components/ErrorBoundary.jsx
import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // also log to console (vite terminal)
    console.error("Caught by ErrorBoundary:", error, info);
    this.setState({ info });
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 20, fontFamily: "system-ui, Arial" }}>
          <h2 style={{ color: "#b00020" }}>Something crashed — here’s the error</h2>
          <pre style={{ whiteSpace: "pre-wrap", background: "#f7f7f7", padding: 12, borderRadius: 6 }}>
            {this.state.error && this.state.error.toString()}
          </pre>
          {this.state.info && (
            <details style={{ marginTop: 12 }}>
              <summary>Component stack</summary>
              <pre style={{ whiteSpace: "pre-wrap" }}>{this.state.info.componentStack}</pre>
            </details>
          )}
          <p style={{ marginTop: 12 }}>
            Check the terminal where you ran <code>npm run dev</code> for Vite build errors too.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
