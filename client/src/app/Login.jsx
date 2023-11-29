import React from "react";


export default function(){
    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">

            <div className="bg-white p-3 rounded w-25">
                
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email"  placeholder="Enter Email" className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password"  placeholder="Enter Password" className="form-control rounded-0"/>
                        <p>Don't have a acount? <a href="#">Sign in</a></p>
                    </div>
                    <button className="btn btn-success w-100">Log in</button>
                </form>
            </div>
        </div>
    )
}