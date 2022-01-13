<template>
  <v-app>
    <div class="d-flex flex-column flex-grow-1 align-center justify-center pa-2 pa-md-4">
      <div class="layout-content ma-auto tw-w-full">
        <nuxt />
      </div>
      <div class="overline mt-4">{{ appInfo.name }}</div>
    </div>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['appInfo'])
  }
}
</script>

<style scoped>
.layout-content {
  max-width: 480px;
}
</style>
