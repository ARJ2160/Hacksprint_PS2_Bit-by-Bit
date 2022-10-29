import React, { useState } from "react";
import { LockOpenIcon } from "@heroicons/react/20/solid";
import signInSVG from "../assets/signin.svg";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/signInSlice";
import Image from "next/image";

export interface Errors {
  email: string;
  password: string;
}

export interface formValues extends Errors {}

const signin = () => {
  // let navigate = useNavigate();
  // let dispatch = useDispatch();
  const [formValues, setFormValue] = useState<formValues>({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<Errors>({
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValue({ ...formValues, [name]: value });
  };

  const validate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    formValues: formValues
  ) => {
    e.preventDefault();
    const errors: Errors = { email: "", password: "" };
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!formValues.email) {
      errors.email = "Email is Required";
    } else if (!regex.test(formValues.email)) {
      errors.email = "Enter valid Email";
    }
    if (!formValues.password) {
      errors.password = "Password is Required";
    }

    //Check if there are no errors
    // if (Object.values(errors).length === 0) {
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then(() => {
        // dispatch(signIn({ formValues }));
        setFormValue({ email: "", password: "" });
        // navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
    // }
    console.log(errors, Object.keys(errors).length);
    return errors;
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Image
              className="mx-auto h-20 w-20"
              src={signInSVG}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <a href="#" className="font-medium text-pinkRed">
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div className="mb-5">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`${
                    formErrors.email.length > 0
                      ? "border-red-500 relative block w-full appearance-none rounded-none rounded-t-md border px-3 py-2 text-red-500 placeholder-red-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      : "relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  }`}
                  placeholder="Email address"
                  value={formValues?.email}
                  onChange={(e) => handleChange(e)}
                />
                {formErrors.email.length > 0 && (
                  <p className="text-sm text-red-500 mt-1">
                    {formErrors.email}
                  </p>
                )}
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={`${
                    formErrors.password.length > 0 ? "text" : "password"
                  }`}
                  autoComplete="current-password"
                  required
                  className={`${
                    formErrors.email.length > 0
                      ? "border-red-500 relative block w-full appearance-none rounded-none rounded-t-md border px-3 py-2 text-red-500 placeholder-red-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      : "relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  }`}
                  placeholder="Password"
                  value={formValues?.password}
                  onChange={(e) => handleChange(e)}
                />
                {formErrors.password.length > 0 && (
                  <p className="text-sm text-red-500 mt-1">
                    {formErrors.password}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={(e) => {
                  setFormErrors(validate(e, formValues));
                }}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockOpenIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default signin;
