<template>
    <div class="row">
        <div class="col-12">
            <h1 class="text-context">JUEGO</h1>
            <p>
                <span class="h5">Intentos: </span>{{intentos}}
                <span class="h5">Aciertos: </span>{{aciertos}}
            </p>
        </div>
    </div>
    <div v-for="(fila, indiceFila) in memorama" :key="indiceFila"
        class="row">
        <div :key="indiceFila+''+indiceImagen" class="col"
            v-for="(imagen, indiceImagen) in fila">
            <div class="mb-3">
                <img @click="voltear(indiceFila, indiceImagen)"
                    :class="{'girar': imagen.mostrar}"
                    :src="(imagen.mostrar ? imagen.ruta :
                    NOMBRE_IMAGEN_OCULTA)" class="target-image">
            </div>
        </div>
    </div>
    <img src="../assets/animales/1.jpg" alt="">
    
</template>

<script>
import swal from 'sweetalert';
export default {
    name: 'Juego',
    data(){
        return{
            categoria: "",
            imagenes: [],
            COLUMNAS: 0,
            alto: 0,
            ciclo: 0,
            intentos: 0,
            aciertos: 0,
            memorama:[],
            NOMBRE_IMAGEN_OCULTA: "https://i.pinimg.com/originals/20/c6/91/20c6912a4325c42402890997866a82b9.png",
            SEGUNDOS_ESPERA_VOLTEAR_IMAGEN: 1,
            ultimasCoordenadas: {
                indiceFila: null,
                indiceImagen: null
            },
            intentos: 0,
            aciertos: 0,
            esperandoTimeout: false,

            probar: []
        }
    },
    mounted(){
        if (localStorage.getItem('alto') === null && localStorage.getItem('ancho') === null) {
            this.$router.push("/Cuadriculas")
        }else{
            this.categoria = localStorage.getItem("categoria"),
            this.COLUMNAS = parseInt(localStorage.getItem("ancho"))
            this.alto = parseInt(localStorage.getItem("alto"))
            this.ciclo = (this.alto*this.COLUMNAS)
            /*this.imagenes = [
                "../assets/"+this.categoria+"/1.jpg",
                "../assets/"+this.categoria+"/2.jpg",
                "../assets/"+this.categoria+"/3.jpg",
                "../assets/"+this.categoria+"/4.jpg",
                "../assets/"+this.categoria+"/5.jpg",
                "../assets/"+this.categoria+"/6.jpg",
                "../assets/"+this.categoria+"/7.jpg",
                "../assets/"+this.categoria+"/8.jpg",
                "../assets/"+this.categoria+"/9.jpg",
                "../assets/"+this.categoria+"/10.jpg",
                "../assets/"+this.categoria+"/11.jpg",
                "../assets/"+this.categoria+"/12.jpg",
                "../assets/"+this.categoria+"/13.jpg",
                "../assets/"+this.categoria+"/14.jpg",
                "../assets/"+this.categoria+"/15.jpg"
            ],*/
            this.imagenes = [
                "../assets/animales/1.jpg",
                "../assets/animales/2.jpg",
                "../assets/animales/3.jpg",
                "../assets/animales/4.jpg",
                "../assets/animales/5.jpg",
                "../assets/animales/6.jpg",
                "../assets/animales/7.jpg",
                "../assets/animales/8.jpg",
                "../assets/animales/9.jpg",
                "../assets/animales/10.jpg",
                "../assets/animales/11.jpg",
                "../assets/animales/12.jpg",
                "../assets/animales/13.jpg",
                "../assets/animales/14.jpg",
                "../assets/animales/15.jpg"
            ]
            this.reiniciarJuego()
        }
    },
    methods: {
        reiniciarJuego() {
            let memorama = [];
            let probar = [];
            this.imagenes.forEach((imagen, indice) => {
                let imagenDeMemorama = {
                    ruta: imagen,
                    mostrar: false, // No se muestra la original
                    acertada: false, // No es acertada al inicio
                };
                // Poner dos veces la misma imagen
                probar.push(imagenDeMemorama, Object.assign({}, imagenDeMemorama));
            });

            
            //solo tomar la cantidad requerida
            for(let i = 0; i<this.ciclo; i++){
                memorama[i] = probar[i]
            }

            // Sacudir o mover arreglo; es decir, hacerlo aleatorio
            this.mezclarArreglo(memorama)
            
            // Dividirlo en subarreglos o columnas
            let memoramaDividido = [];
            for (let i = 0; i < this.ciclo; i += this.COLUMNAS) {
                memoramaDividido.push(memorama.slice(i, i + this.COLUMNAS));
            }
            // Reiniciar intentos
            this.intentos = 0;
            this.aciertos = 0;
            // Asignar a instancia de Vue para que lo dibuje
            this.memorama = memoramaDividido;
        },

        // Se desencadena cuando se hace click en la imagen
        voltear(indiceFila, indiceImagen) {
            // Si se está regresando una imagen a su estado original, detener flujo
            if (this.esperandoTimeout) {
                return;
            }
            // Si es una imagen acertada, no nos importa que la intenten voltear
            if (this.memorama[indiceFila][indiceImagen].acertada) {
                return;
            }
            
            // Si es la primera vez que la selecciona
            if (this.ultimasCoordenadas.indiceFila === null && this.ultimasCoordenadas.indiceImagen === null) {
                this.memorama[indiceFila][indiceImagen].mostrar = true;
                this.ultimasCoordenadas.indiceFila = indiceFila;
                this.ultimasCoordenadas.indiceImagen = indiceImagen;
                return;
            }
            // Si es el que estaba mostrada, lo ocultamos de nuevo
            let imagenSeleccionada = this.memorama[indiceFila][indiceImagen];
            let ultimaImagenSeleccionada = this.memorama[this.ultimasCoordenadas.indiceFila][this.ultimasCoordenadas.indiceImagen];
            if (indiceFila === this.ultimasCoordenadas.indiceFila &&
                indiceImagen === this.ultimasCoordenadas.indiceImagen) {
                this.memorama[indiceFila][indiceImagen].mostrar = false;
                this.ultimasCoordenadas.indiceFila = null;
                this.ultimasCoordenadas.indiceImagen = null;
                this.aumentarIntento();
                return;
            }

            // En caso de que la haya encontrado, ¡acierta!
            // Se basta en ultimaImagenSeleccionada
            this.memorama[indiceFila][indiceImagen].mostrar = true;
            if (imagenSeleccionada.ruta === ultimaImagenSeleccionada.ruta) {
                this.aciertos++;
                this.memorama[indiceFila][indiceImagen].acertada = true;
                this.memorama[this.ultimasCoordenadas.indiceFila][this.ultimasCoordenadas.indiceImagen].acertada = true;
                this.ultimasCoordenadas.indiceFila = null;
                this.ultimasCoordenadas.indiceImagen = null;
                // Cada que acierta comprobamos si ha ganado
                if (this.haGanado()) {
                    this.indicarVictoria();
                }
            } else {
                // Si no acierta, entonces giramos ambas imágenes
                this.esperandoTimeout = true;
                setTimeout(() => {
                    this.memorama[indiceFila][indiceImagen].mostrar = false;
                    this.memorama[indiceFila][indiceImagen].animacion = false;
                    this.memorama[this.ultimasCoordenadas.indiceFila][this.ultimasCoordenadas.indiceImagen].mostrar = false;
                    this.ultimasCoordenadas.indiceFila = null;
                    this.ultimasCoordenadas.indiceImagen = null;
                    this.esperandoTimeout = false;
                }, this.SEGUNDOS_ESPERA_VOLTEAR_IMAGEN * 1000);
                this.aumentarIntento();
            }
        },

        // Aumenta un intento y verifica si el jugador ha perdido
        aumentarIntento() {
            this.intentos++;
        },

        // Método que indica si el jugador ha ganado
        haGanado() {
            return this.memorama.every(arreglo => arreglo.every(imagen => imagen.acertada));
        },

        // Mostrar alerta de victoria y reiniciar juego
        indicarVictoria() {
            swal({
                    title: "¡Ganaste!",
                    html: `<img class="img-fluid" src="../assets/fondo/ganaste.png" alt="Ganaste">`,
                    text: "Bien hecho",
                    confirmButtonText: "Jugar de nuevo",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
            })
            .then(this.reiniciarJuego)
        },

        mezclarArreglo(a){
            var j, x ,i 
            for(i = a.length - 1; i > 0; i--){
                j = Math.floor(Math.random() * (i+1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a
        }




    }
}
</script>