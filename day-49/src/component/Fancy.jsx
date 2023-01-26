import { useState } from 'react';
import Counter from './Counter';

function Fancy() {
    const [isFancy, setIsFancy] = useState(false)

    return (
        <div>
            <h1>Day-49</h1>
            <Counter isFancy={isFancy} />
            <label>
                <input type='checkbox'
                    checked={isFancy}
                    onChange={(e) => {
                        setIsFancy(e.target.checked)
                    }}
                />
                Use fancy styling

            </label>

        </div>
    );
}

export default Fancy;
