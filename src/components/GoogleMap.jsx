const GoogleMap = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.9039322640377!2d-71.03942898255615!3d-33.58069099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x89a6f36f001b0d58!2zMzPCsDM0JzUwLjUiUyA3McKwMDInMTQuMSJX!5e0!3m2!1ses!2scl!4v1694137684079!5m2!1ses!2scl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación exacta de Amandisfrut"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
