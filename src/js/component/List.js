import React from "react";
import { Task } from "./Task";
import PropTypes from "prop-types";

export const List = (props) => {
    return (
        <div>
            {props.list.map((task, index) => {
                return (
                    <task 
                        task= {task}
                        key= {index}
                        setterlist= {props.setterList}
                        list={props.list}
                    />
                );
            })}
        </div>
    );
};

List.PropTypes = {
    setterList: PropTypes.func,
    list: PropTypes.string,
};

