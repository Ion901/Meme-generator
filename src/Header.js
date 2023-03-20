
import imaginea from './Troll Face.png';

export default function Header() {
    return (
        <header>
            <nav className="nav-ctn">
                <div className='nav-name'>
                <img src={imaginea} className="nav-logo" alt="imaginea lispeste"></img>
                <h1>MemeGenerator</h1>
                </div>
                <div className='nav-par'>
                    <ul>
                        <li>React Course - Project 3</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}