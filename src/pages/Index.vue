<template>
  <q-page class="flex flex-center">
    <!-- <p>Index: {{ count }}</p> -->
    <p>Tela Inicial : {{ name }}</p>

    <q-btn to="login" label="Login" type="reset" color="secondary" class="full-width" />
    <q-btn @click="logoff" label="Sair" type="reset" color="secondary" class="full-width" />
    <!-- <q-btn @click="increment" label="+" type="reset" color="secondary" />
    <q-btn @click="decrement" label="-" type="reset" color="secondary" /> -->
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  beforeCreate () {
    // this.$emit("altera-titulo", 'Login');
    // console.log("Criou");

    // try {
    //   if(!this.$q.localStorage.getItem('user').token) {
    //     this.$router.push('/login');
    //   }
    // } catch (e) {
    //   this.$router.push('/login');
    // }
  },
  created () {
    this.name = this.$q.localStorage.getItem('name');
  },
  methods: {
    back () {
      history.back();
    },
    logoff () {
      localStorage.removeItem('name')
      localStorage.removeItem('email')
      localStorage.removeItem('token')

      this.$router.push('/');
    }/*,
    increment () {
      console.log('Vai incrementar');
      this.$store.dispatch('incrementCount');

    },
    decrement () {
      console.log('Vai decrementar');
    }
    */
  }/*,
  computed: {
    count () {
      return this.$store.state.auth.count;
    }
  }*/
}
</script>
