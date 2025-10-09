import type {TodoListProps} from "../../types.ts";
import {CheckSquare, Edit, Trash} from "lucide-react";
import {Square} from "lucide-react";

const TodoList = ({todos, deleteTodo, toggleTodo, editTodo} : TodoListProps) => {
    return (
        <>
            <ul className="space-y-2">
                {todos.map(todo => (
                    <li key={todo.id} className="bg-gray-100 p-2 rounded flex items-center justify-between">
                        <div className="flex items-center gap-2 flex-1">
                            <button className="text-green-500" onClick={() => toggleTodo(todo.id)}>
                                {todo.completed? <CheckSquare size={18}/> : <Square size={18} /> }


                            </button>

                            <span>{todo.text}</span>
                        </div>

                        <div className="flex gap-2">
                            <button className="text-cf-dark-gray" //onClick={}
                            >
                                <Edit size={18}/>
                            </button>

                            <button className="text-cf-dark-red" onClick={() => deleteTodo(todo.id)}>
                                <Trash size={18} />
                            </button>
                        </div>

                    </li>
                ) )}

            </ul>
        </>
    )
}

export default TodoList;