import logo from "../assets/images/logo-amandisfrut.png";

const Nav = () => {
  return (
    <>
      <nav
        className="grid grid-cols-12 bg-white shadow-xl fixed top-0 z-10 w-full"
        id="cabecera"
      >
        <div className="col-start-2 col-span-3 md:mx-0 mt-5">
          <a href="#">
            <img
              className="w-24"
              src={logo}
              alt=""
              srcSet=""
            />
          </a>
        </div>

        <button className="col-end-12 col-span-4 md:col-span-1 md:col-end-12 h-10 text-sm md:text-xs bg-green-500 rounded-md text-white flex items-center justify-center gap-x-5 my-auto px-3 window.open('https://wa.me/56956103329/?text=Hola, me gustaría comprar unos limoncitos...', '_blank')">
          Contacto
        </button>
      </nav>
    </>
  );
};

export default Nav;
