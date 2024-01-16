import React, { useCallback, useEffect, useRef, useState } from "react";

export function convertX(x) {
  return Math.floor((x * 320) / 140);
}
const PasswordGenerator = () => {
  const [len, setLen] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXabcdefghijklmnopqrstuvwxyz";
    let nums = "0123456789";
    if (numAllowed) str += nums;
    if (charAllowed) str += "!@#$%^&*(){}[]";
    // console.log(convertX(5));
    for (let i = 1; i < len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [len, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passGenerator();
  }, [len, numAllowed, charAllowed, passGenerator]);

  //   useref hook - use to take reference of the value/state for later use
  const passwordRef = useRef(null);
  //   using pass ref to apply multiple effects for user experience
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select(); //?.=> called optional select- to select the field value
    passwordRef.current?.setSelectionRange(0, 20); //?.=> to select the range of field value
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-4xl text-white text-center my-3">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          className="h-10 w-full bg-white px-3 py-1 placeholder:text-gray disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            className="cursor-pointer"
            value={len}
            min={6}
            max={100}
            onChange={(e) => setLen(e.target.value)}
          />
          <label htmlFor="">length: {len}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numInput"
            defaultChecked={numAllowed}
            onChange={() => setNumAllowed((prev) => !prev)}
          />
          <label htmlFor="numInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="charInput"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)} //to toggle previous value everytime
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
