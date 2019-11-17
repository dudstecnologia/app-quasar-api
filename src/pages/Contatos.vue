<template>
  <q-page padding>

    <q-list bordered separator>

      <q-item clickable v-ripple v-for="c in contatos" :key="c.id" @click="selecionaContato(c.id)">
        <q-item-section>
          <q-item-label>{{ c.nome }}</q-item-label>
          <q-item-label caption>{{ c.email }}</q-item-label>
          <q-item-label caption>{{ c.telefone }}</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>

  </q-page>
</template>

<script>
export default {
  data () {
    return {
      contatos: []
    }
  },
  created () {
    this.getContatos();
  },
  methods: {
    getContatos () {
      this.$axios.get('/contatos', this.user)
        .then((res) => {
          // console.log(res);
          this.contatos = res.data;
        })
        .catch((err) => {
          console.log(err);
          this.$toast.error('Ocorreu um erro ao buscar os contatos');
        });
    },
    selecionaContato(id) {
      console.log('ID: ' + id);
    }
  }
}
</script>
