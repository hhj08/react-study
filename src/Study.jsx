import { Link } from 'react-router-dom'

export default function Study() {
    return (
        <div>
            <h2>React Study</h2>
            <ul>
                <li><Link to="/props">props</Link></li>
            </ul>
        </div>
    )
}