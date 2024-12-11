import { useState } from "react";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    // console.log(formData);
    // console.log("Formulario enviado");
  };

  return (
    <section
      id="contacto"
      className="py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-neutral-600">
              Información de Contacto
            </h3>
            <div className="space-y-4 text-neutral-600">
              <div className="flex items-center">
                <i className="fa-solid fa-phone text-green-500 text-xl mr-5"></i>
                <span className="text-lg">+56 9 5610 3329</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-envelope text-green-500 text-xl mr-5"></i>
                <a
                  href="mailto:cris.leonardo@gmail.com"
                  className="text-lg hover:underline"
                >
                  cris.leonardo@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-location-dot text-green-500 text-xl mr-5 mt-1"></i>
                <span className="text-lg">
                  Santa Teresa Mallarauco, Melipilla - G-380
                </span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-clock text-green-500 text-xl mr-5 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Horario de Atención
                  </h4>
                  <p>Lunes a Viernes: 9:00 AM - 5:00 PM</p>
                  <p>Sábado: 10:00 AM - 2:00 PM</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-neutral-600">
              Envíanos un mensaje
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8">
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;
