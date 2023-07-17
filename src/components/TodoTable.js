import TodoRowItem from "./TodoRowItem";

function TodoTable(props) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Assigned</th>
                </tr>
            </thead>
            <body>
                {props.todos.map(todo => (
                    <TodoRowComponent 
                        key={todo.rowNumber} 
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription} 
                        rowAssigned={todo.rowAssigned}
                        deleteTodo={todo.deleteTodo} 
                    />
                ))}
            </body>
        </table>
    );
}

export default TodoTable