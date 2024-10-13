import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer p-10 text-base-content">
        <div>
          <p>
            © {new Date().getFullYear()} Haris Redzic's Blog. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
