"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const [done, setdone] = useState("Complete")

  const submitHandler = (e) => {
    e.preventDefault(); // this will stop page from reloading
    setmainTask([...mainTask, { title, desc }]);
    console.log(mainTask);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  // const complete = (i) => {
  //   let copyTask = [...mainTask];
  //   document.querySelector(".li").style.background = green;
  //   setmainTask(copyTask);
  // }

  // const complete = (i) => {
  //   let copyTask = [...mainTask];
  //   copyTask[i].completed = true; // You can add a 'completed' property to your task object
  //   setmainTask(copyTask);
  // };
  

  let renderTask = <h2>No task available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8 border-2 li">
          <div className="flex items-center justify-between  w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => {
                deleteHandler(i);
              }}
              className="bg-red-500 px-4 py-3 rounded text-white"
            >
              Delete
            </button>
            {/* <button onClick={()=>{
              complete(i)
            }}
            value={done}
            className="bg-green-400 px-4 py-3 rounded text-white">
              {done}
            </button> */}
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="font-bold text-4xl bg-black text-white p-5 text-center">
        Lalji's Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 rounded m-5 px-4 py-2"
          placeholder="Enter Your Title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 rounded m-5 px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white text-2xl border-zinc-800 border-4 rounded m-5 px-4 py-2">
          Add Task
        </button>
      </form>
      <hr className="border-2 bg-zinc-900" />
      <div className="p-8 bg-slate-200 mt-2">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
