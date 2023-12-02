"use client"
import Link from "next/link";
import React,{ useState } from "react";
import Handleerror from "./signupvalidation";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Home() {
    const router = useRouter()
    const [values,setvalues] = useState({
        name:'',
        email:'',
        password:''
    })
    const [error,seterror]= useState({
        name:'',
        email:'',
        password:''
    })
    const handleinput=(event)=> {
        setvalues(prev=>({...prev , [event.target.name]:[event.target.value]}))
    
    }
    const handle = (event)=>{
        event.preventDefault()
        seterror(Handleerror(values))
        if(error.name==="" && error.password=="" && error.email===""){
            console.log("triggered");
            axios.post("http://localhost:8081/signup",values).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
    return (
        <>
            <div className="d-flex  vh-100 bg-primary justify-content-center align-items-center ">
                <div className="w-25 rounded p-3 bg-white">
                    <h2 className="text-center">Signup</h2>
                    <form action="" onSubmit={handle}>
                        <div className="mb-3">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="name"
                                className="form-control rounded-0"
                                name="name"
                                onChange={handleinput}
                            />
                            {error.name && <span className="text-danger">{error.name}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="email"
                                className="form-control rounded-0"
                                name="email"
                                onChange={handleinput}
                            />
                            {error.email && <span className="text-danger">{error.email}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="password"
                                className="form-control rounded-0"
                                onChange={handleinput}
                                name="password"
                            />
                            {error.password && <span className="text-danger">{error.password}</span>}
                        </div>
                        <button type="submit" className="btn btn-success w-100 mb-3">
                            Submit
                        </button>
                        <p>
                            Already have an account? <Link href="/">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}
