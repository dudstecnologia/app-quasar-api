<template>
  <div class="q-pa-md">

    <q-form
      @submit="registrar"
      class="q-gutter-md" >

      <q-input
        outlined
        v-model="user.name"
        label="Seu nome *"
        required />

      <q-input
        type="email"
        outlined
        v-model="user.email"
        label="Seu email *"
        required />

      <q-input
        :type="tipoSenha ? 'password' : 'text'"
        outlined
        v-model="user.password"
        label="Sua Senha *"
        required >
        <template v-slot:append>
          <q-icon
            :name="tipoSenha ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="tipoSenha = !tipoSenha"
          />
        </template>
      </q-input>

      <q-input
        :type="tipoSenha ? 'password' : 'text'"
        outlined
        v-model="user.password_confirmation"
        label="Confirme a Senha *"
        required />

      <div class="q-gutter-sm">
        <q-btn label="Registrar" type="submit" color="primary" class="full-width" />
      </div>

    </q-form>

    <br>

    <q-btn v-go-back="'/'" label="Voltar" type="reset" color="secondary" class="full-width" />
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
      tipoSenha: true
    }
  },
  created () {
    this.$emit("altera-titulo", 'Registro');
  },
  methods: {
    registrar () {
      this.$emit('progresso', true);
      this.$axios.post('/register', this.user)
          .then((res) => {
            this.$emit('progresso', false);
            this.$q.localStorage.set('name', res.data.name)
            this.$q.localStorage.set('email', res.data.email)
            this.$q.localStorage.set('token', res.data.token)

            this.$toast.success('Cadastrado com sucesso');

            this.$router.replace('/app');
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
