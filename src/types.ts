import type {ReactNode, RefObject} from "react";

export type TodoProps = {
    id: number;
    text: string;
    completed: boolean;
}

export type TodoFormProps = {
    addTodo: (text: string) => void;
    inputRef: RefObject<HTMLInputElement | null>;
}

export type ButtonProps = {
    onClick?: () => void;
    disabled?: boolean;
    label: string;
    addClasses?: string;
}

export type TodoListProps = {
    todos: TodoProps[];
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
    toggleTodo: (id: number) => void;

}

export type IconButtonProps = {
    onClick?: () => void;
    disabled?: boolean;
    icon: ReactNode
    addClasses?: string;
}

export type TodoStatsProps = {
    total: number;
    active: number;
    completed: number;
}