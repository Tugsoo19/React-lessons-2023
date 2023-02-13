

import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";


export default function TimersDashboard() {
  const URL = "http://localhost:8080/timers";



  // useEffect(() => {
  //   fetchTimersData();
  // }, []);

  // async function fetchTimersData() {
  //   const FETCHED_DATA = await fetch(URL);
  //   const FETCHED_JSON = await FETCHED_DATA.json();
  //   console.log(FETCHED_JSON);
  //   setTimers({ timers: FETCHED_JSON.data });
  // }



  return (
    <div>
      <h1>Timers</h1>

      <div>
        <EditableTimerList
        // onFormSubmit={handleEditFormSubmit}
        // onTrashClick={handleTrashClick}
        // onStartClick={handleStartClick}
        // onStopClick={handleStopClick}
        />
        <ToggleableTimerForm />
      </div>

    </div>
  );
}
