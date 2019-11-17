<template>
  <q-page padding>
    <q-form ref="myForm"
      @submit="salvar"
      class="q-gutter-md" >

      <q-input
        outlined
        v-model="contato.nome"
        label="Nome *"
        required />

      <q-input
        type="tel"
        outlined
        v-model="contato.telefone"
        label="Telefone" />

      <q-input
        type="email"
        outlined
        v-model="contato.email"
        label="Email" />

      <div class="q-gutter-sm">
        <q-btn label="Salvar" type="submit" color="primary" class="full-width" />
      </div>

    </q-form>
  </q-page>
</template>

<script>
export default {
  props: [
    'id'
  ],
  data () {
    return {
      contato: {}
    }
  },
  created () {
    this.name = this.$q.localStorage.getItem('name');
    if(this.id) {
      this.$toast.success('Selecionou: ' + this.id);
    }
  },
  methods: {
    salvar () {
      this.$emit('progresso', true);
      this.$axios.post('/contatos', this.contato)
        .then((res) => {
          this.$emit('progresso', false);
          this.contato = {};
          this.$refs.myForm.resetValidation();
          this.$toast.success('Salvo com sucesso');
        })
        .catch((err) => {
          this.$emit('progresso', false);
          if (err.response.status == 422) {
            this.teste = Object.values(err.response.data.errors).flat();
            this.$toast.error(this.teste[0]);
          } else {
            this.$toast.error('Ocorreu um erro');
          }
        });
    }
  }
}
</script>
