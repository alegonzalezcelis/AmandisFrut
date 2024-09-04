const InfoBox = ({ icon, title, description }) => (
  <div className="grid col-span-12 grid-flow-col gap-x-5 md:col-span-3 md:flex md:flex-col md:items-start rounded-lg shadow-xl py-10 px-5 bg-white">
    <i
      className={`fa-solid ${icon} text-green-500 mx-auto my-auto text-4xl`}
    ></i>
    <div className="md:mt-3 md:text-center">
      <h3 className="text-neutral-600 font-semibold mb-3">{title}</h3>
      <p className="text-neutral-600 font-light text-sm">{description}</p>
    </div>
  </div>
);

const InfoBoxes = () => {
  const infoBoxesData = [
    {
      icon: "fa-lemon",
      title: "Frescura y calidad",
      description: "Productos cosechados y procesados de la mejor calidad",
    },
    {
      icon: "fa-store",
      title: "Amplia variedad",
      description:
        "Ofrecemos una amplia variedad de cítricos y frutas procesadas",
    },
    {
      icon: "fa-hand-holding-dollar",
      title: "El mejor precio",
      description:
        "Ofrecemos precios competitivos en todos nuestros productos.",
    },
    {
      icon: "fa-truck",
      title: "Entrega rápida y confiable",
      description: "Recibe tu pedido de manera rápida y segura.",
    },
  ];

  return (
    <div className="grid grid-cols-12 col-start-2 col-end-12 gap-x-5 gap-y-10">
      {infoBoxesData.map((box, index) => (
        <InfoBox
          key={index}
          {...box}
        />
      ))}
    </div>
  );
};

export default InfoBoxes;
