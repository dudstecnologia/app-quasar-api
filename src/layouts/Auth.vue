<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="lock" />

        <q-toolbar-title>
          {{ titulo }}
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view @altera-titulo="alteraTitulo" />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      titulo: ''
    }
  },
  methods: {
    alteraTitulo (titulo)
    {
      this.titulo = titulo;
    }
  }
}
</script>
