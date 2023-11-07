import React, { useState } from "react";

export default function TextErea(props) {
  const [count, setCount] = useState(0);
  const handleTakeText = (e) => {
    props.takeText(e.target.value);
    props.paragrap(count);
  };
  const handleParagrap = (e) => {
    let value = e.target.value;

    if (value.split("").length == 32 || e.key == "Enter") {
      setCount(count + 1);
    }
  };

  return (
    <>
      <textarea
        cols={30}
        rows={10}
        placeholder="nhap  vao day"
        className="border-2 border-sky-500"
        onChange={handleTakeText}
        style={{ textTransform: props.upper == 1 ? "uppercase" : "lowercase" }}
        onKeyDown={handleParagrap}
      />
    </>
  );
}
