import HeaderTemplate from './headerTemplate'
import { useRef, Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas} from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import '../styles/display.css'

export function Shoe(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF('/shoe.glb')
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
        <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
        <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
        <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
        <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
        <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
        <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
        <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
      </group>
    )
  }
  

export default  function Display() {
    return (<>
      <HeaderTemplate />
      < div className='canvasHolder'>
      <Canvas >
        <ambientLight intensity={0.5} />
        <pointLight position={[1,1,1]}/>
        <Suspense fallback={null}>
          <Shoe />
        </Suspense>
        <OrbitControls/>
      </Canvas>
      </div>
    </>
    );
  }