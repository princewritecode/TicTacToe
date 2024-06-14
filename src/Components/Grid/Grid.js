import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css';
function Grid({ noOfCards })
{

    const [board, setBoard] = useState(Array(noOfCards).fill(''));

    return (
        <div className="grid">

            {board.map((el, idx) => <Card key={idx}>

            </Card>)}

        </div>
    );

}

export default Grid;