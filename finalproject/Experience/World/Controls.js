import Experience from "../Experience.js"
import * as THREE from 'three'
import GSAP from 'gsap'
import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger.js";
import ASScroll from '@ashthornton/asscroll'
export default class Controls {
    constructor() {

        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time
        this.progress = 0
        this.dummyCurve = new THREE.Vector3(0, 0, 0)
        this.camera = this.experience.camera
        this.room = this.experience.world.room.actualRoom
        this.circle=this.experience.world.floor.circle
        this.circle2=this.experience.world.floor.circle2
        this.circle3=this.experience.world.floor.circle3
        GSAP.registerPlugin(ScrollTrigger);
        document.querySelector('.page').style.overflow='visible'
        this.setScrollTrigger()
        // this.setSmoothScroll()
        console.log(this.camera.orthographicCamera.position);
        // this.onWheel()
        this.lerp = {
            current: 0,
            target: 0,
            ease: 0.1
        }
        // this.position=new THREE.Vector3(0,0,0)
        // this.lookAtPosition=new THREE.Vector3(0,0,0)

    }
    // setupASScroll() {
    //     // https://github.com/ashthornton/asscroll
    //     const asscroll = new ASScroll({
    //         disableRaf: true,
    //         // ease:2
    //     });


    //    GSAP.ticker.add(asscroll.update);

    //     ScrollTrigger.defaults({
    //         scroller: asscroll.containerElement
    //     });


    //     ScrollTrigger.scrollerProxy(asscroll.containerElement, {
    //         scrollTop(value) {
    //             if (arguments.length) {
    //                 asscroll.currentPos = value;
    //                 return;
    //             }
    //             return asscroll.currentPos;
    //         },
    //         getBoundingClientRect() {
    //             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    //         },
    //         fixedMarkers: true
    //     });


    //     asscroll.on("update", ScrollTrigger.update);
    //     ScrollTrigger.addEventListener("refresh", asscroll.resize);

    //     requestAnimationFrame(() => {
    //         asscroll.enable({
    //             newScrollElements: document.querySelectorAll(".gsap-marker-start, .gsap-marker-end, [asscroll]")
    //         });

    //     });
    //     return asscroll;
    // }
    // setSmoothScroll() {
    //     this.asscroll=this.setupASScroll()
    // }
    setScrollTrigger() {
        ScrollTrigger.matchMedia({

            // large
            "(min-width: 969px)": () => {
                this.room.scale.set(0.7, 0.7, 0.7)
                this.firstMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.first-move',
                        start: 'top top ',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                        // markers: true
                    },

                })
                this.firstMoveTimeline.to(this.room.position, {
                    x: () => {
                        return this.sizes.width * 0.009
                    }
                })
                this.secondMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.second-move',
                        start: 'top top ',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                        // markers: true
                    },

                })
                this.secondMoveTimeline.to(this.room.position, {
                    x: () => {
                        return 1
                    },
                    z: () => {
                        return this.sizes.height * 0.009
                    },
                    y:5
                }, "same");
                this.secondMoveTimeline.to(this.room.scale, {
                    x: 1.4,
                    y: 1.4,
                    z: 1.4,
                }, "same")
                this.thirdMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.third-move',
                        start: 'top top ',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                        // markers: true
                    },

                })
                this.thirdMoveTimeline.to(this.room.position, {
                    x: 15,
                    y: 10,
                    z: -2.8
                })
            },
            "(max-width: 968px)": () => {
                this.room.scale.set(0.5, 0.5, 0.5)

                this.firstMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.first-move',
                        start: 'top top ',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                        // markers: true
                    },

                }).to(this.room.scale, {
                    x: 0.4,
                    y: 0.4,
                    z: 0.4
                })
                this.secondMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.second-move',
                        start: 'top top ',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                        // markers: true
                    },

                }).to(this.room.scale, {
                    x: 1.4,
                    y: 1.4,
                    z: 1.4
                }, 'same').to(this.room.position, {
                    x:10,
                    y: 5,
                    z:-10 
                
                }, 'same')
                this.thirdMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.third-move',
                        start: 'top top ',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                        // markers: true
                    },

                }).to(this.room.position, {
                    x: 5,
                    y: 10,
                    z: 5    
                }).to(this.room.scale, {
                    x: 1,
                    y: 1,
                    z: 1
                }, )
            },



            // all 
            "all": () => {
                this.firstMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.first-move',
                        start: 'top top ',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                        // markers: true
                    },

                }).to(this.circle.scale,{
                    x:12,
                    y:12,
                    z:12,
                })
                this.secondMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.second-move',
                        start: 'top top ',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                        // markers: true
                    },

                }).to(this.circle2.scale,{
                    x:12,
                    y:12,
                    z:12,
                })
                this.thirdMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.third-move',
                        start: 'top top ',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                        // markers: true
                    },

                }).to(this.circle3.scale,{
                    x:12,
                    y:12,
                    z:12,
                })
                this.section = document.querySelectorAll('.section')
                this.section.forEach(section => {
                    // this.progressWrapper = section.querySelector('.progress-wrapper');
                    // this.progressBar = section.querySelector('.progress-bar')
                    if (section.classList.contains('right')) {
                        GSAP.to(section, {
                            borderTopLeftRadius: 10,
                            scrollTrigger: {
                                trigger: section,
                                start: 'top bottom',
                                end: 'top top ',
                                scrub: 0.6,
                                // markers: true,
                            }
                        })
                        GSAP.to(section, {
                            borderBottomLeftRadius: 700,
                            scrollTrigger: {
                                trigger: section,
                                start: 'bottom bottom',
                                end: 'bottom top ',
                                scrub: 0.6,
                                // markers: true,
                            }
                        })
                    } else {
                        GSAP.to(section, {
                            borderTopRightRadius: 10,
                            scrollTrigger: {
                                trigger: section,
                                start: 'top bottom',
                                end: 'top top ',
                                scrub: 0.6,
                                // markers: true,
                            }
                        })
                        GSAP.to(section, {
                            borderBottomLeftRadius: 700,
                            scrollTrigger: {
                                trigger: section,
                                start: 'bottom bottom',
                                end: 'bottom top ',
                                scrub: 0.6,
                                // markers: true,
                            }
                        })
                    }
                    // GSAP.from(this.progressBar, {
                    //     scaleY: 0,
                    //     scrollTrigger: {
                    //         trigger: section,
                    //         start: 'top top ',
                    //         end: 'bottom bottom',
                    //         scrub: 0.4,
                    //         pin: this.progressWrapper,
                    //         pinSpacing: false,
                    //     }
                    // })
                })
                // console.log(this.room.children);
                this.thirdMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.third-move',
                        start: 'center center',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                        // markers: true
                    },

                })
                this.room.children.forEach(child => {
                    if (child.name === 'Mini_Floor') {
                        this.thirdMoveTimeline.to(child.position, {
                            x: -7.44055,
                            z: 14.820406,
                            duration: 0.5,
                            scrub:0.6

                        })
                    }
                    if (child.name === 'Mailbox' || child.name === 'Lamp' || child.name === 'FloorFirst' || child.name === 'FloorSecond' || child.name === 'FloorThird' || child.name === 'Dirt' || child.name === 'Flower1' || child.name === 'Flower2') {
                        this.thirdMoveTimeline.to(child.scale, {
                            x: 1,
                            z: 1,
                            y: 1,
                            duration: 0.4,
                            scrub:0.6

                        })
                    }
                });
            }

        });
        // this.timeline=new GSAP.timeline()
        // this.timeline.to(this.room.position,{
        //     x:this.sizes.width*0.009,
        //     duration:10,
        //     scrollTrigger:{
        //         trigger:'.first-move',
        //         markers:true,
        //         start:'top top',
        //         end:'bottom bottom',
        //         scrub:0.7,
        //         toggleActions:"restart none none none"

        //     },
        // })
        // this.timeline.to(this.room.position,{
        //     x:this.sizes.width*-0.009,
        //     duration:10,
        //     scrollTrigger:{
        //         trigger:'.second-move',
        //         markers:true,
        //         start:'100px top',
        //         end:'bottom bottom',
        //         scrub:0.7,
        //         toggleActions:"restart none none none"

        //     },
        // })
        // this.timeline.to(this.room.position,{
        //     x:this.sizes.width*0.009,
        //     duration:10,
        //     scrollTrigger:{
        //         trigger:'.third-move',
        //         markers:true,
        //         start:'100px top',
        //         end:'bottom bottom',
        //         scrub:0.7,
        //         toggleActions:"restart none none none"

        //     },
        // })

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


    resize() {

    }
    update() {

        this.lerp.current = GSAP.utils.interpolate(
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