import "../styles/register.css";
import logos from "../assets/Wordbrand.png";
import img from '../assets/Login.png'
import { createGlobalStyle } from 'styled-components'
import {Link} from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${img}); 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`

export default function Register(){
    return (
        <div>
            <GlobalStyle/>
                <div className="card">
                    <div className="cover">
                    <div className="app-logo">
                        <div><img src={logos} style={{ width: 110 }} /></div>
                    </div>
                    <div className="login">
                        <p>REGISTER</p>
                    </div>

                    <form className="regi-tomove">
                        <div className="input" id="txt">
                            <input type="text" placeholder="Username" />
                            <i></i>
                        </div>
                        <div className="input" id="txt">
                            <input type="password" placeholder="Password" />
                            <i></i>
                        </div>
                        <div className="input" id="txt">
                            <input type="password" placeholder="Re-enter password" />
                            <i></i>
                        </div>
                        
                        <div className="Newtosky-toremove">
                            <p>New to SKYREF? Register here</p>
                        </div>

                        <div className="containerbutton" id="btn-button">
                            <Link to="/"><submit>
                                <button>Register</button>
                            </submit></Link>
                            
                        </div>
                    </form>
                    </div>
                </div>
        </div>
    )
}