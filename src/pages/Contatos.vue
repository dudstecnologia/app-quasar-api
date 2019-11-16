<template>
  <q-page padding>
    <p>Lista de Contatos : {{ name }}</p>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  created () {
    this.name = this.$q.localStorage.getItem('name');
  },
  methods: {

  }
}
</script>
