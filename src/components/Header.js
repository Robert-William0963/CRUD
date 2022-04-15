import { Link } from "react-router-dom";
import Back from '../image/back-button.svg';
import './HeaderMain.css';
import './Header.css';

export default () => {
    return (
        <header>
            <div className="container">
                <Link to="/"><img src={Back} style={{width: '50px'}}/></Link>
            </div>
        </header>
    )
}