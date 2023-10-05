/* eslint-disable react/prop-types */

import { Form, redirect, useActionData } from "react-router-dom";
import PageNav from "../components/PageNav";
import ButtonMain from "../components/reusableButtons/ButtonMain";

import { getUsers, updateUser } from "./services/apiLobby";

function Login() {
  const formErrors = useActionData();

  return (
    <div className="flex flex-col items-center h-screen">
      <PageNav />
      <div className="h-5/6 w-2/4 flex flex-col items-center justify-center gap-8">
        <Form
          action="/login"
          method="PATCH"
          className="grid grid-cols-1 items-center justify-items-center"
        >
          <label className="label" htmlFor="email">
            E-mail:
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
            {formErrors?.password && (
              <p className="error">{formErrors.password}</p>
            )}
          </label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            required
          />
          <ButtonMain
            btType="classic"
            additionalClass=" mt-7 h-12 w-36 hover:scale-125"
            type="submit"
            to={`${formErrors === null ? "/" : ""}`}
          >
            Log In
          </ButtonMain>
        </Form>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const users = await getUsers();
  const user = Object.fromEntries(formData);
  const tgtUser = users.find((u) => u.email === user.email);
  const updatedUser = { ...tgtUser, isAuthenticated: true };

  const errors = {};

  if (!users.map((u) => u.email).includes(user.email))
    errors.email = `! Not found`;
  if (
    users.map((u) => u.email).includes(user.email) &&
    tgtUser.password !== user.password
  )
    errors.password = "! Invalid Password";
  if (Object.keys(errors).length > 0) return errors;
  else {
    const id = tgtUser.id;
    localStorage.setItem(
      "user",
      JSON.stringify({ ...tgtUser, isAuthenticated: true })
    );
    await updateUser(id, updatedUser);
    return redirect("/pricing");
  }
}

export default Login;
