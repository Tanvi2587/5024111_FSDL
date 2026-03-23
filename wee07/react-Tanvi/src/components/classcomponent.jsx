import React, { Component } from "react";

class ClassComponent extends Component {
  state = { count: 0, name: "Class User" };

  render() {
    const glassStyle = {
      background: "rgba(255, 255, 255, 0.2)",
      borderRadius: "16px",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(5px)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      padding: "20px",
      color: "#fff",
      textAlign: "center"
    };

    const btn = (color) => ({
      margin: "5px", padding: "8px 15px", borderRadius: "8px", 
      border: "none", cursor: "pointer", background: color, color: "white"
    });

    return (
      <div style={{ background: "#0f172a", padding: "40px", borderRadius: "20px" }}>
        <div style={glassStyle}>
          <h3 style={{ color: "#38bdf8" }}>✨ {this.state.name}</h3>
          <p>Count: <span style={{ fontSize: "20px", fontWeight: "bold" }}>{this.state.count}</span></p>
          
          <button style={btn("#22c55e")} onClick={() => this.setState({ count: this.state.count + 1 })}>+ Add</button>
          <button style={btn("#6366f1")} onClick={() => this.setState({ name: "Updated! 🚀" })}>Update</button>
        </div>
      </div>
    );
  }
}

export default ClassComponent;