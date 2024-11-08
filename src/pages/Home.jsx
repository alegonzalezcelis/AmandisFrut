import nuestraMision from "../assets/images/nuestra-mision.jpg";

import Hero from "../components/Hero";
import InfoBoxes from "../components/InfoBox";
import Title from "../components/Title";
import CallToAction from "../components/CallToAction";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <section
        id="inicio"
        data-aos="fade-down"
      >
        <Hero />
      </section>

      <main
        data-aos="fade-right"
        data-aos-duration="1000"
        className="container-fluid grid grid-cols-12 col-span-12 gap-4 mt-5"
      >
        <Title
          title="¿Qué nos hace diferente?"
          data-aos="fade-right"
          data-aos-delay="200"
        />
        <InfoBoxes />
      </main>
      <section
        data-aos="fade-right"
        data-aos-duration="1000"
        id="productos"
        className="grid grid-cols-12 items-center py-5 my-10"
      >
        <Title
          title="Nuestros productos"
          data-aos="fade-right"
          data-aos-delay="200"
        />
        <p
          data-aos="fade-right"
          data-aos-delay="400"
          className="col-span-10 col-start-2 max-w-3xl mx-auto mt-4 text-muted-foreground md:text-lg text-center text-neutral-600"
        >
          AmandisFrut ofrece cítricos y frutas premium de la más alta calidad.
          <br />
          Descubre nuestra variedad de productos frescos y saborea lo mejor de
          la naturaleza.
        </p>
        <div className="grid grid-cols-12 col-start-2 col-span-10 gap-5 mt-10">
          <div className="col-span-12">{/* Galería de productos */}</div>
        </div>
      </section>

      <section
        id="mision"
        data-aos="fade-right"
        data-aos-duration="1200"
        className="grid grid-cols-12 col-span-12 gap-y-10 my-10"
      >
        <Title
          title="Nuestra Mision"
          data-aos="fade-right"
          data-aos-delay="200"
        />
        <div
          className="col-start-2 col-span-10 md:col-end-6"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <img
            src={nuestraMision}
            className="rounded-md h-auto shadow-xl"
            alt=""
            srcSet=""
          />
        </div>
        <div
          className="col-start-2 col-span-10 md:col-end-12 md:col-span-4 font-light"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <p className="text-justify text-neutral-600">
            En AmandisFrut, nos comprometemos a proporcionar cítricos frescos y
            de la más alta calidad.
            <br />
            <br />
            Sabemos que la frescura y el sabor son esenciales para el éxito de
            tu negocio, por eso nos aseguramos de que nuestros productos lleguen
            a tu cocina en perfectas condiciones.
            <br />
            <br />
            <span className="font-bold">Calidad suprema: </span> Controlamos
            todo el proceso desde la siembra hasta la entrega para garantizar la
            máxima frescura y calidad.
            <br />
            <br />
            <span className="font-bold">Variedad: </span> Ofrecemos una amplia
            gama de cítricos y frutas para satisfacer todos los gustos y
            necesidades.
            <br />
            <br />
            <span className="font-bold">Valor: </span> Nos esforzamos por
            ofrecer los mejores precios sin comprometer la calidad.
            <br />
            <br />
            <span className="font-bold">Servicio excepcional: </span> Nos
            comprometemos a proporcionar una experiencia de compra y entrega
            impecable y confiable.
          </p>

          <br />
          <ul className="list-none font-medium text-base">
            <li
              className="text-justify text-neutral-600 flex items-center mb-3"
              data-aos="fade-left"
              data-aos-delay="700"
            >
              <i className="fa-regular fa-circle-check text-green-500 mr-5 text-2xl"></i>
              Ventas por bins
            </li>
            <li
              className="text-justify text-neutral-600 flex items-center mb-3"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              <i className="fa-regular fa-circle-check text-green-500 mr-5 text-2xl"></i>
              Ventas por caja
            </li>
            <li
              className="text-justify text-neutral-600 flex items-center mb-3"
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <i className="fa-regular fa-circle-check text-green-500 mr-5 text-2xl"></i>
              Ventas al detalle
            </li>
          </ul>
        </div>
      </section>
      {/* Call to action */}
      <CallToAction
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <section
        id="faq"
        data-aos="fade-up"
        data-aos-duration="1000"
        className="py-12 px-4 sm:px-6 lg:px-8"
      >
        <Title
          title="Preguntas frecuentes"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <Faq />
      </section>

      <section
        id="contacto"
        data-aos="fade-up"
        data-aos-duration="1000"
        className="py-12 px-4 sm:px-6 lg:px-8"
      >
        <Title
          title="Contáctanos"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <Contact />
      </section>

      <Footer
        data-aos="fade-up"
        data-aos-duration="800"
      />
    </>
  );
};

export default Home;
