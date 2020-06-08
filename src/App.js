import React, {useState} from 'react';


function App() {
    const [isOpenCreateTaskFOrm, setIsOpenCreateTaskForm] = useState(false)
const [isActiveButtonTask, setisActiveButtonTask] = useState(false)

    const openCreateTaskForm = () => {
        setIsOpenCreateTaskForm(true)
    }

    const onTaskChange = (e) => {
        if(e.target.value.length >= 3) {
setisActiveButtonTask(true)
        } else {
            setisActiveButtonTask(false)
        }
    }

    return (
        <div>
            <div className="container">
                <h1>Kanban</h1>

                {!isOpenCreateTaskFOrm && <button type="button" className="btn btn-primary" onClick={openCreateTaskForm}>Create Task</button>}
                {isOpenCreateTaskFOrm &&
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Task</label>
                        <input type="text" className="form-control" onChange={onTaskChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!isActiveButtonTask}>Submit</button>
                </form>
                }
                <div className="row">

                    <div className="col-sm">
                        TO DO
                    </div>

                    <div className="col-sm">
                        IN PROGRESS
                    </div>

                    <div className="col-sm">
                        REVIEW
                    </div>

                    <div className="col-sm">
                        DONE
                    </div>

                </div>
            </div>
        </div>
);
}
