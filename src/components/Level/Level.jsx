// Level.jsx

export default function Level({setLevel}) {
    const EASY = "easy"
    const MED = "medium"
    const HARD = "hard"

    function Button ({level, setLevel}) {
        return (
            <button
                type="button"
                onClick={()=> setLevel(level)}
            >
                {level}
            </button>
        )
    }


    return (
        <div className="level">
            <p>Choose Your level</p>
            <div className="button-box">
                <Button
                    level={EASY}
                    setLevel={setLevel}
                />
                <Button
                    level={MED}
                    setLevel={setLevel}
                />
                <Button
                    level={HARD}
                    setLevel={setLevel}
                />
            </div>
            

        </div>
    )

    

}