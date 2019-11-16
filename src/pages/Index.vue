<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page>
</template>

<script>
export default {
  beforeCreate () {
    // this.$emit("altera-titulo", 'Login');
    // console.log("Criou");
    try {
      if(!this.$q.localStorage.getItem('user').token) {
        this.$router.push('/login');
      }
    } catch (e) {
      this.$router.push('/login');
    }
  },
}
</script>
