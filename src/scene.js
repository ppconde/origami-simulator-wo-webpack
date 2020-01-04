import * as THREE from "three";
console.log("teste");

//Scene renderer
let scene = new THREE.Scene({ background: 0xf5f5f5 });
console.log(scene);
console.log(new THREE.Scene({ background: 0xf5f5f5 }));
let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Cube
let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  polygonOffset: true,
  polygonOffsetFactor: 1, // positive value pushes polygon further away
  polygonOffsetUnits: 1
});
let mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Cube Wireframe
let geo = new THREE.EdgesGeometry(mesh.geometry); // or WireframeGeometry
let mat = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 4 });
let wireframe = new THREE.LineSegments(geo, mat);
mesh.add(wireframe);

camera.position.z = 5;

let animate = function() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
