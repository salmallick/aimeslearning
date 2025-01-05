import React from "react";
import aimesLogo from "../assets/aimeslogo.png";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "white", // Optional for better visibility
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Optional for navbar emphasis
      }}
    >
      {/* Navigation Links */}
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          margin: 0,
          padding: 0,
          gap: "20px",
        }}
      >
        {/* Home */}
        <li
          style={{
            cursor: "pointer",
            fontSize: "1.2rem",
            fontWeight: "500",
            letterSpacing: "-0.01em",
            margin: "0 8px",
            color: "black",
          }}
          onClick={() => scrollToSection("home")}
        >
          Home
        </li>
        {/* About the Team */}
        <li
          style={{
            cursor: "pointer",
            fontSize: "1.2rem",
            fontWeight: "500",
            letterSpacing: "-0.01em",
            margin: "0 8px",
            color: "black",
          }}
          onClick={() => scrollToSection("team")}
        >
          About the Team
        </li>
        {/* Tutoring */}
        <li
          style={{
            cursor: "pointer",
            fontSize: "1.2rem",
            fontWeight: "500",
            letterSpacing: "-0.01em",
            margin: "0 8px",
            color: "black",
          }}
          onClick={() => scrollToSection("tutoring")}
        >
          Tutoring
        </li>
        {/* Pricing */}
        <li
          style={{
            cursor: "pointer",
            fontSize: "1.2rem",
            fontWeight: "500",
            letterSpacing: "-0.01em",
            margin: "0 8px",
            color: "black",
          }}
          onClick={() => scrollToSection("pricing")}
        >
          Pricing
        </li>
        {/* Contact Us */}
        <li
          style={{
            cursor: "pointer",
            fontSize: "1.2rem",
            fontWeight: "500",
            letterSpacing: "-0.01em",
            margin: "0 8px",
            color: "black",
          }}
          onClick={() => scrollToSection("contact")}
        >
          Contact Us
        </li>
      </ul>

      {/* Logo */}
      <img
        src={aimesLogo}
        alt="Aimes Logo"
        style={{
          height: "60px",
          cursor: "pointer",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </nav>
  );
};

export default Navbar;
