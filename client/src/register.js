import { useState } from "react";

const Register = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        setIsPending(true)

        e.preventDefault();
        const blog = { userName, userEmail, userPassword };

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('Registered Successfully')
        })
        setIsPending(false)
    }
    return (
        <div className="create">
            <h2>Add a New Blogs</h2>
            <form onSubmit={handleSubmit} action="">
                <label>
                    Name
                </label>
                <input
                    type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <label>
                    Email:
                </label>
                <input
                    type="email"
                    required
                    value={userEmail}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <label>
                    Password:
                </label>
                <input
                    type="password"
                    required
                    value={userPassword}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>

                {!isPending && <button>Register</button>}
                {isPending && <button disabled>Loading...</button>}
            </form>
        </div>
    );
}

export default Register;