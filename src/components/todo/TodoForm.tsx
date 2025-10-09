import {type ChangeEvent, type FormEvent, useState} from "react";
import type {TodoFormProps} from "../../types.ts";
import Button from "../ui/Button.tsx";

const TodoForm = ({addTodo, inputRef} : TodoFormProps) => {
    const [text, setText] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (text.trim() !== ""){
            addTodo(text);
            setText("");
            inputRef.current?.focus();
        }
    }

    return (
        <>
            <form className="flex gap-4 mb-4" onSubmit={handleSubmit}>
                <input type="text"
                    className="flex-1 border p-2 rounded"
                       value={text}
                       onChange={handleChange}
                       ref={inputRef}
                    placeholder="New Task..."
                />
                <Button label="Add" />

            </form>
        </>
    )
}

export default TodoForm;