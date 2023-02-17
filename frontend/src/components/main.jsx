import { Link } from "react-router-dom";
import "../styles/main.css";
import logo from "../assets/wordbrand.svg";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "react-three-fiber";
import { Suspense, useState } from "react";
import DragAndDrop from "./drag-and-drop/dragAndDrop";
import FetchToImgList from "./fetchToImgList";
import img1 from "../assets/image_22.png";

function Cloud(props) {
  const boxRef = useRef();
  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
  });
  const group = useRef();
  const { nodes, materials } = useGLTF("/cloud.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={boxRef} rotation-x={Math.PI * 0.5} rotation-y={Math.PI * 0.5}>
        <mesh
          geometry={nodes.Cloud_0.geometry}
          material={materials.CloudMaterial}
          scale={0.86}
        />
      </group>
    </group>
  );
}

export default function Main() {
  const modelRef = useRef(null);
  const creditRef = useRef(null);
  const uploadRef = useRef(null);

  const handleScroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const [isShown, setIsshown] = useState(false);
  const handleClick = (event) => {
    setIsshown((current) => !current);
  };
  return (
    <div className="wrapper-main">
      <div className="breadcrumb-wrapper">
        <div className="breadcrumb">
          <div className="test-flex">
            <p className="models" onClick={()=> handleScroll(modelRef)}>MODELS</p>
            <p className="uploads" onClick={()=> handleScroll(uploadRef)}>UPLOAD</p>
            <img src={logo} alt="" />
            <p className="credit" onClick={()=> handleScroll(creditRef)}>CREDIT</p>
            <Link to='/User'><p className="users">USERS</p></Link>
          </div>
        </div>
      </div>
      <div className="hero-main">
        <div className="iframe-wrapper-hero-main">
          <iframe
            title="Investigation Board"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/
            04eca574acd34c68b0aa6db00e77583e/embed?autospin=1&autostart=1"
          >
            {" "}
          </iframe>
        </div>
        <div className="text-wrapper-hero-main">
          <p className="header-text-main">Lorem ipsum dolor</p>
          <p className="text-sub-main">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Fermentum leo vel orci porta non pulvinar
            neque. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl
            rhoncus. Vitae et leo duis ut diam quam nulla. Est placerat in
            egestas erat. Vel pharetra vel turpis nunc eget lorem.
          </p>
        </div>
      </div>
      <div className="hero-section-wrapper">
        <div className="sub-hero-section-main">
          <p className="header-sub-hero-main" ref={modelRef}>MODELS</p>
        </div>
        <div className="listimgcontainer">
          <Link to={'/Display'}><FetchToImgList img={img1} /></Link>
          <Link to={'/Display'}><FetchToImgList img={img1} /></Link>
          <Link to={'/Display'}><FetchToImgList img={img1} /></Link>
          <Link to={'/Display'}><FetchToImgList img={img1} /></Link>
          <Link to={'/Display'}><FetchToImgList img={img1} /></Link>
          <Link to={'/Display'}><FetchToImgList img={img1} /></Link>
          <Link to={'/Display'}><FetchToImgList img={img1} /></Link>
          <Link to={'/Display'}><FetchToImgList img={img1} /></Link>
          <Link to={'/Display'}><FetchToImgList img={img1} /></Link>

        </div>
      </div>
      <div className="credit-header">
        <p className="credit-header-text" ref={creditRef}>CREDIT</p>
      </div>
      <div className="credit-wrapper">
        <div className="sub-text-wrapper-credit">
          <p>
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Fermentum leo vel orci porta non pulvinar
            neque. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl
            rhoncus. Vitae et leo duis ut diam quam nulla. Est placerat in
            egestas erat. Vel pharetra vel turpis nunc eget lorem.
          </p>
        </div>
        <div className="iframe-credit-wrapper">
          <iframe
            title="Rubber Duck in a Drink"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/3cb4cfaf1d284b9a9d9e156068899dc6/embed?autospin=1&autostart=1"
          >
            {" "}
          </iframe>
        </div>
      </div>
      <div className="upload-header">
        <p className="upload-header-text" ref={uploadRef}>UPLOAD</p>
      </div>
      <div className="Upload-wrapper">
        <div className="uploadCanvas-wrapper">
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
      <div className="footer-wrapper">
        <div className="footer-text-container-main">
          <p className="git">GITHUB</p>
          <p className="mail">EMAIL</p>
          <p className="wordbrand">©SKYREF</p>
        </div>
      </div>
    </div>
  );
}
