import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TimerActionButton from './TimerActionButton';
import { useState } from 'react';
import { renderElepasedString } from './Helpers';

export default function Timer({ title, project, elapsed, runningSince, runningTime }) {
    const [timerIsRunning, setTimerIsRunning] = useState(false)
    const timer = renderElepasedString(elapsed, runningSince)
    console.log(timer);
    // const [runningInterval, setRunningInterval] = useState(0);
    const [startTime, setStartTime] = useState(null)
    const [now, setNow] = useState(null)

    // setRunningInterval(() => { setRunningInterval(runningInterval + 1) }, 1000)

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now())

        setInterval(() => {
            setNow(Date.now())
        }, 10);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <Container maxWidth="sm">
            <Card sx={{
                maxWidth: 345,
                margin: '0 auto',
                marginBottom: 2
            }}>
                <Typography sx={{ fontSize: 28 }} color='text.secondary'>{title}</Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>{project}</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
                    <h1>{runningTime}</h1>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <br />
                    <h1>{timer}</h1>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: 2,
                }}>
                    <DeleteIcon />
                    <ModeEditIcon />

                </Box>
                <TimerActionButton isTimerRunning={timerIsRunning}
                    onStartClick={() => {

                        setTimerIsRunning(true)
                        handleStart()
                        console.log('on start click');
                    }}
                    onStopClick={() => {
                        setTimerIsRunning(false)
                        console.log('on stop click');
                    }} />

            </Card>

        </Container>
    )
}