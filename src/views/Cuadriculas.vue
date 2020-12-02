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
        }
    }
}
</script>