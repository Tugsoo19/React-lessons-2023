import { v4 as uuidv4 } from 'uuid'

function renderElepasedString(elapsed, runningSince) {
    let totalElapsed = elapsed;
    if (runningSince) {
        totalElapsed += Date.now() - runningSince;
    }
    return millisecondstoHuman(totalElapsed);
}

function millisecondstoHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    console.log(seconds, minutes, hours);
    return [pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2)].join(":")
}

function pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) {
        padded = `0${padded}`
    }
    return padded;
}

function newTimer(attrs = {}) {
    console.log(attrs);
    return {
        title: attrs.title || "Timer",
        project: attrs.project || "Project",
        id: uuidv4(), // eslint-disable-line no-undef
        elapsed: 0,
    }
}

export { renderElepasedString, newTimer }