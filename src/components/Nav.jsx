import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo-amandisfrut.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Productos", href: "#productos" },
    { name: "Nuestra misión", href: "#mision" },
    { name: "Preguntas Frecuentes", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ];

  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      if (isMenuOpen) setIsMenuOpen(false);
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContact = () => {
    window.open(
      "https://wa.me/56956103329/?text=Hola, me gustaría comprar unos limoncitos...",
      "_blank"
    );
  };

  return (
    <nav className="bg-white shadow-xl fixed top-0 z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <a
              href="#inicio"
              className="flex-shrink-0"
            >
              <img
                className="w-24"
                src={logo}
                alt="Amandisfrut logo"
              />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <button
              onClick={handleContact}
              className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Contacto
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isMenuOpen && (
        <div
          className="md:hidden"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={handleContact}
              className="w-full text-center bg-green-500 text-white px-3 py-2 rounded-md text-xl font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
