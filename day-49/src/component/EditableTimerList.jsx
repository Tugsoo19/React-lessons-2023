import EditableTimer from "./EditableTimer";

export default function EditableTimerList({ timers }) {
    const timerList = timers.map((timer, index) => (
        <EditableTimer
            key={index}
            id={timer.id}
            title={timer.title}
            project={timer.project}
            elapsed={timer.elapsed}
            runningSince={timer.runningSince}
        />
    ));

    return <div>{timerList}</div>;
}
