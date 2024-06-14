import Icon from "../Icon/icon";
import './Card.css';
function Card({ player })
{
    let icon = <Icon></Icon>;
    if (player == 'X')
    {
        icon = <Icon name='cross'></Icon>;
    }
    else if (player == 'O')
    {
        icon = <Icon name='circle'></Icon>;
    }
    return (
        <div className="card">
            {icon}
        </div>
    );
}
export default Card;