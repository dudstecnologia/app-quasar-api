<template>
  <div class="q-pa-md">
    <q-form
      @submit="logar"
      class="q-gutter-md"
    >
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

      <div class="q-gutter-sm">
        <q-btn label="Entrar" type="submit" color="primary" class="full-width" />
      </div>

    </q-form>

    <br>

    <q-btn to="registro" label="Registrar" type="reset" color="secondary" class="full-width" />

  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      tipoSenha: true
    }
  },
  created () {
    this.$emit("altera-titulo", 'Login');
  },
  methods: {
    logar () {
      this.$emit('progresso', true);
      this.$axios.post('/login', this.user)
          .then((res) => {
            this.$emit('progresso', false);
            this.$q.localStorage.set('name', res.data.name)
            this.$q.localStorage.set('email', res.data.email)
            this.$q.localStorage.set('token', res.data.token)
            this.$router.push('/app');
          })
          .catch((err) => {
            this.$emit('progresso', false);
            if(err.response.status == 401) {
              this.$toast.error('Não foi possível fazer o login, verifique seus dados');
            } else if (err.response.status == 422){
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
