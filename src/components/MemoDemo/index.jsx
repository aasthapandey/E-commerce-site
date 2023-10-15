import React, { useMemo, useState } from "react";

const ComponentOne = React.memo((props) => {
  return <h1>I am C1 {props.value1}</h1>;
});

const ComponentTwo = (props) => {
  return <h1>I am C2 {props.value2}</h1>;
};

const squareNumber = (num) => {
  return Math.pow(num, 2);
};

export const MemoDemo = () => {
  const [num, setNumber] = useState(0);
  const squaredNumber = useMemo(() => {
    return squareNumber(num);
  }, [num]);
  const [val1, setVal1] = useState(1);
  const [val2, setVal2] = useState(2);
  const [val3, setVal3] = useState();

  return (
    <div>
      <h6>Squared number: {squaredNumber}</h6>
      <input
        type="number"
        placeholder="Update"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <ComponentOne value1={val1} />
      <ComponentTwo value2={val2} />
      <button
        onClick={(e) => {
          setNumber(100);
          //   setVal3("Clicked");
          //   setVal1("I am val1");
        }}
      >
        Click me
      </button>
      <button
        onClick={(e) => {
          setVal3("Clicked");
        }}
      >
        Click me not with memo
      </button>
    </div>
  );
};
