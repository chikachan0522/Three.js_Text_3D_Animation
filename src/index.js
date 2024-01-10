import * as THREE from 'three';
import './style.css';
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { MeshSurfaceSampler } from 'three/addons/math/MeshSurfaceSampler.js';

class main {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.sphere = null;
        this.text = null;
        this.scrollPercent = 0;
        this.points = null;
        this._init();
    }

    _init() {
        this._initScene();
        this._initCamera();
        this._initRenderer();
        this._initText();
        this._addEvent();
    }

    _initScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xffffff);
    }

    _initCamera() {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 2;
        this.scene.add(this.camera);
    }

    _initRenderer() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

    _resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    _render() {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this._render);
    }

    async _initText() {
        const fontLoader = new FontLoader();
        fontLoader.load("./font/Noto Sans JP_Regular.json", (font) => {
            const text1Geometry = new TextGeometry("H e l l o", {
                font: font,
                size: 0.5,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5,
            });
            const text2Geometry = new TextGeometry("W o r l d", {
                font: font,
                size: 0.5,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5,
            });
            text1Geometry.center();
            text2Geometry.center();
            const numParticles = 1800;
            this.geometry = new THREE.BufferGeometry();
            const position = this._getPointPosition(text1Geometry.toNonIndexed(), 1800);
            const secPosition = this._getPointPosition(text2Geometry.toNonIndexed(), 1800);
            console.log(position);
            console.log(secPosition);
            this.geometry.setAttribute('position', new THREE.BufferAttribute(position, 3));
            this.geometry.setAttribute('secPosition', new THREE.BufferAttribute(secPosition, 3));
            const material = new THREE.RawShaderMaterial({
                vertexShader: `
                attribute vec3 position;
                attribute vec3 secPosition;
                uniform float scalePercent;
                uniform mat4 modelViewMatrix;
                uniform mat4 projectionMatrix;


                void main() {
                    vec3 newPosition = mix(position, secPosition, scalePercent);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
                    gl_PointSize = 10.0;
                }
                `,
                fragmentShader: `
                precision mediump float;

                void main() {
                    float distance = length(gl_PointCoord - vec2(0.5, 0.5));

                    if (distance <= 0.5) {
                        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
                    } else {
                        discard;
                    }
                }
                `,
                side: THREE.DoubleSide,
                transparent: true,
                uniforms: {
                    scalePercent: { value: 0.0 },
                },
            });
            this.points = new THREE.Points(this.geometry, material);
            this.scene.add(this.points);
        });
    }

    _getPointPosition(geometry, numPoints) {
        const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
        const mesh = new THREE.InstancedMesh(geometry, material);
        const sampler = new MeshSurfaceSampler(mesh).build();
        const particlesPosition = new Float32Array(numPoints * 3);
        for (let i = 0; i < numPoints; i++) {
            const newPosition = new THREE.Vector3();
            sampler.sample(newPosition);
            particlesPosition.set([newPosition.x, newPosition.y, newPosition.z], i * 3);
        }
        return particlesPosition;
    };

    _initHelpers() {
        const axesHelper = new THREE.AxesHelper(5);
        this.scene.add(axesHelper);
        const gridHelper = new THREE.GridHelper(10, 10);
        this.scene.add(gridHelper);
    }

    _addEvent() {
        this._render = this._render.bind(this);
        window.addEventListener('load', () => {this._render()});
        window.addEventListener('resize', () => {this._resize()});
        window.addEventListener('scroll', () => {this.points.material.uniforms.scalePercent.value = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight))});
        console.log(this.geometry);
    }
}

new main();