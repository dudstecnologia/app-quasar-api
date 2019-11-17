<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="lock" />

        <q-toolbar-title>
          {{ titulo }}
        </q-toolbar-title>

        <q-circular-progress
          v-if="progresso"
          indeterminate
          size="20px"
          color="withe" />

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view @altera-titulo="alteraTitulo" @progresso="alteraProgresso" />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      titulo: '',
      progresso: false
    }
  },
  methods: {
    alteraTitulo (titulo)
    {
      this.titulo = titulo;
    },
    alteraProgresso (status) {
      this.progresso = status;
    }
  }
}
</script>
