import React from "react";
import PropTypes from "prop-types";

export const Task = (props) => {
    function deleteTask(e) {
        props.setterList(prevList) => prevList.filter(function (task, index) {
            if()
        
        }));
    }
    return (
        <li className= "d-flex justify-content-between doIt box">
            {props.Task}
            <span className= "delete" onClick={deleteTask}>
                x
            </span>
        </li>
    );
};

Task.PropTypes = {
    task: PropTypes.string,
    setterList: PropTypes.func,
    list: PropTypes.string
};