import { Link } from 'react-router-dom'
import './Study.css';

export default function Study() {
    return (
        <div>
            <h2>React Study</h2>
            <ul>
                <li><Link to="/props">props</Link></li>
                <li><Link to="/children">children</Link></li>
            </ul>
        </div>
    )
}