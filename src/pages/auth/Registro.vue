<template>
  <div class="q-pa-md">

    <!-- <q-dialog v-model="dialog" :position="position">
      <q-card class="bg-negative text-white">
        <q-card-section>
          Mensagem de Teste
        </q-card-section>
      </q-card>
    </q-dialog> -->

    <!-- <dialog-toast dialog='true'
      position="top"
      type='true'
      msg="Mensagem de Teste"/> -->

    <q-form
      @submit="registrar"
      class="q-gutter-md"
    >
      <q-input
        outlined
        v-model="user.name"
        label="Seu nome *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Informe o nome']"
      />

      <q-input
        outlined
        v-model="user.email"
        label="Seu email *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Informe o email']"
      />

      <q-input
        outlined
        v-model="user.password"
        label="Sua Senha *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Informe a senha']"
      />

      <q-input
        outlined
        v-model="user.password_confirmation"
        label="Confirme a Senha *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Informe a senha']"
      />

      <div class="q-gutter-sm">
        <q-btn label="Registrar" type="submit" color="primary" class="full-width" />
      </div>

    </q-form>

    <br>

    <!-- <q-btn to="login" label="Voltar" type="reset" color="secondary" class="full-width" /> -->
    <q-btn v-go-back="'/'" label="Voltar" type="reset" color="secondary" class="full-width" />

    {{ nome }}

  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      nome: ''
    }
  },
  created () {
    this.$emit("altera-titulo", 'Registro');
    // this.$toast.success('Teste de mensagem', '')
    // this.$toast.error('Teste de mensagem', '')
    this.nome = this.$q.localStorage.getItem('token');
    // this.$router.push('/app');
  },
  methods: {
    registrar () {
      this.$axios.post('http://127.0.0.1:8000/api/register', this.user)
          .then((res) => {
            console.log(res);
            // this.$q.localStorage.set('user', res.data)
            this.$q.localStorage.set('name', res.data.name)
            this.$q.localStorage.set('email', res.data.email)
            this.$q.localStorage.set('token', res.data.token)

            this.$router.push('/app');

            this.$toast.success('Salvo com sucesso');

          })
          .catch((err) => {
            console.log(err);
            this.$toast.error('Ocorreu um erro');
          });
    }
  }
}
</script>
