import React from "react";
import { Facebook, Twitter, LinkedIn, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.links}>
        <a href="#about" style={styles.link}>
          About
        </a>
        <div style={styles.divider}>|</div>
        <a href="#help" style={styles.link}>
          Help
        </a>
        <div style={styles.divider}>|</div>
        <a href="#terms" style={styles.link}>
          Terms & conditions
        </a>
        <div style={styles.divider}>|</div>
        <a href="#privacy" style={styles.link}>
          Privacy
        </a>
        <div style={styles.divider}>|</div>
        <a href="#copyright" style={styles.link}>
          Copyright policy
        </a>
        <div style={styles.divider}>|</div>
        <a href="#contact" style={styles.link}>
          Contact us
        </a>
      </div>

      <div style={styles.socials}>
        <div style={styles.divider}>|</div>
        <div style={styles.copyright}>
          ©CuriousBit 2023 - all rights reserved
        </div>
        <div style={styles.divider}>|</div>
        <a
          href="https://facebook.com"
          style={styles.iconLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
        <a
          href="https://twitter.com"
          style={styles.iconLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
        <a
          href="https://linkedin.com"
          style={styles.iconLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          href="https://youtube.com"
          style={styles.iconLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTube />
        </a>
        <a
          href="https://tiktok.com"
          style={styles.iconLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/tiktok-icon.png"
            alt="tiktoklogo"
            style={{ width: "24px", height: "24px", marginBottom: "5px" }}
          />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#f8f8f8",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Open Sans, sans-serif",
    marginTop: "100px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "30px",
    marginBottom: "20px",
  },
  link: {
    color: "#555",
    textDecoration: "none",
    fontSize: "14px",
  },
  divider: {
    color: "#ccc",
  },
  socials: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginBottom: "15px",
  },
  iconLink: {
    color: "#000000",
    fontSize: "24px",
    textDecoration: "none",
  },
  copyright: {
    color: "#555",
    fontSize: "14px",
  },
};

export default Footer;
