const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 text-center">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span style={{ color: "#cb1818" }}>KAMI</span> BELAJAR. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
