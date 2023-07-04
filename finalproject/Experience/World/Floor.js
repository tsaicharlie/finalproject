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
        this.plane.position.y = -0.4

    }
    setCircles() {
        const geometry = new THREE.CircleGeometry(5, 32);
        const material = new THREE.MeshStandardMaterial({ color: 0xe5a1aa });
        const materia2 = new THREE.MeshStandardMaterial({ color: 0x8080ff });
        const materia3 = new THREE.MeshStandardMaterial({ color: 0x80ff80 });
        const circle = new THREE.Mesh(geometry, material); scene.add(circle);
        const circle2 = new THREE.Mesh(geometry, material2); scene.add(circle);
        const circle3 = new THREE.Mesh(geometry, material3); scene.add(circle);
        
        this.circle.position.y = -0.39
        this.circle2.position.y = -0.38
        this.circle3.position.y = -0.37
        this.circle.position.scale.set(0,0,0) 
        this.circle2.position.scale.set(0,0,0) 
        this.circle3.position.scale.set(0,0,0) 
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