import { useState } from "react";

export default function LoginForm() {
  const [loginCredentials, setloginCredentials] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    // save to db etc.
    console.log(loginCredentials);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={loginCredentials.username}
          onChange={(e) =>
            setloginCredentials({
              ...loginCredentials,
              username: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={loginCredentials.password}
          onChange={(e) =>
            setloginCredentials({
              ...loginCredentials,
              password: e.target.value,
            })
          }
        />

        <button onClick={(e) => handleSubmit(e)}>Login</button>
      </form>
    </div>
  );
}
