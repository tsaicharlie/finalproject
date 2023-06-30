import Experience from "../Experience.js"
import * as THREE from 'three'
import GSAP from 'gsap'
export default class Floor {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;


        this.setFloor()


    }

    setFloor() {
        this.geometry = new THREE.PlaneGeometry(100, 100)
        this.matrial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            side: THREE.BackSide
        })
        this.plane = new THREE.Mesh(this.geometry, this.matrial)
        this.plane.receiveShadow=true
        this.plane.castShadow=true
        this.scene.add(this.plane)
        this.plane.rotation.x = Math.PI / 2
        this.plane.position.y = -0.4
        
    }

    resize() {

    }
    update() {

    }
}