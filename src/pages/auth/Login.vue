<template>
  <div class="q-pa-md">
    <q-form
      @submit="logar"
      class="q-gutter-md"
    >
      <q-input
        outlined
        v-model="email"
        label="Seu email *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Informe o email']"
      />

      <q-input
        outlined
        v-model="password"
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

    {{ teste }}

  </div>
</template>

<script>
export default {
  data () {
    return {
      user: [],
      email: '',
      password: '',
      teste: ''
    }
  },
  created () {
    this.$emit("altera-titulo", 'Login');
  },
  mounted() {
      this.teste = 'montou o componente';
      if (this.$q.platform.is.cordova) {
        document.addEventListener("backbutton", this.onClickBackButton, false);
      }
  },
  methods: {
    logar () {
      // console.log("Clicou em Entrar");
      navigator.app.exitApp();
    },
    // onBackKey() {
    //   this.teste = 'Clicou em Voltar'
    //   console.log("Clicou em Voltar");
    //   navigator.app.exitApp();
    // },
    onClickBackButton() {
      this.teste = 'Clicou em Voltar'
      navigator.app.exitApp();
    }
  }
}
</script>
