import React,{useState, useEffect} from "react";

function Test2(props) {
    console.log("FUNC setstate");
    const [s1, setS1]= useState(props.arg);
 

  const buttonHandler = () => {
    console.log("FUNC work push button");
    let val = s1;
    val++;
    setS1(val);
  }
  useEffect(() => {
    console.log("FUNC use effect")}
     );

  console.log("FUNC render 1");
  return (
    <>
      <div>
        {console.log("FUNC render 2 from return")}
         <button onClick={buttonHandler}> Push func</button>
      </div>

      <div> {s1}</div>
    </>
  );
}

export default Test2;
