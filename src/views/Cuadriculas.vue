<template>
    <div class="categorias padre fondo1">
        <div class="bloque">
            <div class="bloques">
                <button class="bttn bttn-cat fondo2" type="submit" v-on:click="ancho=2,alto=3" @click="siguiente()">3x2</button>
            </div>
            <div class="bloques">
                <button class="bttn bttn-cat fondo2" type="submit" v-on:click="ancho=3,alto=4" @click="siguiente()">4x3</button>
            </div>
            <br>
            <div class="bloques">
                <button class="bttn bttn-cat fondo2" type="submit" v-on:click="ancho=4,alto=5" @click="siguiente()">5x4</button>
            </div>
            <div class="bloques">
                <button class="bttn bttn-cat fondo2" type="submit" v-on:click="ancho=5,alto=6" @click="siguiente()">6x5</button>
            </div>
            <br>
            <div class="bloques">
                <button class="bttn bttn-cat fondo2" type="submit" v-on:click="ancho=7,alto=8" @click="siguiente()">8x7</button>
            </div>
            <div class="bloques">
                <button class="bttn bttn-cat fondo2" type="submit" v-on:click="ancho=8,alto=9" @click="siguiente()">9x8</button>
            </div>
            <br>
            <div class="bloques">
                <button type="submit" class="retroceder"><img src="../assets/fondo/atras.png" alt="atras" width="40" height="30" @click="atras()"></button>
            </div>
            <div class="bloques">
                <button type="submit" class="casa"><img src="../assets/fondo/home.png" alt="atras" width="45" height="30" @click="casa()"></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cuadriculas',
    data(){
        return{
            ancho: 0,
            alto: 0
        }
    },
    mounted(){
        localStorage.removeItem("alto")
        localStorage.removeItem("ancho")
        if (localStorage.getItem('categoria') === null) {
            this.$router.push("/Categorias")
        }
    },
    methods: {
        siguiente(){
            localStorage.setItem('alto', this.alto);
            localStorage.setItem('ancho', this.ancho);
            this.$router.push("/Juego")
        },
        atras(){
            this.$router.push("/Categorias")
        },
        casa(){
            this.$router.push("/")
        }
    }
}
</script>