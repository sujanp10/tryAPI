import { useState } from "react";

const Register = () => {
    const [name, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        setIsPending(true)

        e.preventDefault();
        const blog = { name, email, password };

        fetch('http://localhost:9000/signup', {
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
                    value={name}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <label>
                    Email:
                </label>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <label>
                    Password:
                </label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>

                {!isPending && <button>Register</button>}
                {isPending && <button disabled>Loading...</button>}
            </form>
        </div>
    );
}

export default Register;