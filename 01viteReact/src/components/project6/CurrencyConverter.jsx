import React, { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "../../customHook/useCurrencyInfo";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/771881/pexels-photo-771881.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}
      >
        <h1 className="text-center text-3xl font-bold text-black-900 md:text-5xl md:leading-10">
          CurrencyConverter
        </h1>
        <div className="w-full h-4/6">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  currencyOption={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  amount={amount}
                  onAmountChange={(amt) => setAmount(amt)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  onClick={swap}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto max-w-7xl py-12 md:py-20">
    
        <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
          <img
            alt="Contact us"
            className="hidden max-h-full w-full rounded-lg object-cover lg:block"
            src="https://images.pexels.com/photos/1528348/pexels-photo-1528348.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <div className="flex items-center justify-center">
            
            <div className="px-2 md:px-12">
             
             
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CurrencyConverter;
