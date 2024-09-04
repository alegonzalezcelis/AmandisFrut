import Hero from "../components/Hero";
import InfoBoxes from "../components/InfoBox";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";
import nuestraMision from "../assets/images/nuestra-mision.jpg";

const Home = () => {
  return (
    <>
      <Hero />
      <main className="container-fluid grid grid-cols-12 col-span-12 gap-4 mt-10">
        <Title title="¿Por qué AmandisFrut?" />
        <InfoBoxes />
      </main>
      <section className="grid grid-cols-12 items-center py-5 my-5 border-y border-slate-200">
        <Title title="Nuestros productos" />
        <p className="col-span-10 col-start-2 max-w-3xl mx-auto mt-4 text-muted-foreground md:text-lg text-center text-neutral-600">
          AmandisFrut ofrece cítricos y frutas premium de la más alta calidad.
          <br />
          Descubre nuestra variedad de productos frescos y saborea lo mejor de
          la naturaleza.
        </p>
        <div className="grid grid-cols-12 col-start-2 col-span-10 gap-5 mt-10">
          <ProductCard
            name={"Limones"}
            description={
              "Cítricos versátiles con sabor intenso y refrescante. Ideales para cocina, bebidas y usos medicinales. Cultivados de forma natural para máxima calidad."
            }
            imageUrl={
              "https://images.unsplash.com/photo-1692954685426-e1eea03babcd?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <ProductCard
            name={"Naranjas"}
            description={
              "Jugosas y dulces, repletas de vitamina C. Perfectas para zumos frescos o como snack saludable. Cosechadas en su punto óptimo de maduración."
            }
            imageUrl={
              "https://images.unsplash.com/photo-1661882002589-d93b357a2ffc?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <ProductCard
            name={"Paltas"}
            description={
              "Cremosas y nutritivas, ricas en grasas saludables. Excelentes para ensaladas, guacamole o tostadas. Cosechadas a mano en su punto perfecto."
            }
            imageUrl={
              "https://veritable.cl/wp-content/uploads/2023/05/palta.jpeg"
            }
          />
          <ProductCard
            name={"Miel"}
            description={
              "Pura y natural, con sabor suave y aromático. Producida por abejas en nuestros propios campos de cítricos. Perfecta como endulzante o para usos terapéuticos."
            }
            imageUrl={
              "https://images.unsplash.com/photo-1613548058193-1cd24c1bebcf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <ProductCard
            name={"Pomelos"}
            description={
              "Jugosos con un equilibrio perfecto entre dulce y ácido. Ricos en antioxidantes y vitaminas. Ideales para dietas y para refrescar en días calurosos."
            }
            imageUrl={
              "https://www.cuerpomente.com/medio/2023/01/25/pomelo_973f4dbe.jpg"
            }
          />
          <ProductCard
            name={"Manzanas"}
            description={
              "Crujientes y jugosas, con un equilibrio perfecto entre dulce y ácido. Ricas en fibra y antioxidantes. Ideales como snack saludable o en diversas preparaciones culinarias."
            }
            imageUrl={
              "https://images.unsplash.com/photo-1533893662125-43c54ffa3b41?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
      </section>

      <section
        id="nosotros"
        className="grid grid-cols-12 col-span-12 gap-y-10 mt-10"
      >
        <Title title="Nuestra Mision" />
        <div className="col-start-2 col-span-10 md:col-end-6">
          <img
            src={nuestraMision}
            className="rounded-md h-auto shadow-xl"
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
            <span className="font-bold">Valor: </span>: Nos esforzamos por
            ofrecer los mejores precios sin comprometer la calidad.
            <br />
            <br />
            <span className="font-bold">Servicio excepcional: </span>: Nos
            comprometemos a proporcionar una experiencia de compra y entrega
            impecable y confiable.
          </p>

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

        {/* 

**Calidad suprema**: Controlamos todo el proceso desde la siembra hasta la entrega para garantizar la máxima frescura y calidad.

2. **Variedad**: Ofrecemos una amplia gama de cítricos y frutas para satisfacer todos los gustos y necesidades.

3. **Valor**: Nos esforzamos por ofrecer los mejores precios sin comprometer la calidad.

4. **Servicio excepcional**: Nos comprometemos a proporcionar una experiencia de compra y entrega impecable y confiable.

5. **Sostenibilidad**: Implementamos prácticas agrícolas responsables para cuidar nuestro entorno y asegurar la calidad a largo plazo de nuestros productos.


*/}
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
