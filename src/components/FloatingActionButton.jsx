import { FaWhatsapp } from "react-icons/fa";

const FloatingActionButton = () => {
  const handleClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=6282269837758&text=Hai%20Admin%20Saya%20Ingin%20Bertanya%20Tentang%20Kursus%20React%20Native",
      "_blank"
    );
  };

  return (
    <div className="floating-action-button">
      <button className="btn btn-primary" onClick={handleClick}>
        <FaWhatsapp style={{ marginRight: "5px" }} /> WhatsApp
      </button>
    </div>
  );
};

export default FloatingActionButton;
