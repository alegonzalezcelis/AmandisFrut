import GoogleMap from "./GoogleMap";

const Contact = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="p-6 rounded-lg">
            <div className="space-y-4 text-neutral-600">
              <div className="flex items-center">
                <i className="fa-solid fa-phone text-green-500 text-xl mr-5"></i>
                <span className="text-lg">+56 9 5610 3329</span>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-envelope text-green-500 text-xl mr-5"></i>
                <a
                  href="mailto:cris.leonardo@gmail.com"
                  className="text-lg no-underline hover:underline"
                >
                  cris.leonardo@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-location-dot text-green-500 text-xl mr-5"></i>
                <span className="text-lg">
                  Santa Teresa Mallarauco, Melipilla - G-380
                </span>
              </div>
              <div className="flex items-start">
                <i className="fa-solid fa-clock text-green-500 text-xl mr-5"></i>
                <div className="">
                  <h3 className="font-semibold text-lg mb-1">
                    Horario de Atención
                  </h3>
                  <p>Lunes a Viernes: 9:00 AM - 5:00 PM</p>
                  <p>Sábado: 10:00 AM - 2:00 PM</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>
            </div>
          </div>
          <GoogleMap />
        </div>
      </div>
    </>
  );
};

export default Contact;
