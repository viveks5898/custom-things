import React, { useState } from "react";

const ObjectHandleState = () => {
  const [car, setCar] = useState({
    name: "Ford",
    make: 2024,
    model: "Mustang",
  });
  const handleChange = (e) => {
    setCar(
      {
        ...car,
        make: e.target.value,
      },
    );
  };
  console.log(car)
  return (
    <div>
      <p>
        My favorite car is : {car.name} {car.model} {car.make}
      </p>

      <input type="text" name="make" onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default ObjectHandleState;
