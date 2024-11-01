import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState("Rima Sultana");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const HandlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          className="border-2 border-red-200 py-2 my-2"
          type="text"
          placeholder="Enter Your Name"
          name="name"
        />
        <br />
        <input
          onChange={handleEmailChange}
          className="border-2 border-red-200 py-2 my-2"
          type="text"
          placeholder="Enter Your Email"
          name="email"
        />
        <br />
        <input
          onChange={HandlePasswordChange}
          className="border-2 border-red-200 py-2 my-2"
          type="password"
          placeholder="Enter Your Password"
          name="password"
          required
        />
        <br />
        <input
          className="border-2 border-red-200 p-2"
          type="submit"
          placeholder="Submit"
        />
        {
            error && <p>{error}</p>
        }
      </form>
    </div>
  );
};

export default StatefulForm;
