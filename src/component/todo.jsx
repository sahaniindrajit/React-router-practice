import { useEffect, useState } from "react"
export default function Todos() {
    const [todos, setTodos] = useState([]);


    useEffect(() => {

        fetch("https://sum-server.100xdevs.com/todos")

            .then(async function (res) {
                const json = await res.json();
                setTodos(json.todos)

            })


    }, [])
    return (
        <>
            {todos.map(todo => <Todo title={todo.title} description={todo.description} />
            )}

        </>
    )
}

function Todo({ title, description }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}