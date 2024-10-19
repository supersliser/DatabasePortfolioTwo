import { useState } from "react";

export default function CodeBlock({ children }) {
    const [visible, setVisible] = useState(false);
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <button style={{float: "right"}} onClick={() => setVisible(!visible)}>{visible ? "Hide" : "Show"} Code</button>
            {visible && <div>{children}</div>}
        </div>
    );
}