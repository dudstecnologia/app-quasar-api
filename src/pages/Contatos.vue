<template>
  <q-page padding>
    <p>Lista de Contatos : {{ name }}</p>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      name: '',
    }
  },
  methods: {
    user () {
      this.$axios.get('/user', this.user)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
</script>
