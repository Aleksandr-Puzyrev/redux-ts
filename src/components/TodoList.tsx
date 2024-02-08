import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
    const {todos, limit, loading, page, error} = useTypedSelector(state => state.todo)
    console.log(todos);
    const pages = [1, 2, 3, 4, 5]

    const {fetchTodos, setTodoPage} = useActions()
    
    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>Произошла ошибка</h1>
    }

    return (
        <div>
            {todos.map(todo => <div key={todo.id}>{todo.id} - {todo.title}</div>)}
            <div style={{display: 'flex'}}>
                {pages.map(p => <div onClick={() => setTodoPage(p)} style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10}}>{p}</div>)}
            </div>
        </div>
    );
};

export default TodoList;