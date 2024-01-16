import React, { useState } from 'react'
import InputBox from './InputBox';
import useCurrencyInfo from '../../customHook/useCurrencyInfo';

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
  return (
    <div>
        <h1 className='text-center'>CurrencyConverter</h1>
        <InputBox/>
    </div>
  )
}

export default CurrencyConverter