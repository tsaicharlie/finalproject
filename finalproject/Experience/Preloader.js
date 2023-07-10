import EventEmitter from "events";
import Experience from "./Experience.js"
import GSAP from 'gsap'
import convert from "./Utils/convertDivsToSpans.js";
export default class Preloader extends EventEmitter {
    constructor() {
        super()
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.camera = this.experience.camera
        this.world = this.experience.world
        this.device = this.sizes.device
        this.sizes.on('switchdevice', (device) => {
            this.device = device
        })
        this.world.on('worldready', () => {
            this.setAssets()
            this.playIntro();
        })

    }
    firstIntro() {
        return new Promise((resolve) => {
            this.timeline = new GSAP.timeline()
            this.timeline.set('.animatedis',{y:0,yPercent:100})
            this.timeline
                    .to('.preloader', {
                        opacity:0,
                        delay:1,
                        onComplete:()=>{
                            document.querySelector('.preloader').classList.add('hidden')
                        }
                    })
            if (this.device === 'desktop') {


                this.timeline
                    .to(this.roomChildren.cube.scale, {
                        x: 3.4,
                        y: 3.4,
                        z: 3.4,
                        ease: 'back.out(2.5)',
                        duration: 2
                    }).to(this.room.position, {
                        x: -15,
                        ease: 'power1.out',
                        duration: 0.7,
                        onComplete: resolve,
                    })
            } else {
                this.timeline
                    .to(this.roomChildren.cube.scale, {
                        x: 3.4,
                        y: 3.4,
                        z: 3.4,
                        ease: 'back.out(2.5)',
                        duration: 1
                    }).to(this.room.position, {
                        z: -1,
                        ease: 'power1.out',
                        duration: 0.7,
                        onComplete: resolve,
                    })
            }
            this.timeline.to('.intro-text .animatedis', {
                yPercent: 0,
                stagger: 0.05,
                // duration:1,
                ease: 'back.out(1.7)',
                onComplete: resolve,
            }).to('.arrow-svg-wrapper', {
                opacity:1,
                // duration:1,
                
            })
        })

    }
    secondIntro() {
        return new Promise((resolve) => {
            this.secondtimeline = new GSAP.timeline()
            // if(this.device==='desktop'){

            this.secondtimeline.to('.intro-text .animatedis', {
                yPercent: 100,
                stagger: 0.07,
                ease: 'back.in(1.7)',
                duration:1
            },'fadeout')
            .to('.arrow-svg-wrapper', {
                opacity:0,
                // duration:1,
                
            },'fadeout').to('.hero-main-title .animatedis', {
                yPercent: 0,
                stagger: 0.07,
                ease: 'back.in(1.7)',
                duration:1
                // onComplete: resolve,
            },'introtext').to('.hero-main-description .animatedis', {
                yPercent: 0,
                stagger: 0.07,
                ease: 'back.in(1.7)',
                duration:1
                // onComplete: resolve,
            },'introtext').to('.first-sub .animatedis', {
                yPercent: 0,
                stagger: 0.07,
                ease: 'back.in(1.7)',
                duration:1
                // onComplete: resolve,
            },'introtext').to('.second-sub .animatedis', {
                yPercent: 0,
                stagger: 0.07,
                ease: 'back.in(1.7)',
                duration:1
            
            },'introtext')
                .to(this.room.position, {
                    x: 0,
                    y: 0,
                    z: 0,
                    ease: 'power1.out',
                    duration: 0.5
                }, 'same').to(this.roomChildren.cube.rotation, {
                    y: 2 * Math.PI + Math.PI / 4
                }, 'same').to(this.roomChildren.cube.scale, {
                    x: 10,
                    y: 10,
                    z: 10
                }, 'same').to(this.roomChildren.cube.position, {
                    y: 8.516,
                    z: 1.3243,
                    x: 0.6378
                }, 'same').to(this.roomChildren.body.scale, {
                    y: 1,
                    z: 1,
                    x: 1
                }).to(this.roomChildren.cube.scale, {
                    y: 0,
                    z: 0,
                    x: 0
                }).to(this.roomChildren.aquarium.scale, {
                    y: 1,
                    z: 1,
                    x: 1,
                    duration: 0.5,
                    ease: 'back.out(2,2)'
                }, ">-0.5").to(this.roomChildren.clock.scale, {
                    y: 1,
                    z: 1,
                    x: 1,
                    duration: 0.5,
                    ease: 'back.out(2,2)'
                }, ">-0.4").to(this.roomChildren.shelves.scale, {
                    y: 1,
                    z: 1,
                    x: 1,
                    duration: 0.5,
                    ease: 'back.out(2,2)'
                },">-0.3").to(this.roomChildren.floor_items.scale, {
                    y: 1,
                    z: 1,
                    x: 1,
                    duration: 0.5,
                    ease: 'back.out(2,2)'
                },">-0.2").to(this.roomChildren.desks.scale, {
                    y: 1,
                    z: 1,
                    x: 1,
                    duration: 0.5,
                    ease: 'back.out(2,2)'
                },">-0.1").to(this.roomChildren.table_stuff.scale, {
                    y: 1,
                    z: 1,
                    x: 1,
                    duration: 0.5,
                    ease: 'back.out(2,2)'
                },">-0.1").to(this.roomChildren.computer.scale, {
                    y: 1,
                    z: 1,
                    x: 1,
                    duration: 0.5,
                    ease: 'back.out(2,2)'
                },">-0.1").to(this.roomChildren.chair.scale, {
                    y: 1,
                    z: 1,
                    x: 1,
                    duration: 0.5,
                    ease: 'back.out(2,2)'
                }, 'chair')
                .to(this.roomChildren.chair.rotation, {
                    y: 4 * Math.PI + Math.PI / 4,

                    duration: 1.3,
                    ease: 'back.out(2,2)',
                    onComplete: resolve,
                }, 'chair').to('.arrow-svg-wrapper', {
                    opacity:1,
                    onComplete: resolve, 
                    
                }).set(this.roomChildren.mini_floor.scale, {
                    x: 1,
                    y: 1,
                    z: 1,
                })
                .then(
                    document.body.style.overflow='visible'
                )
            // }
            // else{
            //     this.timeline
            //     .to(this.room.position,{
            //         x:0,
            //         y:0,
            //         z:0,
            //         ease:'power1.out',
            //         duration:0.7
            //     })
            // }
        })
    }
    setAssets() {
        convert(document.querySelector('.intro-text'))
        convert(document.querySelector('.hero-main-title'))
        convert(document.querySelector('.hero-main-description'))
        convert(document.querySelector('.hero-second-subheading'))
        convert(document.querySelector('.second-sub'))
        this.room = this.experience.world.room.actualRoom
        this.roomChildren = this.experience.world.room.roomChildren;
        console.log(this.roomChildren);
    }
    onScroll(e) {
        if (e.deltaY > 0) {
            this.removeEventListener('wheel', this.scrollOneEvent)
            this.playSecondIntro()
        }
    }
    onTouchStart(e) {
        this.initalY = e.touches[0].clientY;

    }
    onTouchMove(e) {
        let currentY = e.touches[0].clientY;
        let difference = this.initalY - currentY;
        if (difference > 0) {
            this.playSecondIntro()
            this.removeEventListener()
        }
        this.initalY = null
    }
    removeEventListener() {
        window.removeEventListener('wheel', this.scrollOneEvent)
        window.removeEventListener('touchstart', this.touchStart)
        window.removeEventListener('touchmove', this.touchMove)
    }
    async playIntro() {
        await this.firstIntro()
        // console.log('contiuing');
        this.moveFlag = true
        this.scrollOneEvent = this.onScroll.bind(this)
        this.touchStart = this.onTouchStart.bind(this)
        this.touchMove = this.onTouchMove.bind(this)
        window.addEventListener('wheel', this.scrollOneEvent)
        window.addEventListener('touchstart', this.touchStart)
        window.addEventListener('touchmove', this.touchMove)
    }
    async playSecondIntro() {
        this.moveFlag = false
        this.scaleFlag = true
        await this.secondIntro()
        this.scaleFlag = false
        this.emit('enablecontrols')
    }
    move() {
        if (this.device === 'desktop') {
            // this.room.position.set(-1,0,0)
        } else {
            this.room.position.set(0, 0, -1)
        }
    }
    scale() {
        
        if (this.device === 'desktop') {
            // this.room.scale.set(0.11,0.11,0.11)
        } else {
            // this.room.scale.set(0.07,0.07,0.07)
        }
    }
    resize() {

    }
    update() {
        if (this.moveFlag) {
            this.move()
        }
        if (this.scaleFlag) {
            this.scale()
        }
    }
}