<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu" />

        <q-toolbar-title>
          {{ telaAtiva }}
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Menu Principal</q-item-label>

        <q-item clickable tag="a" @click="telaAtiva = 'Contatos'" :class="telaAtiva == 'Contatos' ? 'q-item--active' : '' ">
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Lista</q-item-label>
            <q-item-label caption>Lista de Contatos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" @click="telaAtiva = 'Cadastro'" :class="telaAtiva == 'Cadastro' ? 'q-item--active' : '' ">
          <q-item-section avatar>
            <q-icon name="person_add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cadastro</q-item-label>
            <q-item-label caption>Novo Contato</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" @click="telaAtiva = 'Perfil'" :class="telaAtiva == 'Perfil' ? 'q-item--active' : '' ">
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Perfil</q-item-label>
            <q-item-label caption>Seus Dados</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="logoff">
          <q-item-section avatar>
            <q-icon name="exit_to_app" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Sair</q-item-label>
            <q-item-label caption>Finalizar sessão</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>

      <contatos v-if="telaAtiva == 'Contatos'"></contatos>
      <cadastro v-if="telaAtiva == 'Cadastro'"></cadastro>
      <perfil v-if="telaAtiva == 'Perfil'"></perfil>

    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      leftDrawerOpen: false,
      telaAtiva: 'Contatos'
    }
  },
  methods: {
    logoff () {
      localStorage.removeItem('name')
      localStorage.removeItem('email')
      localStorage.removeItem('token')

      this.$router.push('/');
    }
  },
  watch: {
    telaAtiva () {
      this.leftDrawerOpen = false;
    }
  }
}
</script>
