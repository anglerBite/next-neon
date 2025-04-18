'use client';
import { useState } from "react";

const Input = () => {
    const [text, setText] = useState<string>('');
    
    return (
        <div>
            <input
                type="text"
                onChange={() => setText(text)}
                value={text}
            />
            <button>送信</button>
            <ul>
                <li>a</li>
                <li>a</li>
                <li>a</li>
            </ul>
        </div>
    )
}

export default Input