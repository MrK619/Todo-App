import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="d-flex  vh-100 bg-primary justify-content-center align-items-center ">
                <div className="w-25 rounded p-3 bg-white">
                    <h2 className="text-center">Signup</h2>
                    <form action="">
                        <div className="mb-3">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="name"
                                className="form-control rounded-0"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="email"
                                className="form-control rounded-0"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="password"
                                className="form-control rounded-0"
                            />
                        </div>
                        <button className="btn btn-success w-100 mb-3">
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
