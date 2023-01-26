import { useEffect, useState } from "react";

export default function Exercises() {

    // const [numbers, setNumbers] = useState([])
    let array = [1, 2, 3, 4, 1]

    // useEffect(() => {

    //     console.log(findNumberCount(array));
    //     console.log(numbers);
    // }, [])

    function filterNumbers(arr, number) {
        return arr.filter(a => a === number)
    }

    function findNumberCount(arr) {
        let newArr = [];
        for (let i = 0; i < 10; i++) {
            const result = filterNumbers(arr, i);

            console.log(i, '-- ', result.length);
            const resultObject = {
                i: result.length
            }
            // setNumbers([...numbers, resultObject])
            newArr = [...newArr, resultObject]
        }
        return newArr;
    }
    const numbers = findNumberCount(array);
    console.log(numbers);

    return (
        <div>
            <h1>Exercises</h1>
            {
                numbers && numbers.map((n, index) => {
                    return (
                        <div key={index}>
                            <p>
                                {index} {n.i}{" "}
                            </p>
                        </div>
                    )
                })
            }

        </div>
    )
}