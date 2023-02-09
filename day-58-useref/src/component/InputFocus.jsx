const { useRef } = require("react");

function InputFocus() {
    const inputUseref = useRef(null);

    const handleFocus = () => {
        inputUseref.current.focus();
    }

    const handleBlur = () => {
        inputUseref.current.blur();
    }

    return (
        <div>
            <input type="text" ref={inputUseref} />
            <button onClick={handleFocus}>Focus</button>
            <button onClick={handleBlur}>Blur</button>
        </div>
    )
}

export default InputFocus