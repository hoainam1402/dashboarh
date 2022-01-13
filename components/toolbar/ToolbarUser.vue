<template>
  <v-menu transition="slide-y-transition" offset-y left>
    <template #activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>

    <!-- user menu list -->
    <v-list nav dense>
      <v-list-item
        v-for="(item, index) in menu"
        :key="index"
        :to="item.link"
        :exact="item.exact"
        :disabled="item.disabled"
        link
      >
        <v-list-item-icon>
          <v-icon :class="{ 'grey--text': item.disabled }" small>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.key ? $t(item.key) : item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click="$emit('change-password')">
        <v-list-item-icon>
          <v-icon small>mdi-account-key-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ $t('menu.changePassword') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-1" />

      <v-list-item @click="$auth.logout()">
        <v-list-item-icon>
          <v-icon small>mdi-logout-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ $t('menu.logout') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import config from '@/configs'

export default {
  data() {
    return {
      menu: config.toolbar.user
    }
  }
}
</script>
