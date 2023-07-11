import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="content-title" id="content">
          <span>Enter your content</span> <br />
          <textarea name="content" cols="30" id="content" rows="10"></textarea>
        </label>
        <br />
        <br />
        <input className="btn" type="submit" />
      </form>
      <p className="content-display">{name}</p>
    </div>
  );
};

export default Content;
