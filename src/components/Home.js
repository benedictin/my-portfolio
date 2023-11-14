import Navbar from "./Navbar"
import logo from "../assets/developer-dark.3f07bd13.svg"
import '../assets/icons/bootstrap-icons/bootstrap-icons.css'
import '../styles/Home.css'
import { Link } from "react-router-dom"




export default function Home(){
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="texte" id="about">
                    <h1>Bienvenu</h1>
                    <h3>Je m'appelle Ezechiel Punga et je suis un développeur <br/> front-end passionné basé à kinshasa.</h3>
                    <div className="download"> 
                        <Link className="download-button">Telecharger mon cv</Link>
                    </div>
                </div>
                <div>
                    <img src={logo} alt="logo" className="logo"/>
                </div>
            </div>
            <div className="Wrapper">
                <h3 className="wrapper-title">Competences Techniques</h3>
            </div>
            <hr className="separator"/>
            <div className="skills">
                <p>HTML</p>
                <div className="containe">
                <div className="skill html">90%</div>
                </div>

                <p>CSS</p>
                <div className="containe">
                <div className="skill css">80%</div>
                </div>

                <p>JavaScript</p>
                <div className="containe">
                <div className="skill js">65%</div>
                </div>
            </div>
            <div className="skills">
                <p>Framwork et Bibliotheques</p>
                <p>React js</p>
                <div className="containe">
                <div className="skill react">70%</div>
                </div>
            </div>
            <hr className="separator"/>
            <div className="skills">
                <h3 className="wrapper-title">Suivez-moi</h3>
                <div className="icons">
                    <Link to="https://web.facebook.com/ezechiel.punga" className="navigation-link"><i class="bi bi-facebook"></i></Link>
                    <Link to="https://github.com/benedictin" className="navigation-link"><i class="bi bi-github"></i></Link>
                    <Link to="https://www.linkedin.com/in/ezechiel-punga-999814296/" className="navigation-link"><i class="bi bi-linkedin"></i></Link>
                    
                </div>
            </div>
        </div>
    )
}