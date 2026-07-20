import { FaWhatsapp } from "react-icons/fa";
import "./WhatsApp.css";

const WhatsApp = () => {

  const phoneNumber = "1234567890";

  const message =
    "Hello Luma Dental! I would like to book an appointment.";

  const openWhatsApp = () => {

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

  };

  return (

    <button
      className="whatsapp-btn"
      onClick={openWhatsApp}
      aria-label="Chat on WhatsApp"
    >

      <span className="pulse"></span>

      <FaWhatsapp className="whatsapp-icon" />

    </button>

  );

};

export default WhatsApp;