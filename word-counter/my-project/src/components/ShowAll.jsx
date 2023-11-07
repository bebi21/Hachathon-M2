import React, { useState } from "react";
import TextErea from "./TextErea";

export default function ShowAll() {
  const [numberText, setNumberText] = useState();
  const [numberWord, setNumberWord] = useState();
  const [value1, setValue1] = useState();
  const [upper, setUpper] = useState();
  const [paragrap, setParagrap] = useState();

  const handleTakeValue = (value) => {
    // số lượng kí tự
    let number = value.split(" ").join("").split("").length;
    setNumberText(number);
    // số lượng từ
    let a = value.split(" ");
    let b = a.filter((item) => item != "");
    setNumberWord(b.length);
    setValue1(value);
  };

  //

  const handleParagrap = (value) => {
    setParagrap(value);
  };

  const handleUpper = () => {
    setUpper(1);
  };
  const handleLower = () => {
    setUpper(0);
  };
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex justify-center bg-[#e4cee3] w-[50%] ">
          <h1
            style={{
              textAlign: "center",
              position: "absolute",
              top: "50px",
              fontSize: "20px",
            }}
          >
            Word Counter
          </h1>
          <div className="mt-[100px]">
            <div className="flex justify-evenly mb-[50px] ">
              <div className="w-[100px] h-[100px] m-[10px] bg-[#a8199e] aline-center flex justify-center flex-col items-center ">
                Word
                <p> {numberText}</p>
              </div>
              <div className="w-[100px] h-[100px] m-[10px] bg-[#a8199e] aline-center flex justify-center flex-col items-center ">
                Letter <p>{numberWord}</p>
              </div>
              <div className="w-[100px] h-[100px] m-[10px] bg-[#a8199e] aline-center flex justify-center flex-col items-center ">
                Paragrap
                <p>{paragrap}</p>
              </div>
            </div>
            <div className="ml-[50px]">
              <TextErea
                takeText={handleTakeValue}
                upper={upper}
                paragrap={handleParagrap}
              />
            </div>
            <div
              className="ml-[80px]"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            >
              <button
                onClick={handleUpper}
                className="rounded hover:rounded-lg p-[5px]border-solid border-2 border-sky-500 mr-[10px] bg-[#872adf] text-white p-[10px]"
              >
                uppercase
              </button>
              <button
                onClick={handleLower}
                className="rounded hover:rounded-lg p-[5px]border-solid border-2 border-sky-500 mr-[10px] bg-[#872adf] text-white p-[10px]"
              >
                lowercase
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
