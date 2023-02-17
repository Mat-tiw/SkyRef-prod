import "../styles/login.css";
import logos from "../assets/Wordbrand.png";
import img from '../assets/Login.png'
import { createGlobalStyle } from 'styled-components'
import {Link} from 'react-router-dom'
import styles from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${img}); 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`
const Removetext = styles(Link)`
text-decoration: none;
color: aliceblue;
`;

export default function Login() {
    return (
        <div>
            <GlobalStyle/>
                <div className="card">

                    <div className="app-logo">
                        <div><img src={logos} style={{ width: 110 }} /></div>
                    </div>
                    <div className="login">
                        <p>LOGIN</p>
                    </div>

                    <form>
                        <div className="input" id="txt">
                            <input type="text" placeholder="Username" />
                            <i></i>
                        </div>
                        <div className="input" id="txt">
                            <input type="password" placeholder="Password" />
                            <i></i>
                        </div>

                        <label>
                            <div className="checkbox">
                                <input type="checkbox" id="box" className="toCheck" /> I have read the agreement
                            </div>
                        </label>

                        <div className="Newtosky">
                            <p>New to SKYREF?<Removetext/><Link to={'/Register'}>Register</Link> here</p>
                        </div>

                        <div className="containerbutton" id="btn-button">
                            <Link to="/Main" ><submid>
                                <button className="toAuth">Login</button>
                            </submid></Link>
                        </div>
                    </form>
                </div>
        </div>
    )
}
