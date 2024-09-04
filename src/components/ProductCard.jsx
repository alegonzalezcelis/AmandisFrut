const ProductCard = ({ name, description, imageUrl }) => {
  return (
    <>
      <div className="overflow-hidden rounded-lg shadow-lg col-span-12 md:col-span-4">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-64 transition-transform duration-300 ease-in-out hover:scale-105"
          style={{ aspectRatio: "500/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold mb-2 text-neutral-600">{name}</h3>
          <p className="text-muted-foreground text-neutral-600">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
