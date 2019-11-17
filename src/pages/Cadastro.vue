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
    if(this.id) {
      this.getContato();
    }
  },
  methods: {
    getContato() {
      this.$emit('progresso', true);
      this.$axios.get(`/contatos/${this.id}`)
        .then((res) => {
          this.$emit('progresso', false);
          this.contato = res.data[0];
        })
        .catch((err) => {
          this.$emit('progresso', false);
          this.$toast.error('Ocorreu um erro ao buscar os dados do contato');
        });
    },
    salvar () {

      let metodo = 'post';
      let url =  '/contatos';

      if(this.id) {
        metodo = 'put';
        url =  `/contatos/${this.id}`;
      }

      this.$emit('progresso', true);
      this.$axios({method: metodo, url: url, data: this.contato})
        .then((res) => {
          this.$emit('progresso', false);
          if (!this.id) this.contato = {};
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
