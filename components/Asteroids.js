import { Sphere, Cloud, MeshDistortMaterial, Sparkles, PointMaterial } from '@react-three/drei'
import { RepeatWrapping, TextureLoader } from 'three'
import * as THREE from 'three'
import { useLoader, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min
}
export default function Asteroids({ args, position }) {
    const [image, normal, asteroide, rings] = useLoader(TextureLoader, ["/mercury-normal-map.jpg", '/planet-texture.jpg', '/asteroide.png', '/rings.jpg'])

    rings.wrapS = THREE.RepeatWrapping;
    rings.wrapT = THREE.RepeatWrapping;
    rings.offset.set(1, 1);
    rings.repeat.set(10, 1);
    rings.rotation = 90
    const a = new THREE.Vector2(0.1, 10);
    rings.transformUv(a)

    const geometry = new THREE.RingBufferGeometry(3, 5, 128);
    var pos = geometry.attributes.position;
    var v3 = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
        v3.fromBufferAttribute(pos, i);
        geometry.attributes.uv.setXY(i, v3.length() < 4 ? 0 : 1, -10);
    }

    const basicRef=useRef()
    const asteRef= useRef()
    useFrame(()=>{
        basicRef.current.rotation.z-=0.0005
        asteRef.current.rotation.z-=0.0005
    })

    return (
        <group>
            <mesh ref={basicRef} scale={0.38}  castShadow receiveShadow geometry={geometry} rotation={[Math.PI / 2, 0, 0]} >

                {/* <ringGeometry args={[1, 1.5,25]} /> */}
                <meshStandardMaterial transparent={true} metalness={0.4} roughness={0.4} side={2} map={rings} opacity={0.7} />
            </mesh>



            <mesh castShadow receiveShadow ref={asteRef} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]} >
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001, 0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200, 500)]} />
                </points>


                {/* <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points>
                <points>
                    <PointMaterial transparent={true} map={asteroide} size={randomNumber(0.001,0.007)} />
                    <circleGeometry args={[randomNumber(1.2, 1.9), randomNumber(200,500)]} />
                </points> */}


            </mesh>
        </group>

    )
}