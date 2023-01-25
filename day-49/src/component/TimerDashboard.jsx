import { useEffect } from "react";
import { useState } from "react";
import timerData from "../data/data"
import EditableTimerList from "./EditableTimerList";
import Timer from "./Timer";
import TimerForm from "./TimerForm";


export default function TimerDashboard() {
    console.log(timerData);
    const [timers, setTimers] = useState({ timers: [] });


    useEffect(() => {
        setInterval(() => setTimers({ timers: timerData }), 1000);

    }, [])

    function handleStartClick(timerId) {
        const now = Date.now()

        setTimers({
            timers: timers.timers.map(timer => {
                if (timer.id === timerId) {
                    timer.runningSince = now
                    return timer;
                } else {
                    return timer;
                }
            })
        })
    }

    function handleTrashClick(timerId) {
        deleteTimer(timerId)
    }

    function deleteTimer(timerId) {
        setTimers({
            timers: timers.timers.filter((t) => t.id !== timerId)
        })
    }



    return (
        <div>
            <h1>Timers</h1>

            {
                timers.timers && <div>
                    <EditableTimerList
                        timers={timers.timers}
                        onTrashClick={handleTrashClick}
                        onStartClick={handleStartClick} />
                </div>

            }
        </div>

    )
}