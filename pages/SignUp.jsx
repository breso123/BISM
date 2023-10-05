/* eslint-disable react/prop-types */
import { Form, redirect, useActionData } from "react-router-dom";
import PageNav from "../components/PageNav";
import ButtonMain from "../components/reusableButtons/ButtonMain";

import { getUsers, registerNewUser } from "./services/apiLobby";

function SignUp() {
  const formErrors = useActionData();

  return (
    <div className="flex flex-col items-center h-screen">
      <PageNav />
      <div className="h-5/6 w-2/4 flex flex-col items-center justify-center gap-6">
        <Form
          action="/signup"
          method="POST"
          className="grid grid-cols-1 items-center justify-items-center"
        >
          <label className="label" htmlFor="firstname">
            First Name:
          </label>
          <input
            className="input"
            type="text"
            id="firstname"
            name="firstname"
            required
          />

          <label className="label" htmlFor="lastname">
            Last Name:
          </label>
          <input
            className="input"
            type="text"
            id="lastname"
            name="lastname"
            required
          />

          <label className="label" htmlFor="email">
            E-mail:{" "}
            {formErrors?.email && <p className="error">{formErrors.email}</p>}
          </label>
          <input
            className="input"
            type="text"
            id="email"
            name="email"
            required
          />

          <label className="label" htmlFor="password">
            Password:
          </label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            required
          />

          <label className="label" htmlFor="confirmpassword">
            Confirm Password:{" "}
            {formErrors?.password && (
              <p className="error">{formErrors.password}</p>
            )}
          </label>
          <input
            className="input"
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            required
          />

          <ButtonMain
            btType="classic"
            additionalClass=" mt-7 h-12 w-36 hover:scale-125"
            type="submit"
            to={`${formErrors === null ? "/login" : ""}`}
          >
            Sign Up
          </ButtonMain>
        </Form>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const users = await getUsers();

  const data = Object.fromEntries(formData);
  const user = { ...data, isSubscribed: false, isAuthenticated: false };

  const errors = {};

  if (users.map((u) => u.email).includes(user.email))
    errors.email = "! E-mail already in use";
  if (user.password !== user.confirmpassword)
    errors.password = "! Passwords do not match";
  if (Object.keys(errors).length > 0) return errors;
  else {
    await registerNewUser(user);
    return redirect("/login");
  }
}

export default SignUp;
