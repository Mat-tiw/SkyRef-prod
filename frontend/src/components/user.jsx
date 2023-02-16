import logos from "../assets/wordbrand.svg";
import mable from "../assets/mable.jpg";
import "../styles/user.css";
import { useState } from "react";
import UserModels from "./usermodels";
import UserLike from "./userlike";

export default function User(){
    const [shownModels, setshownModels] = useState(true);
    return (
        <><div className="wrapperWhole" >
            <div className="img1">
                <div><img src={logos} style={{ width: 100 }} alt=""/></div>
            </div>
            <form>
                <div className="card1">
                    <div></div>
                    <div className="img2">
                        <img src={mable} alt=""/>
                    </div>

                    <div className="name">
                        <h2>UserName</h2>
                    </div>

                    <div className="button1">
                        <div className="fallowers1"><p>Fallowers</p></div>
                        <div className="fallowers2"><p>Fallowing</p></div>
                    </div>

                </div>

                <div className="button2">
                    <div onClick={()=> {setshownModels(true)}} className={`models-react-active ${shownModels ? 'models-react-active-ON' : ''}`} >
                        <p className="models">MODELS</p>
                    </div>
                    <div onClick={()=>{setshownModels(false)}} className={`likes-react-active ${shownModels ? '':'likes-react-active-ON'}`} >
                        <p className="likes">LIKES</p>
                    </div>
                </div>
                    <div className="to-display-user-click">
                        {shownModels === true && <UserModels />}
                        {shownModels === false && <UserLike />}
                    </div>
            </form>
        </div>
        </>
    )
}