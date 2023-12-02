"use client";
import React, { useState } from "react";
import Link from "next/link";
import Handleerror from "./loginvalidation";

export default function Login() {
    var check = true;
    const [values, setvalues] = useState({
        email: "",
        password: "",
    });
    const [error, seterror] = useState({ email: "", password: "" });
    const handle = (event) => {
        check = true;
        event.preventDefault();
        seterror(Handleerror(values));
        router.push('/signup')
    };
    const handlevalue = (element) => {
        setvalues((prev) => ({
            ...prev,
            [element.target.name]: [element.target.value],
        }));
    };
    
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2 className="text-center">Login form</h2>

                <form action="" onSubmit={handle}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter Email"
                            className="form-control rounded-0"
                            onChange={handlevalue}
                        />
                        {error.email && (
                            <span className="text-danger">{error.email}</span>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            className="form-control rounded-0"
                            onChange={handlevalue}
                        />
                        {error.password && (
                            <span className="text-danger">
                                {error.password}
                            </span>
                        )}
                    </div>
                    <button className="btn btn-success w-100 mb-3">
                        Log in
                    </button>
                    <p>
                        Don't have a acount? <Link href="/signup">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
