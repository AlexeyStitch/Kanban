import React, {useState} from 'react';

const initialTasks = [
  {
    name: 'CreateF1',
    priority: 10,
    status: 'todo'
  },
  {
    name: 'CreateF2',
    priority: 20,
    status: 'review'
  },
  {
    name: 'CreateF3',
    priority: 30,
    status: 'done'
  },
  {
    name: 'CreateF4',
    priority: 40,
    status: 'todo'
  },
  {
    name: 'CreateF5',
    priority: 50,
    status: 'progress'
  }
]

function App() {

  const [tasks, setTasks] = useState(initialTasks);


  const [isOpenCreateTaskForm, setIsOpenCreateTaskForm] = useState(false)
  const [isActiveFormButton, setIsActiveFormButton] = useState(false)

  const [inputTask, setInputTask] = useState('')

  const openCreateTask = () => {
    setIsOpenCreateTaskForm(true)
  }

  const taskChangeActive = (e) => {
    setIsActiveFormButton(e.target.value.length > 4)
    setInputTask(e.target.value)
  }

  const submitTask = (e) => {
    e.preventDefault();
    console.log(inputTask)
    closeReset()
  }

  const closeReset = () => {
    setInputTask('')
    setIsOpenCreateTaskForm(false)
    setIsActiveFormButton(false)
  }



  return (
      <div className="App">


        <div className="container">
          <h1>Kanban</h1>

          {!isOpenCreateTaskForm && <button type="submit" className="btn btn-primary" onClick={openCreateTask}>CreateTask</button>}
          {
            isOpenCreateTaskForm &&
            <form>
              <div className="form-group">

                <label htmlFor="exampleInputEmail1">Task</label>
                <input type="text" className="form-control" onChange={taskChangeActive} value={inputTask}/>
              </div>
              <button type="submit" className="btn btn-primary" disabled={!isActiveFormButton} onClick={submitTask}>Submit</button>
              <button className="btn btn-secondary" onClick={closeReset}>Cancel</button>
            </form>
          }

          <div className="row">
            <div className="col-sm">
              Task
              <ColumnTask tasks={tasks} todo={'todo'}/>
            </div>

            <div className="col-sm">
              In Progress
              <ColumnTask tasks={tasks} todo={'progress'}/>
            </div>

            <div className="col-sm">
              Review
              <ColumnTask tasks={tasks} todo={'review'}/>
            </div>

            <div className="col-sm">
              Done
              <ColumnTask tasks={tasks} todo={'done'}/>
            </div>

          </div>
        </div>

      </div>
  );
}

export default App;ddds
</div>
</div>

</div>
</div>
</div>

</div>
);
</div>
</div>

</div>
);
</div>
</div>

</div>
);
</div>
</div>

</div>
);