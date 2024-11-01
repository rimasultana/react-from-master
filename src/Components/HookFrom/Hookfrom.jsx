import useInputState from "../Hook/useInputState";

export default function Hookform() {
  const [name, handleNameChange] = useInputState("Rima");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("object", name);
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
          className="border-2 border-red-200 py-2 my-2"
          type="text"
          placeholder="Enter Your Email"
          name="email"
        />
        <br />
        <input
          className="border-2 border-red-200 py-2 my-2"
          type="password"
          placeholder="Enter Your Password"
          name="password"
        />
        <br />
        <input
          className="border-2 border-red-200 p-2"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
