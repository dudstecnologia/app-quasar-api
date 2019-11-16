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

    <!-- <br>

    <q-btn @click="back" label="Teste Voltar" type="reset" color="secondary" class="full-width" />
 -->
    {{ token }}

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
      token: 'teste token'
    }
  },
  beforeCreate () {
    // console.log("Antes de Criar");
    // try {
    //   if(this.$q.localStorage.getItem('user').token) {
    //     this.$router.push('/');
    //   }
    // } catch (e) {}
  },
  created () {
    this.$emit("altera-titulo", 'Login');
    // console.log("Criou");
    //if(this.$q.localStorage.getItem('user').token) {
      // console.log("Possui token")
    //}
    this.token = this.$q.localStorage.getItem('token');
  },
  methods: {
    logar () {
      this.$axios.post('http://192.168.1.20:8000/api/login', this.user)
          .then((res) => {
            // console.log(res);
            // this.$q.localStorage.set('token', res.data)
            // this.$toast.success('Salvo com sucesso');
            // this.$router.push('/');

            this.$q.localStorage.set('name', res.data.name)
            this.$q.localStorage.set('email', res.data.email)
            this.$q.localStorage.set('token', res.data.token)

            this.$router.push('/app');
          })
          .catch((err) => {
            console.log(err);
            this.$toast.error('Ocorreu um erro');
          });
    },
    back () {
      console.log("Tentou Voltar Do Login")
      history.back();
    }
  }
}
</script>
