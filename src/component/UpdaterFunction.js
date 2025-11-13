import React, { useEffect, useState } from "react";

const UpdaterFunction = () => {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);

  }
  function resetCount() {
    setCount(0);
  }
  function decCount() {
    setCount(count - 1);
  }
  return (
    <div className="main-update">
      {count}
      <div>
        <button onClick={increaseCount}> increase</button>
        <button onClick={resetCount}> reset</button>
        <button onClick={decCount}> decrease</button>
      </div>
    </div>
  );
};

export default UpdaterFunction;
