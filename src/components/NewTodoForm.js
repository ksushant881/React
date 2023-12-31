import { useState } from "react";

function NewTodoForm(props) {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if(description !== '' && assigned !== ''){
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }


    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        required 
                        onChange={e => setAssigned(e.target.value)}
                        value={assigned}>                   

                    </input>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea 
                            type="text" 
                            className="form-control" 
                            rows={3}
                            required 
                            onChange={e => setDescription(e.target.value)}
                            value={description}>                   

                        </textarea>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary mb-3"
                            onClick={submitTodo}>
                            Add Todo
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default NewTodoForm;