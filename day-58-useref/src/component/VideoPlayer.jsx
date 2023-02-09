import { useState } from "react";
import { useRef } from "react";


export default function VideoPlayer() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const handleClick = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            videoRef.current.play()

        } else {
            videoRef.current.pause()
        }
    }

    return (
        <div>

            <video
                width="250"
                ref={videoRef}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video>
            <br />
            <button onClick={handleClick}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    )
}