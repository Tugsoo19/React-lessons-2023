

import { useState } from 'react';
import userList from '../data/data';


export default function User() {

    const [index, setIndex] = useState(0)

    // '' state zarlah

    const [memo, setMemo ] = useState(userList[index].name)

    let user = userList[index];
    return (
        <div>
            <button onClick={() => {
                //index = index + 1
                setIndex(index + 1)
                setMemo(userList[index + 1].name)
            }}>Next</button>
            <p>{user.name}</p>
            <input value={memo}/>
        </div>
    );
}