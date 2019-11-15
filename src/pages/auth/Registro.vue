<template>
  <div class="q-pa-md">
    <q-form
      @submit="registrar"
      class="q-gutter-md"
    >
      <q-input
        outlined
        v-model="name"
        label="Seu nome *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Informe o nome']"
      />

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

      <q-input
        outlined
        v-model="password_confirmation"
        label="Confirme a Senha *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Informe a senha']"
      />

      <div class="q-gutter-sm">
        <q-btn label="Registrar" type="submit" color="primary" class="full-width" />
      </div>

    </q-form>

    <br>

    <q-btn to="login" label="Voltar" type="reset" color="secondary" class="full-width" />

  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  created () {
    this.$emit("altera-titulo", 'Registro');
  },
  methods: {
    registrar () {
      console.log("Clicou em Registrar")
    }
  }
}
</script>
