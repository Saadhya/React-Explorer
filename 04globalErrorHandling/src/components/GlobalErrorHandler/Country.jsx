import React, { useEffect, useState } from "react";
import appApi from "../../config/appApi";
import ProductCard from "../Products/ProductCard";
import { useErrorBoundary } from "react-error-boundary";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const { showBoundary } = useErrorBoundary();
  
  const getCountries = async () => {
    // const data = appApi();
    appApi()
      .then((response) => {
        if (response) {
          console.log(response.data);
          setCountries(response.data);
        }
      })
      .catch((err) => {
        setError(err);
        showBoundary(err)
        // alert(err);
      });

    // console.log(countries);
  };
  useEffect(() => {
    getCountries();
  }, [0]);

  return (
    <div className="p-4">
      <h1 className="text-center bg-gray-500 p-4 text-3xl text-white">
        Country
      </h1>
      <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        {countries && countries.map((country) => (
          <div key={country.flag}>
            <ProductCard data={country} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Country;
