import Experience from "../Experience.js"
import * as THREE from 'three'
import GSAP from 'gsap'
export default class Room{
    constructor(){
        this.experience=new Experience();
        this.scene=this.experience.scene;
        this.resources=this.experience.resources;
        this.time=this.experience.time
        this.room=this.resources.items.room
        // console.log(this.room);
        this.actualRoom=this.room.scene
        this.roomChildren={}
        // console.log('actualroom'+this.actualRoom);
        // console.log(this.room);
        this.lerp={
            current:0,
            target:0,
            ease:0.1
        }
        this.setModel()
        this.setAnimation()
        this.onMouseMove()
        
    }
    setModel(){
        // this.actualRoom.children[18].material=new THREE.MeshPhysicalMaterial()
        // this.actualRoom.children[18].material.roughness=0
        // this.actualRoom.children[18].material.color.set(0xffffff)
        // this.actualRoom.children[18].material.ior=3
        // this.actualRoom.children[18].material.transmission=1;
        // this.actualRoom.children[18].material.opacity=1
        console.log(this.actualRoom.children);
        this.actualRoom.rotation.x=-Math.PI/2*0.4
        this.actualRoom.castShadow=true
        this.actualRoom.receiveShadow=true
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
                // console.log(child.children[0]);
            }
            if(child.name==='Computer'){
                child.children[1].material=new THREE.MeshBasicMaterial({
                    map:this.resources.items.screen,
                })
            }
            if(child.name==='Mini_Floor'){
                child.position.x=7.44055;
                child.position.z=-13.820406;
                // child.scale.set(2,2,2)
                // child.position.y=-8.83572;

            }
            if(child.name==='Mailbox'||child.name==='Lamp'||child.name==='FloorFirst'||child.name==='FloorSecond'||child.name==='FloorThird'||child.name==='Dirt'||child.name==='Flower1'||child.name==='Flower2'){
                child.scale.set(0,0,0)
                // child.position.z=-13.820406;
                // child.scale.set(2,2,2)
                // child.position.y=-8.83572;

            }
            child.scale.set(0,0,0)
            if(child.name==='Cube'){
                child.scale.set(10,10,10)
                child.position.set(0,0,0)
                child.rotation.y=-Math.PI/4
            }
            this.roomChildren[child.name.toLowerCase()]=child
        });
        this.scene.add(this.actualRoom)
        this.actualRoom.scale.set(0.7,0.7,0.7)
        // this.roomChildren[child.name]=child
        
    }
    setAnimation(){
        this.mixer=new THREE.AnimationMixer(this.actualRoom)
        this.swim=this.mixer.clipAction(this.room.animations[5])
        this.swim.play()
    }
    onMouseMove(){
        window.addEventListener('mousemove',(e)=>{
            this.rotation=((e.clientX-window.innerWidth/2)*2)/window.innerWidth*0.25
            this.lerp.target=this.rotation
            // console.log(e.clientX,this.rotation);
        })
    }
    
    
    resize(){
        
    }
    update(){
        this.mixer.update(this.time.delta*0.001)
        this.lerp.current=GSAP.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        )
        this.actualRoom.rotation.y=this.lerp.current
    }
}