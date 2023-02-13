import { useContext } from "react";
import { TimerContext } from "../context/TimerContext.js";
import EditableTimer from "./EditableTimer.jsx";

export default function EditableTimerList() {

    const { timers, setTimers } = useContext(TimerContext);
    const timerList = timers.timers.map((timer, index) =>
        <EditableTimer
            key={index}
            id={timer.id}
            title={timer.title}
            project={timer.project}
            elapsed={timer.elapsed}
            runningSince={timer.runningSince}
        // onFormSubmit={onFormSubmit}
        // onStartClick={onStartClick}
        // onStopClick={onStopClick}
        // onTrashClick={onTrashClick}
        />)

    return (
        <div>
            {timerList}
        </div>
    )
}