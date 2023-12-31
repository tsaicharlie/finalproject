import Experience from "../Experience.js"
import * as THREE from 'three'
export default class Environment{
    constructor(){
        this.experience=new Experience();
        this.scene=this.experience.scene;
        this.resources=this.experience.resources;
        this.setSunlight()
        
        
    }
    setSunlight(){
        this.sunLight=new THREE.DirectionalLight('#ffffff',2)
        this.sunLight.castShadow=true
        this.sunLight.shadow.camera.far=20
        this.sunLight.shadow.mapSize.set(2048,2048)
        this.sunLight.shadow.normalBias=0.05
        this.sunLight.position.set(-15,7,3)
        this.scene.add(this.sunLight)
        


        this.ambientlight=new THREE.AmbientLight('#ffffff',1)
        this.scene.add(this.ambientlight)
        // const cameraHelper=new THREE.CameraHelper(this.sunLight.shadow.camera)
        // this.scene.add(cameraHelper)
    }
    
    
    resize(){
        
    }
    update(){

    }
}