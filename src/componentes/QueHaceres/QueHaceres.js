import React, { useState } from "react";

const ListaQuehaceres = () => {
    const [val, setVal] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = (e) => {
        e.preventDefault();
        setTasks([
            ...tasks,
            {
                miniTask: val,
                done: false,
            },
        ]);
        setVal("");
    };

    const checkHandler = (index) => {
        //Creo un nuevo objeto que reemplazara el anterior, con el unico cambio de si done es true o false.
        const newTask = {
            ...tasks[index],
        };
        newTask.done = !newTask.done;
        // console.log([tasks]);
        // console.log([tasks.slice(index)]);
        console.log([...tasks.slice(0, index)]);
        setTasks(
            [...tasks.slice(0, index), newTask].concat(tasks.slice(index + 1))
        );
    };

    const deleteHandler = (index) => {
        setTasks(tasks.slice(0, index).concat(tasks.slice(index + 1)));
    };

    return (
        <div>
            {tasks.map((item, i) => (
                <div key={i}>
                    <p style={{ textDecoration: item.done && "line-through" }}>
                        {item.miniTask}
                        <input
                            type="checkbox"
                            checked={item.done}
                            onChange={(e) => checkHandler(i)}
                            readOnly
                        ></input>
                        <button onClick={(e) => deleteHandler(i)}>Delete</button>
                    </p>
                </div>
            ))}
            <form onSubmit={addTask}>
                <input value={val} onChange={(e) => setVal(e.target.value)}></input>
                <button>Add</button>
            </form>
        </div>
    );
};

export default ListaQuehaceres;