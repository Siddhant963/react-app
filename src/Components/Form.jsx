import React, { useState } from "react";
const Form = () => {
  const [username, setusername] = useState("");
  const Submithendler = (e) => {
    e.preventDefault(e);
    console.log(username);

    setusername("");
  };
  return (
    <div className="flex">
      <form
        onSubmit={(e) => {
          Submithendler(e);
        }}
      >
        <input
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
          className="px-4 py-3 text-xl rounded-borders m-5"
          type="text"
          placeholder="enter your name"
        />
        <button>click me </button>
      </form>
    </div>
  );
};
export default Form;
