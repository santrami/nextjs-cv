import React from 'react'
import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
export default function Camera() {
    const vec = new THREE.Vector3()
    const cameraRef = useRef()

    useFrame((state) => {            
            state.camera.position.lerp(vec.set(0,1,3), 0.003)
            state.camera.rotation.y=0.01
            state.camera.updateProjectionMatrix()
    })

    return (
        <mesh>
            <PerspectiveCamera makeDefault position={[5,0,-12]} ref={cameraRef} fov={75} />

        </mesh>
    )
}
