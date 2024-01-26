import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useErrorBoundary } from "react-error-boundary";

const Products = () => {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);
  const { showBoundary, resetBoundary } = useErrorBoundary();

  const getSongs = async () => {
    const token = "";
    const res = await fetch(
      "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(res.json());
  };
  const fetchData = async () => {
    await fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setAlbums(data);
      })
      .catch((err) => {
        setError(err);
        // console.error(err);
        showBoundary(err);
      });
    // console.log(albums);
  };

  useEffect(() => {
    fetchData();
    // will do this later
    // getSongs();
  }, [0]);
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <h1 className="text-center text-3xl p-4 m-4 font-bold underline underline-offset-8">
          World's Cities list:
        </h1>
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          {albums && albums.map((data, index) => (
            <div key={data.flag}>
              <ProductCard data={data} />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="text-center text-3xl p-4 m-4">
        World's Cities list:
        {albums.map((data, index) => (
          <div key={data.flag}>
            <ProductCard data={albums} />
            <p>{data.flag + " : " + data.name.common}</p>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Products;
