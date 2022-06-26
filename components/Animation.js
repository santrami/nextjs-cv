import { useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/three'
import { useFrame,  } from '@react-three/fiber';
import * as TRHEE from 'three'
import { Html } from '@react-three/drei';

export default function Animation() {
    const boton1 = useRef();
    const boton2 = useRef();
    const boton3 = useRef();
    const boton4 = useRef();
    const [active, setActive] = useState(false)
    const [clicked, setClicked] = useState(false)
    const[opacity, setOpacity] = useState(0)
    const { scale } = useSpring({ scale: active ? 1.5 : 0.5 })
    const vec = new TRHEE.Vector3()

    /* useFrame(({clock})=>{
        const time= clock.getElapsedTime()
        prueba.current.rotation.x=time;
    }) */
    const {item, setItem}=useState(false)
    useFrame(state => {
        const el=document.createElement('div');
        if (clicked) {
            
            state.camera.lookAt(boton1.current.position)
            state.camera.position.lerp(vec.set(1, 1, 3), 0.08)
            state.camera.updateProjectionMatrix()     
            
            
        } else {
            state.camera.lookAt(boton1.current.position)
            state.camera.position.lerp(vec.set(0, 2,10), 0.08)
            state.camera.updateProjectionMatrix()
           
        }
        
    })
    function Box() {  
        return (
          <mesh  scale={1.5} >
            <circleGeometry args={[1,32,32]} />
            <meshStandardMaterial transparent={true} color={"#ffff00"} opacity={opacity}/>
            <Html        
              distanceFactor={1.5}
              position={[0, 0, 0.51]}       
            >
              <span>Size</span>
            </Html>
          </mesh>
        )
      }

      const handleClick=()=>{
        setClicked(!clicked) 
        setTimeout(() => {
            setOpacity(clicked ? 0 : 1)
        }, 500);
        /* if(clicked){
            setOpacity(0)
        }else{
            setTimeout(() => {
                setOpacity(1)
            }, 1000);
        } */
      }
    return (
        <>  
            <Box/>      
            <animated.mesh ref={boton1} onClick={handleClick}>
                <boxGeometry />
                <meshPhongMaterial color="royalblue" />
            </animated.mesh>
            <animated.mesh position={[-1,1, 2]} scale={scale} onClick={() => setActive(!active)} ref={boton2}>
                <boxGeometry />
                <meshPhongMaterial color="royalblue" />
            </animated.mesh>
            <animated.mesh position={[1, 1, 2]} scale={scale} onClick={() => setActive(!active)} ref={boton3}>
                <boxGeometry />
                <meshPhongMaterial color="royalblue" />
            </animated.mesh>
            <animated.mesh position={[3, 0, 1]} scale={scale} onClick={() => setActive(!active)} ref={boton4}>
                <boxGeometry />
                <meshPhongMaterial color="royalblue" />
            </animated.mesh>
            <animated.mesh position={[2, 0, -1]} scale={scale} onClick={() => setActive(!active)} ref={boton4}>
                <boxGeometry />
                <meshPhongMaterial color="royalblue" />
            </animated.mesh>
        </>
    )
}
