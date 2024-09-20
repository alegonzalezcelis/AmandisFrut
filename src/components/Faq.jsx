import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.refresh();
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-neutral-700">{question}</span>
        <span
          className="text-2xl transition-transform duration-500"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div
          className="mt-2 text-neutral-600 overflow-hidden"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "¿Qué tipos de cítricos ofrecen?",
      answer:
        "En AmandisFrut ofrecemos una amplia variedad de cítricos frescos, incluyendo naranjas, limones, limas, pomelos y mandarinas. También contamos con productos derivados como miel de cítricos..",
    },
    {
      question: "¿Cómo puedo realizar un pedido?",
      answer:
        "Puede realizar su pedido fácilmente a través de nuestra página web, por teléfono al +56 9 5610 3329, o enviándonos un correo electrónico a info@amandisfrut.com. Estaremos encantados de atenderle.",
    },
    {
      question: "¿Realizan envíos a domicilio?",
      answer:
        "Sí, realizamos envíos a domicilio en toda la región. Los costos y tiempos de entrega varían según la ubicación. Para más detalles, por favor contáctenos directamente.",
    },
    {
      question: "¿Cómo garantizan la frescura de sus productos?",
      answer:
        "En AmandisFrut, cosechamos nuestros cítricos en su punto óptimo de maduración y los enviamos directamente desde nuestros huertos. Utilizamos métodos de embalaje que preservan la frescura durante el transporte.",
    },
    {
      question: "¿Ofrecen descuentos para compras al por mayor?",
      answer:
        "Sí, ofrecemos precios especiales para compras al por mayor. Si está interesado en realizar una compra grande, por favor contáctenos para discutir las opciones y obtener una cotización personalizada.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <FAQItem
              question={item.question}
              answer={item.answer}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
