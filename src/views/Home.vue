<template>
  <div class="padre fondo1">
    <div class="bloque">
      <img src="../assets/fondo/memory.gif" alt="MEMORY" class="memory">
      <button class="bttn bttn-inicio fondo2" type="submit" @click="siguiente()">jugar</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  mounted(){
    localStorage.clear();

  },
  methods: {
        siguiente(){
            localStorage.setItem('categoria', this.cat);
            this.$router.push("/Categorias")
        }
    }
}
</script>
