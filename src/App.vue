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
.sinpadding{
  margin: 0;
  padding: 0;
}
.prueba{
  border-left: solid 3px white ;
  border-right: solid 3px white ;
  border-bottom: solid 3px white ;
  text-align: center;
  display: block;
  border-radius: 5px;
}
.prueba-h1{
  text-transform: uppercase;
  color: white;
  font-family: 'Cooper Black';
  font-size: 30px;
}
.prueba-imagen-movimiento{
  width: 50px;
  height: 30px;
  padding: 0px;
}
.prueba-imagen-tiempo{
  width: 25px;
  height: 30px;
  padding: 0px;
}
.prueba-cuadro{
  border-radius: 5px;
  width: 10%;
  padding: 4px 15px;
  background: white;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  font-family: 'Cooper Black';
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
  background-color: #00ff0d,
}
.swal-button--home {
  background-color: rgba(255, 0, 0, 0.952);
}
/*fondos*/
.fondo1{
  background: url('assets/fondo/fondo1.jpg');
}
.fondo2{
  background: url('assets/fondo/fondo2.jpg');
}
.pa{
  text-align: center;
  width: 100%;
  height: 100vh;
  display: table;
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
/* sin pading */
.paaa{
  padding: 0px 2px;
}
/* imagen */
.target-image{
  width: 100%;
  height: 9.5vh;
  max-height: 300px;
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
  position: relative;
}
.img-btn{
  width: 11px;
  height: 11px;
}
.btton-pause{
  float: left;
  vertical-align: middle;
  border-radius: 5px;
  border-color: rgb(255, 255, 255);
  border-width: 2px;
  border-style: solid;
  padding: 2px 5px;
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
