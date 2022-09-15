import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [fname, setfname] = useState("");
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");

  let allUsers: any = [];
  let path = `/signin`;
  let history = useHistory();

  const routeChange = () => {
    history.push(path);
  };

  return (
    <div className="flex justify-center h-screen items-center flex-col">
      <div className="block p-6 rounded-lg shadow-lg bg-white w-96">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              let retrievedObject: any = localStorage.getItem("users");
              if (retrievedObject) {
                allUsers.push(JSON.parse(retrievedObject));
              }
              allUsers.push({ fname, email, pwd });
              localStorage.setItem("users", JSON.stringify(allUsers));
              routeChange();
            }}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className=" rounded-md shadow-sm">
              <div className="my-4">
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  id="full-name"
                  name="name"
                  type="text"
                  value={fname}
                  onChange={(e) => {
                    setfname(e.target.value);
                  }}
                  autoComplete="name"
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div className="my-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={pwd}
                  onChange={(e) => {
                    setpwd(e.target.value);
                  }}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded border border-transparent bg-green-400 py-2 px-4 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Create Account
              </button>
              <p className="text-gray-500 mt-2 text-center text-sm">
                By signing up, you agree to the Terms of Services and Privacy
                Policy
              </p>
            </div>
          </form>
        </div>
      </div>
      <p className="text-gray-500 mt-4">
        Already have an account?{" "}
        <span className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">
          <Link
            to={{
              pathname: "/signin",
            }}
          >
            Log in
          </Link>
        </span>
      </p>
    </div>
  );
};
export default SignUp;
