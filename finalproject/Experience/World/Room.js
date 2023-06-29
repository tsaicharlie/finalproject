import Experience from "../Experience.js"
import * as THREE from 'three'
export default class Room{
    constructor(){
        this.experience=new Experience();
        this.scene=this.experience.scene;
        this.resources=this.experience.resources;
        this.room=this.resources.items.room
        // console.log(this.room);
        this.actualRoom=this.room.scene
        console.log(this.actualRoom.children);
        this.setModel()

        
        
    }
    setModel(){
        // this.actualRoom.children[18].material=new THREE.MeshPhysicalMaterial()
        // this.actualRoom.children[18].material.roughness=0
        // this.actualRoom.children[18].material.color.set(0xffffff)
        // this.actualRoom.children[18].material.ior=3
        // this.actualRoom.children[18].material.transmission=1;
        // this.actualRoom.children[18].material.opacity=1

        // this.actualRoom.rotation.y=Math.PI/6
        this.actualRoom.children.forEach((child) => {
            child.castShadow=true
            child.receiveShadow=true
            if(child instanceof THREE.Group){
                child.children.forEach((groupchild)=>{
                    groupchild.castShadow=true
                    groupchild.receiveShadow=true
                })
            }
            
            if(child.name==="Aquarium"){
                child.children[0].material=new THREE.MeshPhysicalMaterial()
                child.children[0].material.roughness=0
                child.children[0].material.color.set(0xffffff)
                child.children[0].material.ior=3
                child.children[0].material.transmission=1.0
                child.children[0].material.opacity=1
                // child.children[0].material.transparent=true
                child.children[0].material.color.set(0x6dd9ee)
                console.log(child.children[0]);
            }
            if(child.name==='Computer'){
                child.children[1].material=new THREE.MeshBasicMaterial({
                    map:this.resources.items.screen,
                })
            }
        });
        this.scene.add(this.actualRoom)
        this.actualRoom.scale.set(0.1,0.1,0.1)
    }
    
    
    resize(){
        
    }
    update(){

    }
}