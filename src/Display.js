import { useDispatch, useSelector } from "react-redux";
import { BsTrash3 } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { deleteTasks, updateRegTask } from "./reducers/tasksSlice";
import { deletedetTasks, updateDetTask } from "./reducers/detailedSlice";
import "./Display.css";
import { useState } from "react";

function Display() {
  let taskArray = useSelector((state) => state.tasks);
  let detArray = useSelector((state) => state.detailed);
  let allFilter = useSelector((state) => state.filter.allCompleted);
 

  console.log(allFilter)
 

  let detailedDateArr = [];
  console.log(detArray);
  const dispatch = useDispatch();

  //array to store tag filter task array
  const filterTask = [];
  

  //extracted completed task from regular tasks- for filter option:
  console.log(filterTask)
  if(allFilter==="Completed"){
    console.log(allFilter)
    if(taskArray){
      for(const task of taskArray){
        if(task.completed){
          filterTask.push(task)
        }
      }
    }
  }


  //To extract date and completed for detailed array:

  if (detArray) {
    detailedDateArr = detArray.map((ind) => {
      
      if(ind.completed && allFilter==="Completed"){
        filterTask.push(ind)
      }

  
      if (ind.deadline) {
        const date = new Date(ind.deadline);
        const year = date.getFullYear();
        const month = date.toLocaleString("default", { month: "short" });
        const day = date.getDate();

        return `${day} ${month} ${year}`;
      } else {
        return "Detailed task with no deadline";
      }

    });
  }
console.log(filterTask)

  return (
    <div className="disp">
      <ul className="list-group list-group-flush">
        {console.log(filterTask)}
        {filterTask &&
          filterTask.map((tasks, index) => (
            <li
              className="list-group-item listSpa"
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-circle"  
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              </svg>
              <label
                className="form-check-label labelHead displayLabel"
                style={{
                  textDecoration: tasks.completed ? "line-through" : "none",
                }}
                htmlFor="secondRadio"
              >
                {tasks.task}
              </label>

              {console.log(tasks)}
              <div>
                <BsTrash3 onClick={() => dispatch(deleteTasks(index))} />
                <TiTick
                  onClick={() => dispatch(updateRegTask(index))}
                  style={{ marginLeft: "1em" }}
                />
              </div>
            </li>
          ))}
        {console.log(filterTask)}
        {filterTask.length==0 && taskArray &&
          taskArray.map((tasks, index) => (
            <li
              className="list-group-item listSpa"
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-circle"  
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              </svg>
              <label
                className="form-check-label labelHead displayLabel"
                style={{
                  textDecoration: tasks.completed ? "line-through" : "none",
                }}
                htmlFor="secondRadio"
              >
                {tasks.task}
              </label>

              {console.log(tasks)}
              <div>
                <BsTrash3 onClick={() => dispatch(deleteTasks(index))} />
                <TiTick
                  onClick={() => dispatch(updateRegTask(index))}
                  style={{ marginLeft: "1em" }}
                />
              </div>
            </li>
          ))}
        {console.log(detArray)}
        {filterTask.length==0 &&  detArray &&
          detArray.map((tasks, index) => (
            <li
              className="list-group-item listSpa"
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              </svg>
              <label
                className="form-check-label labelHead displayLabel"
                style={{
                  textDecoration: tasks.completed ? "line-through" : "none",
                }}
                htmlFor="secondRadio"
              >
                <div className="labelDate">
                  <h3>{tasks.task}</h3>
                  {detailedDateArr[index] && (
                    <h5 style={{ color: "red" }}>{detailedDateArr[index]}</h5>
                  )}
                </div>
              </label>
              <div>
                <BsTrash3 onClick={() => dispatch(deletedetTasks(index))} />
                <TiTick
                  onClick={() => dispatch(updateDetTask(index))}
                  style={{ marginLeft: "1em" }}
                />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Display;
