<template>
  <q-page padding>

    <!-- <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 300px">
        <q-card-section>
          <div class="text-h6">Dados do Contato</div>
        </q-card-section>

        <cadastro></cadastro>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add address" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog> -->

    <q-list bordered separator>

      <q-item clickable v-ripple v-for="c in contatos" :key="c.id" @click="selecionaContato(c.id)">
        <q-item-section>
          <q-item-label lines="1" class="text-h6 text-blue-10">{{ c.nome }}</q-item-label>
          <q-item-label lines="1" class="text-caption text-grey-7">{{ c.telefone }}</q-item-label>
          <q-item-label lines="1" class="text-caption text-red-4">{{ c.email }}</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>

  </q-page>
</template>

<script>
export default {
  data () {
    return {
      contatos: [],
    }
  },
  created () {
    this.getContatos();
  },
  methods: {
    getContatos () {
      this.$emit('progresso', true);
      this.$axios.get('/contatos', this.user)
        .then((res) => {
          this.$emit('progresso', false);
          this.contatos = res.data;
        })
        .catch((err) => {
          this.$emit('progresso', false);
          this.$toast.error('Ocorreu um erro ao buscar os contatos');
        });
    },
    selecionaContato(id) {
      this.$emit('seleciona-contato', id);
    }
  }
}
</script>
