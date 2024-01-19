import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div>
      <div>
        <div className="mx-auto flex h-20 w-20 items-center justify-center ">
          <img src={data.flags.png} />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-black">
          {data.name.common}
        </h3>
        <p className="mt-4 text-sm text-gray-600">
          {data.flags.alt ? data.flags.alt : "Description not available"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
