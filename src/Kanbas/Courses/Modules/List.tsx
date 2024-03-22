import React, { useState } from "react";
// import "src/Labs/a3/Classes/index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";


function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();
    const modulesList = modules.filter((module) => module.course === courseId);
    // const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    // const [moduleList, setModuleList] = useState<any[]>(modules);
    // const [module, setModule] = useState({
    //     name: "New Module",
    //     description: "New Description",
    //     course: courseId,
    //     _id: ""
    // });
    // const addModule = (module: any) => {
    //     const newModule = {
    //         ...module,
    //         _id: new Date().getTime().toString()
    //     };
    //     const newModuleList = [newModule, ...moduleList];
    //     setModuleList(newModuleList);
    // };
    // const deleteModule = (moduleId: string) => {
    //     const newModuleList = moduleList.filter(
    //         (module) => module._id !== moduleId);
    //     setModuleList(newModuleList);
    // };

    // const updateModule = () => {
    //     const newModuleList = moduleList.map((m) => {
    //         if (m._id === module._id) {
    //             return module;
    //         } else {
    //             return m;
    //         }
    //     });
    //     setModuleList(newModuleList);
    // };



    return (<ul className="list-group">
        <li className="list-group-item">
            <button
                onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                Add
            </button>
            <button
                onClick={() => dispatch(updateModule(module))}>
                Update
            </button>
            <input
                value={module.name}
                onChange={(e) =>
                    dispatch(setModule({ ...module, name: e.target.value }))
                } />
            <textarea
                value={module.description}
                onChange={(e) =>
                    dispatch(setModule({ ...module, description: e.target.value }))
                } />
        </li>
        {moduleList
            .filter((module) => module.course === courseId)
            .map((module, index) => (
                <li key={index} className="list-group-item">
                    <button
                        onClick={() => dispatch(setModule(module))}>
                        Edit
                    </button>
                    <button
                        onClick={() => dispatch(deleteModule(module._id))}>
                        Delete
                    </button>
                    <h3>{module.name}</h3>
                    <p>{module.description}</p>
                </li>
            ))}
    </ul>

    );
}
export default ModuleList;


