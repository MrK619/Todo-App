
import React from "react";
import Link from "next/link";

export default function Login() {

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 className="text-center">Login form</h2>
        <form action="">
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
            />
           
          </div>
          <button className="btn btn-success w-100 mb-3">Log in</button>
          <p>
              Don't have a acount? <Link href="/signup">Sign up</Link>
            </p>
        </form>
      </div>
    </div>
  );
}
