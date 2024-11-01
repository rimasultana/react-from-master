const SimpleForm = () => {
  const handlaSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    console.log("object");
  };
  return (
    <div>
      <form onSubmit={handlaSubmit}>
        <input
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
          placeholder="Submit"
        />
      </form>
    </div>
  );
};

export default SimpleForm;
