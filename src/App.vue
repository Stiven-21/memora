<template>
  
  <router-view/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
}
.prueba{
  text-align: center;
}
/* swal */
.swal-overlay {
  background-color: rgba(0, 0, 0, 0.8);
}
.swal-modal {
  background-color: rgb(0, 255, 21);
  border: 3px solid rgb(255, 255, 255);
}
.swal-title {
  margin: 0px;
  font-size: 18px;
  margin-bottom: 28px;
  color: #000;
  text-transform: uppercase;
}
.swal-text{
  color: black;
}
.swal-footer {
  background-color: rgb(245, 248, 250);
  margin-top: 32px;
  border-top: 1px solid #bac2c7;
  overflow: hidden;
  text-align: center;
}
.swal-button {
  padding: 10px 19px;
  border-radius: 5px;
  font-size: 12px;
  border: 1px solid #000000;
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
  color: rgb(255, 255, 255);
}
.swal-button--reiniciar{
  background-color: #ff411f,
}
.swal-button--home {
  background-color: rgba(81, 252, 38, 0.952);
}
/*fondos*/
.fondo1{
  background: url('assets/fondo/fondo1.jpg');
}
.fondo2{
  background: url('assets/fondo/fondo2.jpg');
}
/*centrado*/
.padre{
  background-size: 135%;
  text-align: center;
  width: 100%;
  height: 100vh;
  display: table;
}
.bloque{
  display: table-cell;
  vertical-align: middle;
}
.bloques{
  width: 50%;
  padding: 3px 3px 3px 5px;

  display: inline-block;
}
/* imagen */
.target-image{
  padding: auto;
  width: 100%;
  height: auto;
  height: 25vh;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: black;
}
img.card-img-top.girar {
    animation: fadein 2s;
}

@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
/*animacion del boton*/
.bttn{
  background-size: 100%;
  display: block;
  padding: 10px;
  text-align: center;
  margin: auto;
  color: white;
  letter-spacing: 1px;
  transition: all 300ms;
  border-color: white;
  border-width: 2px;
  border-style: solid;
  font-family: 'Arial Black';
  text-shadow: black -2px 2px;
  border-bottom: 6px solid #000;
}
.img-btn{
  width: 15px;
  height: 15px;
}
.btton-pause{
  vertical-align: middle;
  border-radius: 5px;
  border-color: rgb(0, 0, 0);
  border-width: 2px;
  border-style: solid;
  padding: 3px 7px;
  background: none;
}
.bttn-inicio{
  text-transform: uppercase;
  border-radius: 20px;
  width: 70%;
  height: 60px;
  font-size: 18px;
}
.bttn-cat{
  border-radius: 10px;
  width: 98%;
  height: 70px;
  font-size: small;
}
.bttn:hover{
  transform: translateY(5px);
  box-shadow: 0px 30px 5px -15px rgba(0,0,0,0.3);
}
/*FONDO*/
.animation-area{
  background: linear-gradient(to bottom, #3700ff, #110058);
  width: 100%;
  height: 100vh;
}
.box-area{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.box-area li{
  position: absolute;
  display: block;
  list-style: none;
  width: 25px;
  height: 25px;
  background: rgba(255,255,255,0.2);
  animation: animate 35s linear infinite;
  bottom: -150px;
}
.box-area li:nth-child(1){
  left: 80%;
  width: 80%;
  height: 80%;
  animation-delay: 0s;
}
.box-area li:nth-child(2){
  left: 12%;
  width: 30px;
  height: 30px;
  animation-delay: 1.5s;
  animation-duration: 10s;
}
.box-area li:nth-child(3){
  left: 70%;
  width: 100px;
  height: 100px;
  animation-delay: 5.5s;
}
.box-area li:nth-child(4){
  left: 42%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 15s;
}
.box-area li:nth-child(5){
  left: 65%;
  width: 40px;
  height: 40px;
  animation-delay: 0s;
}
.box-area li:nth-child(6){
  left: 15%;
  width: 110px;
  height: 110px;
  animation-delay: 3.5s;
}
@keyframes animate {
  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100%{
    transform: translateY(-1000px) rotate(360deg);
    opacity: 0;
  }
}
</style>
