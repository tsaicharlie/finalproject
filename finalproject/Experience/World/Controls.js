import Experience from "../Experience.js"
import * as THREE from 'three'
import GSAP from 'gsap'
import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger.js";
export default class Controls{
    constructor(){
        
        this.experience=new Experience();
        this.sizes=this.experience.sizes
        this.scene=this.experience.scene;
        this.resources=this.experience.resources;
        this.time=this.experience.time
        this.progress=0
        this.dummyCurve=new THREE.Vector3(0,0,0)
        this.camera=this.experience.camera
        this.room=this.experience.world.room.actualRoom
        GSAP.registerPlugin(ScrollTrigger);
        this.setPath()
        
        // this.onWheel()
        this.lerp={
            current:0,
            target:0,
            ease:0.1
        }
        // this.position=new THREE.Vector3(0,0,0)
        // this.lookAtPosition=new THREE.Vector3(0,0,0)
        
    }
    setPath(){
        this.timeline=new GSAP.timeline()
        this.timeline.to(this.room.position,{
            x:this.sizes.width*0.009,
            duration:10,
            scrollTrigger:{
                trigger:'.first-move',
                markers:true,
                start:'top top',
                end:'bottom bottom',
                scrub:0.7

            },
        })
        
    //     this.curve = new THREE.CatmullRomCurve3( [
    //         new THREE.Vector3( -10, 0, 10 ),
    //         new THREE.Vector3( -5, 5, 5 ),
    //         new THREE.Vector3( 0, 0, 0 ),
    //         new THREE.Vector3( 5, -5, 5 ),
    //         new THREE.Vector3( 10, 0, 10 )
    //     ] ,true);
        
        
    //     console.log(this.dummyVector);
        
        
        
    //     const points = this.curve.getPoints( 50 );
    //     const geometry = new THREE.BufferGeometry().setFromPoints( points );
        
    //     const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );
        
    //     // Create the final object to add to the scene
    //     const curveObject = new THREE.Line( geometry, material );
    //     this.scene.add(curveObject)
    // }
    // onWheel(){
    //     window.addEventListener('wheel',(e)=>{
            
    //         if(e.deltaY>0){
    //             this.lerp.target+=0.1
    //             this.back=false
    //         }
    //         else{
    //             this.lerp.target-=0.1
    //             this.back=true
    //             // if(this.lerp.target<0){
    //             //     this.lerp.current=1 
    //             //     this.lerp.target=1
    //             // }
    //         }
    //     }
    //     )
    
    }
    
    
    resize(){
        
    }
    update(){
        
        this.lerp.current=GSAP.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        )
        // if(this.back){
        //     this.lerp.target-=0.01
        // }else{
        //     this.lerp.target+=0.01
        // }
        // this.lerp.target+=0.001
        // this.lerp.target=GSAP.utils.clamp(0,1,this.lerp.target)
        // this.lerp.current=GSAP.utils.clamp(0,1,this.lerp.current)
        // this.curve.getPointAt(this.lerp.current%1,this.position)
        // this.curve.getPointAt(this.lerp.current+0.001,this.lookAtPosition)
        // this.camera.orthographicCamera.position.copy(this.position)
        // this.camera.orthographicCamera.lookAt(this.lookAtPosition)
    }
}