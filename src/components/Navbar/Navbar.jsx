import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "doctors", label: "Doctors" },
  { id: "appointment", label: "Appointment" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((item) =>
        document.getElementById(item.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="navbar-container">

        <a
          href="#home"
          className="nav-logo"
        >
          Luma Dental
        </a>

        <ul className="nav-links">

          {links.map((item) => (

            <li key={item.id}>

              <a
                href={`#${item.id}`}
                className={
                  activeSection === item.id
                    ? "active"
                    : ""
                }
              >
                {item.label}
              </a>

            </li>

          ))}

        </ul>

        <button className="nav-btn">
          Book Now
        </button>

        <div
          className="mobile-icon"
          onClick={() =>
            setMobileMenu(!mobileMenu)
          }
        >
          {mobileMenu ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </div>

        <div
          className={`mobile-menu ${
            mobileMenu ? "open" : ""
          }`}
        >

          {links.map((item) => (

            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id
                  ? "active"
                  : ""
              }
              onClick={() =>
                setMobileMenu(false)
              }
            >
              {item.label}
            </a>

          ))}

          <button
            className="mobile-btn"
            onClick={() =>
              setMobileMenu(false)
            }
          >
            Book Appointment
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;