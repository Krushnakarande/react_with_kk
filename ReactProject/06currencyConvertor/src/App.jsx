import { useState } from 'react';
import React from 'react';

import { InputBox } from './components';
import useCurrencyinfo from './hooks/useCurrencyinfo';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(from); 
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    }
  };

  return (
    <>
   <div
  className="w-screen h-screen flex justify-center items-center gap-6 bg-cover bg-no-repeat bg-center overflow-hidden"
  style={{
    backgroundImage: `url('https://images.pexels.com/photos/33813215/pexels-photo-33813215.jpeg')`,
  }}
>
  {/* Old Div (converter box) */}
  <div className="w-full max-w-md border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        convert();
      }}
    >
      {/* From Box */}
      <div className="w-full mb-1">
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amt) => setAmount(amt)}
        />
      </div>

      {/* Swap Button */}
      <div className="relative w-full h-0.5">
        <button
          type="button"
          style={{ backgroundColor: "#2563ebcc" }}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md px-2 py-0.5 text-white"
          onClick={swap}
        >
          Swap
        </button>
      </div>

      {/* To Box */}
      <div className="w-full mt-1 mb-4">
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisable
        />
      </div>

      {/* Convert Button */}
      <button
        type="submit"
        style={{ backgroundColor: "#2563ebcc" }}
        className="w-full px-4 py-3 rounded-lg text-white"
      >
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
    </form>
  </div>

  {/* New Div */}
  <div className=" rounded-lg text-black p-5 backdrop-blur-sm bg-white/30 w-[400px] h-[300px]">
   <div
     className="rounded-lg w-full h-full bg-cover "
    style={{
  backgroundImage: `url('https://images.pexels.com/photos/33813215/pexels-photo-33813215.jpeg')`,}}
    >
      
   
   </div>
  </div>
</div>

    </>
  );
}

export default App;
