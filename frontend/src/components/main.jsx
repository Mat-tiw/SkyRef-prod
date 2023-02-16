import { Link } from 'react-router-dom'
import '../styles/main.css';
import logo from "../assets/wordbrand.svg"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas,useFrame } from 'react-three-fiber'
import { Suspense,useState } from 'react';
import DragAndDrop from './drag-and-drop/dragAndDrop';

function Cloud(props) {
    const boxRef = useRef();

    useFrame(() => {
      boxRef.current.rotation.y += 0.01;
    });
    const group = useRef();
    const { nodes, materials } = useGLTF('/cloud.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <group ref={boxRef} rotation-x={Math.PI * 0.5} rotation-y={Math.PI * 0.5}>
                <mesh geometry={nodes.Cloud_0.geometry} material={materials.CloudMaterial} scale={0.86} />
            </group>
        </group>
    )
}

const Main = () => {
    const [isShown,setIsshown] = useState(false);
    const handleClick = event => {
        setIsshown(current => !current);
    }
    return (
        <div className='all'>
            <header className="main-header">
                <div className="item">
                    <div className="item" id='item1'><a>models</a></div>
                    <div><img src={logo} /></div>
                    <div className="item" id='item2'><a>credits</a></div>
                </div>
            </header>
            <main className='main-aside'>
                <div className='photo-one'>
                    <div class="sketchfab-embed-wrapper"> <iframe title="(FREE) Isometric Cafe" frameborder="0"
                        allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                        allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport
                        execution-while-not-rendered web-share width="699" height="412.34"
                        src="https://sketchfab.com/models/a945f20219c44e94a77cf76929368470/embed?autostart=1">
                    </iframe>
                    </div>
                </div>
                <div className='taxt-all'>
                    <h1 className='text1'>Lorem ipsum dolor</h1>
                    <p className='text2'>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Fermentum leo vel orci porta non pulvinar neque. Nisi quis
                        eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Vitae et leo duis ut diam quam nulla.
                        Est placerat in egestas erat. Vel pharetra vel turpis nunc eget lorem.</p>
                </div>
            </main>
            <main className='main-aside2'>
                <div className='text-model'>
                    <h1>MODELS</h1>
                </div>
                <div className='photo-flex'>
                    <div className='row' >
                        <div className='photo'>
                            <Link to="/Display">
                                <div className='photo'><img src={require('../assets/image 13.png')} width="85%" /></div></Link>
                            <div className='photo'><img src={require('../assets/image 12.png')} width="85%" /></div>
                            <div className='photo'><img src={require('../assets/image 14.png')} width="85%" /></div>
                        </div >
                        <div className='photo'>
                            <div className='photo'><img src={require('../assets/image 10.png')} width="85%" /></div>
                            <div className='photo'><img src={require('../assets/image 16.png')} width="85%" /></div>
                            <div className='photo'><img src={require('../assets/image 17.png')} width="85%" /></div>
                        </div>
                        <div className='photo'>
                            <div className='photo'><img src={require('../assets/image 23.png')} width="85%" /></div>
                            <div className='photo'><img src={require('../assets/image 22.png')} width="85%" /></div>
                            <div className='photo'><img src={require('../assets/image 19.png')} width="85%%" /></div>
                        </div>

                    </div>
                </div>

            </main>
            <main>
                <div>
                    <div className='text-credit'><h1>CREDITS</h1></div>
                </div>
                <div className='main-credit'>
                    <p className='text-credit-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non pulvinar neque. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Vitae et leo duis ut diam quam nulla. Est placerat in egestas erat. Vel pharetra vel turpis nunc eget lorem.
                    </p>
                    <div className='photo-two'>
                        <div class="sketchfab-embed-wrapper"> <iframe title="Rubber Duck in a Drink" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/3cb4cfaf1d284b9a9d9e156068899dc6/embed?autostart=1&camera=0"> </iframe> </div>
                    </div>
                </div>
            </main>
            <div className='Upload-wrapper'>
                <div className='text-Upload'><h1>UPLOAD</h1></div>
                <div className='uploadCanvas-wrapper'>
                    <Canvas onClick={handleClick}>
                        <Suspense fallback={null}>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[1, 1, 1]} />
                            <Cloud />
                        </Suspense>
                    </Canvas>
                    {isShown && (
                        <div>
                            <DragAndDrop />
                        </div>
                    )}
                </div>
            </div>
            <footer className='footer-main'>
                <div className='footer-flex'>
                    <div className='footer-text'>
                        <div className='footer-text'><a>Github</a></div>
                        <div className='footer-text'><a>Email</a></div>
                        <div className='footer-text'><a>©SKYREF</a></div>
                    </div>
                </div>
            </footer>
        </div>

    );

}
export default Main