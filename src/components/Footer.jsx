const Footer = () => {
  return (
    <>
      <footer className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AmandisFrut. Todos los derechos
              reservados.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://wa.me/56956103329/?text=Hola, me gustaría comprar unos limoncitos..."
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300"
              >
                <span className="sr-only">Whatsapp</span>
                <i className="fa-brands fa-whatsapp text-2xl"></i>
              </a>
              <a
                href="https://www.facebook.com/Cristianlopezbe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300"
              >
                <span className="sr-only">Facebook</span>
                <i className="fa-brands fa-facebook text-2xl"></i>
              </a>
              <a
                href="https://www.instagram.com/amandisfrutycompania/?hl=es-la"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300"
              >
                <span className="sr-only">Instagram</span>
                <i className="fa-brands fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
