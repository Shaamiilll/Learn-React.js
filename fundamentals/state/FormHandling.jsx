import { useState } from "react";


const Form = () => {
    const [username, setUserame] = useState("")

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Enter the userName"
                    value={username}
                    onChange={() => setUserame(e.target.value)}
                />
                <P>Hello:{username}</P>
            </div>
        </>
    )


}

export default Form;    