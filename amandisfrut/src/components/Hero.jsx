import heroImage from "../assets/images/heroImage.png";

const Hero = () => {
  return (
    <>
      <header
        id="header-section"
        className="grid grid-cols-12 text-gray-500 py-10 md:py-0 mt-24 md:mt-36"
      >
        <div className="col-start-2 col-end-12 md:col-end-7 rounded-md my-auto">
          <h1 className="text-center md:text-left text-xl mb-5">
            La mejor calidad de Cítricos con
            <br />
            <span className="text-center font-extrabold text-4xl md:text-5xl text-green-500">
              AmandisFrut
            </span>
          </h1>
          <p className="text-base text-center md:text-left">
            Nos dedicamos a la venta de cítricos al por mayor, cosechados y
            procesados de manera natural.
          </p>
          <br />
          <button
            className="mx-auto md:mx-0 bg-green-500 rounded-md text-white flex items-center justify-center gap-x-3 text-base py-2 w-full md:w-40"
            onClick="window.open('https://wa.me/56966192139/?text=Hola, me gustaría comprar unos limoncitos...', '_blank')"
          >
            <i className="fa-brands fa-whatsapp text-3xl"></i>
            Contacto
          </button>
        </div>
        <div className="hidden md:flex justify-end col-span-3 col-end-12">
          <img
            src={heroImage}
            alt=""
          />
        </div>
      </header>
    </>
  );
};

export default Hero;
