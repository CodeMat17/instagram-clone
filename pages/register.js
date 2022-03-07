import axios from "axios";
import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registering, setRegistering] = useState(false);

  const register = async (e) => {
    e.preventDefault();
    setRegistering(true);
    // Request API.
    // Add your own code here to customize or restrict how the public can register new users.
    await axios
      .post(`${process.env.STRAPI_URL}/api/auth/local/register`, {
        username: username,
        email: "email",
        password: "password",
      })
      .then((response) => {
        // Handle success.
        setRegistering(false);
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        setRegistering(false);
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <div className='px-8 pt-20'>
      <div className='flex items-center justify-center'>
        <form onSubmit={register} className='w-full max-w-md mx-auto'>
          <h1 className='font-bold tracking-wider text-2xl'>Register</h1>
          <div className='pt-6 space-y-4'>
            <input
              type='text'
              name='Username'
              id='username'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Enter your username'
              className=' rounded-lg w-full focus:bg-amber-100 focus:ring-amber-600 text-amber-600 shadow-lg shadow-gray-500'
            />
            <input
              type='email'
              name='email'
              id='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className=' rounded-lg w-full focus:bg-amber-100 focus:ring-amber-600 text-amber-600 shadow-lg shadow-gray-500'
            />
            <input
              type='password'
              name='password'
              id='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              className=' rounded-lg w-full focus:bg-amber-100 focus:ring-amber-600 text-amber-600 shadow-lg shadow-gray-500'
            />
            <div className='flex justify-center'>
              <button
                type='submit'
                className='bg-amber-100 w-full py-2 rounded-lg text-amber-600 font-semibold tracking-wider shadow-lg shadow-gray-600'>
                {registering ? "REGISTERING" : "REGISTER"}
              </button>
            </div>
          </div>
        </form>
      </div>
      <h1 className='pt-6 text-center'>OR</h1>
      <div className='pt-6 flex justify-center'>
        <a
          href={`{process.env.STRAPI_URL}/api/connect/google`}
          className='bg-red-500 text-white p-3 rounded-lg shadow-lg shadow-gray-600'>
          SIGNIN WITH GOOGLE
        </a>
      </div>
    </div>
  );
}
export default Register;
