<template>
  <q-dialog v-model="dialog" :position="position">
    <q-card class="bg-negative text-white">
    <!-- <q-card class="bg-negative text-white" v-if="type === 'success'"> -->
      <q-card-section>
        {{ msg }}
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  props: [
    'dialog',
    'position',
    'type2',
    'msg'
  ],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
