import React from "react";

//child Component
const Child = ({ message }) => {
    return <h1>Message from Parent :{message}</h1>;
}


//Parent Component
const Parent = () => {
    return <Child message="Hello from Parent!" />;
}


export default Parent;
