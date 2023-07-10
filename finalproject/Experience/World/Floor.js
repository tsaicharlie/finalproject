import Experience from "../Experience.js"
import * as THREE from 'three'
import GSAP from 'gsap'
export default class Floor {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;


        this.setFloor()
        this.setCircles()

    }

    setFloor() {
        this.geometry = new THREE.PlaneGeometry(100, 100)
        this.matrial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            side: THREE.BackSide
        })
        this.plane = new THREE.Mesh(this.geometry, this.matrial)
        this.plane.receiveShadow = true
        this.plane.castShadow = true
        this.scene.add(this.plane)
        this.plane.rotation.x = Math.PI / 2
        this.plane.position.y = -6

    }
    setCircles() {
        const geometry = new THREE.CircleGeometry(5, 64);
        const material = new THREE.MeshStandardMaterial({ color: 0xe5a1aa });
        const material2 = new THREE.MeshStandardMaterial({ color: 0x8080ff });
        const material3 = new THREE.MeshStandardMaterial({ color: 0x80ff80 });
        this.circle = new THREE.Mesh(geometry, material); 
        this.circle2 = new THREE.Mesh(geometry, material2); 
        this.circle3 = new THREE.Mesh(geometry, material3); 
        
        this.circle.position.y = -5.9
        this.circle.position.z = -17
        // this.circle.position.x = 0
        this.circle2.position.y = -5.8
        this.circle3.position.y = -5.7
        this.circle.scale.set(0,0,0) 
        this.circle2.scale.set(0,0,0) 
        this.circle3.scale.set(0,0,0) 
        this.circle.rotation.x=this.circle2.rotation.x=this.circle3.rotation.x=-Math.PI/2
        this.circle.receiveShadow=this.circle2.receiveShadow=this.circle3.receiveShadow=true

        this.scene.add(this.circle)
        this.scene.add(this.circle2)
        this.scene.add(this.circle3)
    }

    resize() {

    }
    update() {

    }
}