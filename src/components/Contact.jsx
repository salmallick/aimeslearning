import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    useEffect(() => {
      // Dynamically load the Calendly widget CSS
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
  
      // Dynamically load the Calendly widget script
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
  
      // Initialize the Calendly badge widget
      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: "https://calendly.com/salmanm/aimes-learning-inquiry",
            text: "Schedule time with me",
            color: "#0069ff",
            textColor: "#ffffff",
          });
        }
      };

      return () => {
        // Cleanup script and link on component unmount
        document.head.removeChild(link);
        document.body.removeChild(script);
      };
    }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8"
      >
        <h1 className="text-4xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600">
          Get in touch with us to learn more or schedule a meeting.
        </p>

        <div className="space-y-6">
          <p className="text-xl text-gray-800">📍 Rochester Hills, MI</p>
          <a
            href="tel:248-214-0267"
            className="block text-xl text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            📞 248-214-0267
          </a>
          <a
            href="mailto:rmallick72@gmail.com"
            className="block text-xl text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            ✉️ rmallick72@gmail.com
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
