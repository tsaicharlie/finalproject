import Experience from "../Experience.js"
import * as THREE from 'three'
import Room from "./Room.js";
import Environment from "./Environment.js";
import Controls from "./Controls.js";
export default class World {
    constructor() {
        this.experience = new Experience();
        this.scene=this.experience.scene
        this.sizes=this.experience.sizes
        this.canvas=this.experience.canvas
        this.camera=this.experience.camera
        this.resources=this.experience.resources
        
        this.resources.on('ready',()=>{
            this.room=new Room()
            this.environment=new Environment()
            this.controls=new Controls()
            console.log('created room');
        })
        
        

    }


    resize() {

    }
    update() {
        if(this.room){
            this.room.update()
        }
        if(this.controls){
            this.controls.update()
        }
    }
}