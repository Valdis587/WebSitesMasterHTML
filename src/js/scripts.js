import Swiper from 'swiper/bundle';
import {Autoplay, EffectFade, EffectCoverflow, EffectFlip, EffectCube } from 'swiper/modules';
Swiper.use({ Autoplay, EffectFade, EffectCoverflow, EffectFlip, EffectCube});
const swiper1 = new Swiper('.homeSlider', {
   loop: true,
   autoplay: true,
   speed: 2000,
   pagination: false,
   effect: 'slide',
   fadeEffect: {
     crossFade: true
    },
  });

  const swiper2 = new Swiper('.job__carusel', {
   effect: 'coverflow',
   loop: true,
   speed: 2000,
   autoplay: true,
   centeredSlides: true,
   autoHeight: true,
   slidesPerView: 4,
   centeredSlides: true,
   coverflow: {
     rotate: 30,
     stretch: 400,
     depth: 400,
   },
   breakpoints: {
       320: {
           slidesPerView: 'auto',
         },
         910: {
           slidesPerView: 4,
         },
   }
  });

  const swiper3 = new Swiper('.reviews__slider', {
    loop: true,
    autoplay: true,
    // If we need pagination
    pagination: false,
    effect: 'flip',
    flipEffect: {
       slideShadows: false,
    },
    speed: 2000,
    autoHeight: true,
  });

  const swiper4 = new Swiper('.blog__slider', {
    speed: 400,
 
    initialSlide: 0,
    //truewrapper adoptsheight of active slide

    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // delay between transitions in ms
    autoplay: true,
    pagination: false,
 
    effect: 'slide',
    // Distance between slides in px.
    spaceBetween: 20,
    //
    slidesPerView: 4,
    //
    centeredSlides: false,
    //
    slidesOffsetBefore: 0,
    //
    grabCursor: true,
    breakpoints: {
       320: {
          slidesPerView: 1,
       },
       480: {
          slidesPerView: 2,
       },
       740: {
          slidesPerView: 3,
       },
       992: {
          slidesPerView: 4,
       },
    }
  });

  const swiper5 = new Swiper('.sidebar__widget-job', {
   loop: true,
   autoplay: true,
   // If we need pagination
   pagination: false,
   effect: 'cube',
   cubeEffect: {
      slideShadows: false,
   },
   speed: 2000,
   autoHeight: true,
});

  const swiper6 = new Swiper('.sidebar__widget-reviews', {
   loop: true,
   autoplay: true,
   // If we need pagination
   pagination: false,
   effect: 'cube',
   cubeEffect: {
      slideShadows: false,
   },
   speed: 2000,
   autoHeight: false,
});

//popup show//
if(document.querySelector('.popup__body')) {
   let messagePopup = document.querySelector('.popup__body');
   window.addEventListener('load', ()=> {
      setTimeout(() => {
         messagePopup.classList.add('pop-open');
         messagePopup.classList.add('popup__show');
       }, 2000);
      });
   }
   // end popup show//
   // popup close //
var popupButtonClose = document.getElementsByClassName('popup__close');
var popupBody = document.getElementsByClassName('popup__body');
popupButtonClose[0].onclick = function() {
   popupBody[0].classList.remove('pop-open');
}
// end popup close //

var mobMenuOpen = document.querySelector('.header__mob-menu');
var mobMenuClose = document.querySelector('.header__mob-menu-close');
var mobPanel = document.querySelector('.header__menu-nav');
mobMenuOpen.onclick=function() {
mobPanel.classList.add('menu-nav-open');
}
mobMenuClose.onclick=function() {
   mobPanel.classList.remove('menu-nav-open');
}

var acc = document.getElementsByClassName("faq__vop-wrap");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
     this.classList.toggle("faq__active");
     var panel = this.nextElementSibling;
     if (panel.style.maxHeight) {
       panel.style.maxHeight = null;
     } else {
       panel.style.maxHeight = panel.scrollHeight + "px";
     }
   });
 }

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';


const back = document.getElementById('back-anim');
if(back) {
    const scene= new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(74, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        canvas: back
     });

     renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0xffffff, 0);

const mainLight = new THREE.PointLight(0xffffff);
const mainLight2 = new THREE.PointLight(0xffffff);
mainLight.position.set(100, 85, 290);
mainLight2.position.set(-200, -185, 290);
scene.position.set(0, 0, -300);
scene.add(mainLight, mainLight2);

function add_star(){
    const zvezda = new THREE.SphereGeometry(25, 24, 25);
    const ZVMater = new THREE.MeshStandardMaterial({color: 0xad0323});
    const ZVMater4 = new THREE.MeshStandardMaterial({color: 0xad0323});
    const ZVMater2 = new THREE.MeshStandardMaterial({color: 0xad03a8});

    const ZVMater3 = new THREE.MeshStandardMaterial({color: 0xad03a8});

    const ZVMater5 = new THREE.MeshStandardMaterial({color: 0x000000});
    const ZVMater6 = new THREE.MeshStandardMaterial({color: 0x000000});

    const ZVMater7 = new THREE.MeshStandardMaterial({color: 0x0603ad});
    const ZVMater8 = new THREE.MeshStandardMaterial({color: 0x0603ad});

    const star = new THREE.Mesh(zvezda, ZVMater);
    const star2 = new THREE.Mesh(zvezda, ZVMater2);
    const star3 = new THREE.Mesh(zvezda, ZVMater3);
    const star4 = new THREE.Mesh(zvezda, ZVMater4);

    const star5 = new THREE.Mesh(zvezda, ZVMater5);
    const star6 = new THREE.Mesh(zvezda, ZVMater6);

    const star8 = new THREE.Mesh(zvezda, ZVMater8);
    const star7 = new THREE.Mesh(zvezda, ZVMater7);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(2000));
    star.position.set(x+y+100, y-z/2+100, z);
    star2.position.set(x-y/2+100, y+z/2+100, z);
    star3.position.set(x-y+100, y+z/3+100, z);
    star4.position.set(x-y*2+100, y+z*2+100, z);

    star5.position.set(x-y+100/2, y+z/3+100/2, z);
    star6.position.set(x-y*2+100/2, y+z*2+100/2, z);

    star7.position.set(x-y/2+100*2, y+z/2+100*2, z);
    star8.position.set(x-y/2+100*2, y+z*2+100/2, z);

    let run=0;
    function animsiniy(){
        requestAnimationFrame( animsiniy );
        star.position.x+=0.36*Math.sin(run);
        star.position.y+=0.55*Math.cos(run);
        star2.position.x-=0.37*Math.sin(run);
        star2.position.z-=0.54*Math.cos(run);
        star3.position.y-=0.19*Math.sin(run);
        star3.position.z-=0.44*Math.cos(run);
        star4.position.y-=0.65*Math.sin(run);
        star4.position.z-=0.29*Math.cos(run);
        star5.position.y-=0.18*Math.sin(run);
        star5.position.x-=0.27*Math.cos(run);
        star6.position.x+=0.27*Math.sin(run);
        star6.position.y+=0.17*Math.cos(run);
        star7.position.z+=0.28*Math.sin(run);
        star7.position.x+=0.16*Math.cos(run);
        star8.position.y+=0.18*Math.sin(run);
        star8.position.x+=0.27*Math.cos(run);
        run+=Math.PI/180*2.9;
    }
    animsiniy();
    scene.add(star, star2, star3, star4, star5, star6, star7, star8);
 }
 Array(230).fill().forEach(add_star);

 const TNRoman = back.getAttribute('data-font');
 const Fontext = new FontLoader();
 Fontext.load(TNRoman, function(font) {
     const geo = new TextGeometry('WebSites-master.ru', {
         font: font,
         size: 4,
         height: 2,
     })
     const textMesh = new THREE.Mesh(geo, [
         new THREE.MeshPhongMaterial({color: 0x333333}),
         new THREE.MeshPhongMaterial({color: 0x000033})
     ]);

     const textMesh2 = new THREE.Mesh(geo, [
        new THREE.MeshPhongMaterial({color: 0x333333}),
        new THREE.MeshPhongMaterial({color: 0x000033})
    ]);

    const textMesh3 = new THREE.Mesh(geo, [
      new THREE.MeshPhongMaterial({color: 0x333333}),
      new THREE.MeshPhongMaterial({color: 0x000033})
  ]);

  const textMesh4 = new THREE.Mesh(geo, [
   new THREE.MeshPhongMaterial({color: 0x333333}),
   new THREE.MeshPhongMaterial({color: 0x000033})
]);

     textMesh.castShadow=true;
     textMesh3.castShadow=true;
     textMesh4.castShadow=true;
     textMesh.position.set(75, -7, 204);
     textMesh.rotation.set(0, -7.1, 0);
     textMesh2.castShadow=true;

     textMesh3.position.set(175, 78, 154);
     textMesh3.rotation.set(0, -7.1, 0);

     textMesh2.position.set(-92, -24, 234);
     textMesh2.rotation.set(0.4, 6.9, 0);

     textMesh4.position.set(-162, 34, 194);
     textMesh4.rotation.set(0.4, 6.9, 0);

     scene.add(textMesh, textMesh2, textMesh3, textMesh4);
     let run=0;
     function textanim(){
        requestAnimationFrame( textanim );
        textMesh.position.x+=0.26*Math.sin(run);
        textMesh.position.z+=0.16*Math.cos(run);
        textMesh2.position.x-=0.25*Math.sin(run);
        textMesh2.position.z-=0.17*Math.cos(run);
        textMesh3.position.x-=0.17*Math.sin(run);
        textMesh3.position.y-=0.17*Math.cos(run);
        textMesh4.position.x+=0.17*Math.sin(run);
        textMesh4.position.z+=0.24*Math.cos(run);
        run+=Math.PI/180*2.3;
     }
     textanim();
 });



 const loader = new GLTFLoader();
 const image = back.getAttribute('data-src');
 loader.load(image, function(gltf) {
     gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object
      const moneta = gltf.scene;
      moneta.position.set(-10, 0, 290);
      scene.add( moneta);
      function animmonet(){
         requestAnimationFrame( animmonet );
         moneta.rotation.y+=0.01;
      }
      animmonet();
 });

 loader.load(image, function(gltf) {
   gltf.animations; // Array<THREE.AnimationClip>
    gltf.scene; // THREE.Group
    gltf.scenes; // Array<THREE.Group>
    gltf.cameras; // Array<THREE.Camera>
    gltf.asset; // Object
    const moneta = gltf.scene;
    moneta.position.set(40, 10, 270);
    scene.add( moneta);
    function animmonet(){
       requestAnimationFrame( animmonet );
       moneta.rotation.y-=0.01;
    }
    animmonet();
});

loader.load(image, function(gltf) {
   gltf.animations; // Array<THREE.AnimationClip>
    gltf.scene; // THREE.Group
    gltf.scenes; // Array<THREE.Group>
    gltf.cameras; // Array<THREE.Camera>
    gltf.asset; // Object
    const moneta = gltf.scene;
    moneta.position.set(10, 2, 290);
    scene.add( moneta);
    function animmonet(){
       requestAnimationFrame( animmonet );
       moneta.rotation.y+=0.01;
    }
    animmonet();
});

loader.load(image, function(gltf) {
   gltf.animations; // Array<THREE.AnimationClip>
    gltf.scene; // THREE.Group
    gltf.scenes; // Array<THREE.Group>
    gltf.cameras; // Array<THREE.Camera>
    gltf.asset; // Object
    const moneta = gltf.scene;
    moneta.position.set(0, 8.6, 280);
    scene.add( moneta);
    function animmonet(){
       requestAnimationFrame( animmonet );
       moneta.rotation.y-=0.01;
    }
    animmonet();
});

loader.load(image, function(gltf) {
   gltf.animations; // Array<THREE.AnimationClip>
    gltf.scene; // THREE.Group
    gltf.scenes; // Array<THREE.Group>
    gltf.cameras; // Array<THREE.Camera>
    gltf.asset; // Object
    const moneta = gltf.scene;
    moneta.position.set(-16, 8.6, 280);
    scene.add( moneta);
    function animmonet(){
       requestAnimationFrame( animmonet );
       moneta.rotation.y-=0.01;
    }
    animmonet();
});

animate();

function animate() {
     requestAnimationFrame( animate );
    
     renderer.render( scene, camera );     
 }
 
 } 

 const HomeCanv = document.getElementById('zakSite__animate-home');
if(HomeCanv) {
const scene = new THREE.Scene();
var clientWidth = document.getElementById('zakSite__left').clientWidth;

const sizes = {
width: clientWidth,
height: 350
}
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);

const renderer = new THREE.WebGLRenderer({
 antialias: true,
 alpha: true,
   canvas: HomeCanv
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.setClearColor(0xffffff, 0);
camera.position.set(0, 4, 9);
scene.rotation.set(3.5, 17, 3.2);
scene.position.set(0, 3, -1);

window.addEventListener('resize', function() {
   var width = clientWidth;
   var height = 300;
   renderer.setSize(width, height);
   camera.aspect = width/height;
   camera.updateProjectionMatrix();
});

const mainLight = new THREE.PointLight(0xffffff);
  const mainLight2 = new THREE.PointLight(0xffffff);

  mainLight.position.set(40, 15, -20);
  mainLight2.position.set(-40, 15, -20);

  scene.add(mainLight, mainLight2);
  
  const loader = new GLTFLoader();
  const image = HomeCanv.getAttribute('data-src');
  loader.load(image, function(gltf) {
      scene.add(gltf.scene);
        gltf.animations;
 
  });
 
  function animate() {
    requestAnimationFrame( animate );
    scene.rotation.y +=0.01;
    renderer.render( scene, camera );
  }
  animate();
} 

const servPage = document.getElementById('servicePage__animate');
if(servPage) {
   const scene = new THREE.Scene();
   var clientWidth = document.getElementById('servicePage__conten-left').clientWidth;
   
   const sizes = {
   width: clientWidth,
   height: 350
   }
   const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
   
   const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
      canvas: servPage
   });
  // scene.background = new THREE.Color(0x151515);
   renderer.setSize(sizes.width, sizes.height);
   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
   renderer.setClearColor(0xffffff, 0);
   camera.position.set(0, 3.6, 4);
   scene.rotation.set(3.5, 17, 3.2);
   scene.position.set(0.5, 3.1, -6.9);
   
   window.addEventListener('resize', function() {
      var width = clientWidth;
      var height = 300;
      renderer.setSize(width, height);
      camera.aspect = width/height;
      camera.updateProjectionMatrix();
   });
   
   const mainLight = new THREE.PointLight(0xffffff);
   const mainLight2 = new THREE.PointLight(0x3D3E42);
   mainLight.position.set(20, 5, -20);
   mainLight2.position.set(-20, 17, 20);
   scene.add(mainLight, mainLight2);
   
   let mixer;
   const loader = new GLTFLoader();
   const image = servPage.getAttribute('data-src');
   loader.load(image, function(gltf) {
       scene.add(gltf.scene);
    
     mixer = new THREE.AnimationMixer(gltf.scene);
     const clips = gltf.animations;
     const clip = THREE.AnimationClip.findByName(clips, 'SphereAction');
      const clip2 = THREE.AnimationClip.findByName(clips, 'Sphere.006Action');
     const action = mixer.clipAction(clip);
      const action2 = mixer.clipAction(clip2);
     action.play();
      action2.play();
   });
   const clock = new THREE.Clock();
   function animate() {
     requestAnimationFrame( animate );
     scene.rotation.y +=0.01;
   mixer.update(clock.getDelta());
     renderer.render( scene, camera );
   }
   animate();
}

const onas = document.getElementById('ONas__animate');
if(onas) {
   const scene = new THREE.Scene();
var clientWidth = document.getElementById('ONas__page').clientWidth;
const sizes = {
width: clientWidth,
height: 300
}
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);

const renderer = new THREE.WebGLRenderer({
   antialias: true,
   alpha: true,
   canvas: onas
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0xffffff, 0);
camera.position.set(0, 7, 6);
scene.rotation.set(-3, -2.3, 3.2);
scene.position.set(0, 5.4, 0);

window.addEventListener('resize', function() {
   var width = clientWidth;
   var height = 400;
   renderer.setSize(width, height);
   camera.aspect = width/height;
   camera.updateProjectionMatrix();
});

const mainLight = new THREE.PointLight(0xffffff);
mainLight.position.set(25, 15, 10);
const mainLight2 = new THREE.PointLight(0xffffff);
mainLight2.position.set(-25, -15, -10);
scene.add(mainLight, mainLight2);

let mixer;
const loader = new GLTFLoader();
const image = onas.getAttribute('data-src');
loader.load(image, function(gltf) {
   scene.add(gltf.scene);

  mixer = new THREE.AnimationMixer(gltf.scene);
  const clips = gltf.animations;
  const clip = THREE.AnimationClip.findByName(clips, 'CylinderAction');
  const clip2 = THREE.AnimationClip.findByName(clips, 'Sphere.003Action');
  const action = mixer.clipAction(clip);
  const action2 = mixer.clipAction(clip2);
  action.play();
  action2.play(); 
});



const clock = new THREE.Clock();
function animate() {
	requestAnimationFrame( animate );
   scene.rotation.y +=0.01;
mixer.update(clock.getDelta());
	renderer.render( scene, camera );
}
animate();
}

