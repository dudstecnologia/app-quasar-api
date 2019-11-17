<template>
  <q-page padding>
    <q-form
      @submit="atualizar"
      class="q-gutter-md" >

      <img :src="imagemSelecionada">

      <img :src="novaImagem">

      <q-input
        outlined
        v-model="user.name"
        label="Seu nome *"
        lazy-rules />

      <q-input
        type="email"
        outlined
        v-model="user.email"
        label="Seu email *"
        lazy-rules />

      <q-input
        :type="tipoSenha ? 'password' : 'text'"
        outlined
        v-model="user.password"
        label="Sua Senha *"
        lazy-rules >
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
        lazy-rules />

      <div class="q-gutter-sm">
        <q-btn label="Atualizar" type="submit" color="primary" class="full-width" />
      </div>

    </q-form>

    <br>

    <q-btn @click="captureImage" label="Teste Crop" color="positive" class="full-width" />

    <p>{{ imagemSelecionada }}</p>
    <p>{{ novaImagem }}</p>
  </q-page>
</template>

<script>

// document.addEventListener('deviceready', () => {
//   // it's only now that we are sure
//   // the event has triggered
// }, false)

export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      tipoSenha: true,
      user_id: '',
      imagemSelecionada: '',
      novaImagem: '',
    }
  },
  created () {
    this.getUser();
  },
  methods: {
    getUser () {
      this.$emit('progresso', true);
      this.$axios.get('/user', this.user)
        .then((res) => {
          this.user.name = res.data.name;
          this.user.email = res.data.email;
          this.user_id = res.data.id;

          this.$emit('progresso', false);
        })
        .catch((err) => {
          console.log(err);
          this.$emit('progresso', false);
        });
    },
    captureImage () {
      navigator.camera.getPicture(imgData => { // on success
          // this.imagemSelecionada = `data:image/jpeg;base64,${imgData}`
          this.imagemSelecionada = imgData;

          var app = this;

          plugins.crop(function success (data) {
              // var image = document.getElementById('myImage');
              // image.src = data;
              app.novaImagem = `data:image/jpeg;base64,${data}`;
              // app.imagemSelecionada = data;
              // app.novaImagem = data.substring(0, data.indexOf('?'));
              // app.novaImagem = data;
          },
          function fail () {}, imgData, { quality: 100 });

        }, () => {}, {
          quality: 50,
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
          mediaType: Camera.MediaType.PICTURE,
          encodingType: Camera.EncodingType.JPEG,
          saveToPhotoAlbum: true,
        }
      )
    },
    atualizar () {
      /*
      this.$axios.post('/register', this.user)
        .then((res) => {
          this.$q.localStorage.set('name', res.data.name)
          this.$q.localStorage.set('email', res.data.email)

          this.$toast.success('Atualizado com sucesso');
        })
        .catch((err) => {
          if (err.response.status == 422){
            this.teste = Object.values(err.response.data.errors).flat();
            this.$toast.error(this.teste[0]);
          } else {
            this.$toast.error('Ocorreu um erro');
          }
        });
      */
    }
  }
}
</script>
