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

  </div>
</template>

<script>
export default {
  data () {
    return {
      user: [],
      email: '',
      password: ''
    }
  },
  beforeCreate () {
    console.log("Antes de Criar");
  },
  created () {
    this.$emit("altera-titulo", 'Login');
    console.log("Criou");
  },
  methods: {
    logar () {
      console.log("Clicou em Logar");
    }
  }
}
</script>
