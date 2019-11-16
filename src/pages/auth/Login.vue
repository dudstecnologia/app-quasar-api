<template>
  <div class="q-pa-md">
    <q-form
      @submit="logar"
      class="q-gutter-md"
    >
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
      }
    }
  },
  beforeCreate () {
    // console.log("Antes de Criar");
    try {
      if(this.$q.localStorage.getItem('user').token) {
        this.$router.push('/');
      }
    } catch (e) {}
  },
  created () {
    this.$emit("altera-titulo", 'Login');
    // console.log("Criou");
    //if(this.$q.localStorage.getItem('user').token) {
      // console.log("Possui token")
    //}
  },
  methods: {
    logar () {
      this.$axios.post('http://127.0.0.1:8000/api/login', this.user)
          .then((res) => {
            // console.log(res);
            this.$q.localStorage.set('user', res.data)
            this.$toast.success('Salvo com sucesso');
            this.$router.push('/');
          })
          .catch((err) => {
            console.log(err);
            this.$toast.error('Ocorreu um erro');
          });
    }
  }
}
</script>
