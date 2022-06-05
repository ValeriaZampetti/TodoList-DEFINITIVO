import React from "react";
import { Task } from "./ Task";
import Proptypes from "prop-types";

//include images into your bundle
export const Box = () => {
	const [newTask, setNewTask] = useState("");
	const [listOfTasks, setListOfTasks]= useState([
		"Make the Bed",
		"Wash my Hands",
		"Eat",
		"Walk the dog",
	]);

return (
	<div className= "container w-100 d-flex flex-column">
		<InputRow
			text= "what needs to be done"
			value={newTask}
			setter= {setNewTask}
			setterList={setListOfTasks}
		/>
		{listOfTasks.length === 0 ? (
			<p> {'No tasks, add a task'}</p>
		) : (
			<List list={listOfTasks} setterList= {setListOfTasks} />
		)}
		<Counter list={listOfTasks} />
		</div>
	);
};

			


