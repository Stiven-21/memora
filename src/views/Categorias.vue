<template>
    <div class="padre fondo2">
        <div class="bloque">
            <div class="bloques">
                <button class="bttn bttn-cat fondo1" type="submit" v-on:click="cat='animales'" @click="siguiente()">Animales</button>
            </div>
            <div class="bloques">
                <button class="bttn bttn-cat fondo1" type="submit" v-on:click="cat='frutas'" @click="siguiente()">Frutas</button>
            </div>
            <br>
            <div class="bloques">
                <button class="bttn bttn-cat fondo1" type="submit" v-on:click="cat='marcas'" @click="siguiente()">Logos</button>
            </div>
            <div class="bloques">
                <button class="bttn bttn-cat fondo1" type="submit" v-on:click="cat='musica'" @click="siguiente()">musica</button>
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
    name: 'Categorias',
    data(){
        return{
            cat: '',
        }
    },
    mounted(){
        localStorage.removeItem("categoria")
    },
    methods: {
        siguiente(){
            localStorage.setItem('categoria', this.cat);
            this.$router.push("/Cuadriculas")
        },
        atras(){
            this.$router.push("/")
        },
        casa(){
            this.$router.push("/")
        }
    }
}

</script>