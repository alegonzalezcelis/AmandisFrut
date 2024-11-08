import callToActionBg from "../assets/images/call-to-action-bg.jpg";

const CallToAction = () => {
  return (
    <>
      <div
        className="relative h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white mb-10"
        style={{
          backgroundImage: `url(${callToActionBg})`,
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Cítricos frescos directos a tu puerta
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Descubre la frescura y calidad de nuestros cítricos premium,
            cuidadosamente seleccionados y entregados directamente a ti.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300">
            Ordena ahora
          </button>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
