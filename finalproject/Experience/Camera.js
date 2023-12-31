import Experience from "./Experience.js"
import * as THREE from 'three'
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js'
export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createPerspectiveCamera();
        this.createOrthographicCamera();
        this.setOrbitControls()
        // console.log(this);
    }
    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 1000);
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.x = -1
        this.perspectiveCamera.position.y = 45
        this.perspectiveCamera.position.z = 30
        // this.perspectiveCamera.lookAt(0,0,0) 
        // this.cameraHelper=new THREE.CameraHelper(this.perspectiveCamera)
        // this.scene.add(this.cameraHelper)
    };
    createOrthographicCamera() {
        
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) / 2,
            (this.sizes.aspect * this.sizes.frustrum) / 2,
            this.sizes.frustrum / 2,
            -this.sizes.frustrum / 2,
            -100,
            100
        );
        this.scene.add(this.orthographicCamera);
        this.orthographicCamera.position.y=4
        this.orthographicCamera.position.z=5
        this.orthographicCamera.position.x=-Math.PI/6
        
        // const axesHelper = new THREE.AxesHelper(5);
        // this.scene.add(axesHelper);
        const size = 20;
        const divisions = 20;

        // const gridHelper = new THREE.GridHelper(size, divisions);
        // this.scene.add(gridHelper);
        
        // this.cameraHelper=new THREE.CameraHelper(this.perspectiveCamera)
        // this.scene.add(this.cameraHelper)
    }
    setOrbitControls() {
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas)
        this.controls.enableDamping = true
        this.controls.enableZoom = false
    }
    resize() {
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.top = this.sizes.frustrum / 2;
        this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
        this.orthographicCamera.updateProjectionMatrix()
    }
    update() {

        
        // console.log(this.perspectiveCamera.position);
            // this.cameraHelper.matrixWorldNeedsUpdate=true
            // this.cameraHelper.update()
            // this.cameraHelper.position.copy(this.orthographicCamera.position)
            // this.cameraHelper.rotation.copy(this.orthographicCamera.rotation)
            this.controls.update();
    }
}