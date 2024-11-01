import { useEffect, useRef } from "react";

const RefFrom = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  useEffect( () =>{
    nameRef.current.focus();
  }
    ,[])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          className="border-2 border-red-200 py-2 my-2"
          type="text"
          placeholder="Enter Your Name"
          name="name"
        />
        <br />
        <input ref={emailRef} defaultValue={"rima@gmail.com"}
          className="border-2 border-red-200 py-2 my-2"
          type="text"
          placeholder="Enter Your Email"
          name="email"
        />
        <br />
        <input ref={passwordRef}
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

export default RefFrom;
