import React from "react";
// tailwind with react props
const ProductItem = (props) => {
  const { btnText = "visit me", someObj = 5 } = props;
  return (
    <div>
      ProductItem
      <div className="w-[300px] rounded-md border">
        <img
          // src="https://images.pexels.com/photos/19776870/pexels-photo-19776870/free-photo-of-woman-wearing-hat-and-blazer-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Laptop"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{props.name}</h1>
          <p className="mt-3 text-sm text-gray-600">Lorem ipsum {someObj + ", "}</p>
          <button
            type="button"
            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
