<template>
<div class="padre fondo1">
  <div class="bloque">
    <button class="bttn bttn-inicio fondo2" type="submit" @click="siguiente()">jugar</button>
  </div>
</div>
  <!--<a href="/Categorias" class="button">jugar</a>-->
  <!--<div class="animation-area">
    <ul class="box-area">
      <li></li>
    </ul>
  </div>-->
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
