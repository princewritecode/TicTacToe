import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css';
import isWinner from "../../helpers/checkWinner";
function Grid({ noOfCards })
{

    const [board, setBoard] = useState(Array(noOfCards).fill(''));
    const [winner, setWinner] = useState(null);
    const [turn, setTurn] = useState(true);

    function play(index)
    {
        if (turn == true)
        {
            board[index] = 'O';
        }
        else
        {
            board[index] = 'X';
        }
        const isWin = isWinner(board, turn ? 'O' : 'X');

        if (isWin)
        {
            setWinner(isWin);
        }

        setBoard([...board]);
        setTurn(!turn);


    }

    function reset()
    {
        setTurn(true);
        setWinner(null);
        setBoard(Array(noOfCards).fill(''));
    }
    return (
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                        <h1 className="turn-hightlight">Winner is {winner}</h1>
                        <button className="reset" onClick={reset}>Reset Game
                        </button>
                    </>
                )
            }
            <h1 className="turn-hightlight">Current Turn is{(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
                {board.map((el, idx) => <Card gameEnd={winner ? true : false} key={idx} onPlay={play} player={el} index={idx}>
                </Card>)}
            </div></div>
    );
}

export default Grid;