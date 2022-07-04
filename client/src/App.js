import React from "react";

const App = () => {
    return (
        <div>
            <form action="">
                <label>
                    Name:
                </label>
                <input type="text" />
                <label>
                    Email:
                </label>
                <input type="text" />
                <label>
                    Password:
                </label>
                <input type="text" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default App;