import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <main className="container-fluid grid grid-cols-12 col-span-12 gap-4 mt-10">
        <h2 className="col-start-2 col-span-10 text-xl text-neutral-600 font-semibold text-center md:text-left">
          Porque AmandisFrut
        </h2>
        <div className="grid grid-cols-12 col-start-2 col-end-12 gap-x-5 gap-y-10">
          <div className="grid col-span-12 grid-flow-col gap-x-5 md:col-span-3 md:flex md:flex-col md:items-start rounded-lg shadow-xl py-10 px-5 bg-white">
            <i className="fa-solid fa-lemon text-green-500 mx-auto my-auto text-4xl"></i>
            <div className="md:mt-3 md:text-center">
              <h3 className="text-neutral-600 font-semibold mb-3">
                Frescura y calidad
              </h3>
              <p className="text-neutral-600 font-light text-sm">
                Productos cosechados y procesados de la mejor calidad
              </p>
            </div>
          </div>
          <div className="grid col-span-12 grid-flow-col gap-x-5 md:col-span-3 md:flex md:flex-col md:items-start rounded-lg shadow-xl py-10 px-5 bg-white">
            <i className="fa-solid fa-store text-green-500 mx-auto my-auto text-4xl"></i>
            <div className="md:mt-3 md:text-center">
              <h3 className="text-neutral-600 font-semibold mb-3">
                Amplia variedad
              </h3>
              <p className="text-neutral-600 font-light text-sm">
                Ofrecemos una amplia variedad de cítricos y frutas procesadas
              </p>
            </div>
          </div>
          <div className="grid col-span-12 grid-flow-col gap-x-5 md:col-span-3 md:flex md:flex-col md:items-start rounded-lg shadow-xl py-10 px-5 bg-white">
            <i className="fa-solid fa-hand-holding-dollar text-green-500 mx-auto my-auto text-4xl"></i>
            <div className="md:mt-3 md:text-center">
              <h3 className="text-neutral-600 font-semibold mb-3">
                El mejor precio
              </h3>
              <p className="text-neutral-600 font-light text-sm">
                Ofrecemos precios competitivos en todos nuestros productos.
              </p>
            </div>
          </div>
          <div className="grid col-span-12 grid-flow-col gap-x-5 md:col-span-3 md:flex md:flex-col md:items-start rounded-lg shadow-xl py-10 px-5 bg-white">
            <i className="fa-solid fa-truck text-green-500 mx-auto my-auto text-4xl"></i>
            <div className="md:mt-3 md:text-center">
              <h3 className="text-neutral-600 font-semibold mb-3">
                Entrega rápida y confiable
              </h3>
              <p className="text-neutral-600 font-light text-sm">
                Recibe tu pedido de manera rápida y segura.
              </p>
            </div>
          </div>
        </div>
      </main>
      <section className="grid grid-cols-12 items-center py-5 my-5 border-y border-slate-200">
        <div className="grid grid-cols-12 col-start-2 col-end-12 items-center">
          <img
            src="assets/images/naranjas.png"
            alt=""
            className="col-span-12 md:col-span-3"
          />
          <p className="col-span-12 md:col-span-6 md:col-start-6 font-light text-neutral-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            deleniti cum quis sit ducimus nemo eveniet assumenda neque quidem
            sint.
          </p>
        </div>
        <div className="grid grid-cols-12 col-start-2 col-end-12 items-center">
          <img
            src="assets/images/naranjas.png"
            alt=""
            className="col-span-12 md:col-span-3"
          />
          <img
            src="assets/images/limones.png"
            alt=""
            className="col-span-12 md:col-span-3"
          />
          <p className="col-span-12 md:col-span-6 md:col-start-6 font-light text-neutral-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            deleniti cum quis sit ducimus nemo eveniet assumenda neque quidem
            sint.
          </p>
        </div>
      </section>

      <section
        id="nosotros"
        className="grid grid-cols-12 col-span-12 gap-y-16 mt-10"
      >
        <div className="col-start-2 col-span-10 md:col-end-6">
          <img
            src="assets/images/nosotros.jpeg"
            className="rounded-xl shadow-xl"
            alt=""
            srcSet=""
          />
        </div>
        <div className="col-start-2 col-span-10 md:col-end-12 md:col-span-4 font-light">
          <p className="text-justify text-neutral-600">
            En AmandisFrut, nos comprometemos a proporcionar cítricos frescos y
            de la más alta calidad.
            <br />
            <br />
            Sabemos que la frescura y el sabor son esenciales para el éxito de
            tu negocio, por eso nos aseguramos de que nuestros productos lleguen
            a tu cocina en perfectas condiciones.
          </p>
          <br />
          <br />
          <ul className="list-none font-medium text-base">
            <li className="text-justify text-neutral-600 flex items-center mb-3">
              <i className="fa-regular fa-circle-check text-green-500 mr-5 text-2xl"></i>
              Ventas por bins
            </li>
            <li className="text-justify text-neutral-600 flex items-center mb-3">
              <i className="fa-regular fa-circle-check text-green-500 mr-5 text-2xl"></i>
              Ventas por caja
            </li>
            <li className="text-justify text-neutral-600 flex items-center mb-3">
              <i className="fa-regular fa-circle-check text-green-500 mr-5 text-2xl"></i>
              Ventas al detalle
            </li>
          </ul>
        </div>
      </section>

      <section
        id="productos"
        className="grid grid-cols-12 col-span-12 mt-10"
      >
        <div className="col-start-2 col-end-12 mt-10 gap-4 shadow-xl">
          <div
            className="elfsight-app-91716e24-2f05-42d3-9fb0-605276e9e2ca"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>
    </>
  );
};

export default Home;
