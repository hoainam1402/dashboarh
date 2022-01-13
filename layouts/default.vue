<template>
  <v-app>
    <div class="d-flex flex-grow-1">
      <!-- Navigation -->
      <v-navigation-drawer v-model="drawer" width="200" class="elevation-1" app floating>
        <!-- Navigation menu info -->
        <template #prepend>
          <div class="pa-2">
            <div class="title font-weight-bold primary--text">{{ appInfo.name | uppercase }}</div>
          </div>
        </template>

        <!-- Navigation menu -->
        <main-menu :menu="navigation.menu" />
      </v-navigation-drawer>

      <!-- Toolbar -->
      <v-app-bar app>
        <v-card class="d-flex flex-grow-1 align-center pa-0 ma-0" flat>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
          <v-spacer />
          <toolbar-user @change-password="handleChangePassword" />
        </v-card>
      </v-app-bar>

      <v-main>
        <v-container class="fill-height">
          <v-layout>
            <nuxt />
          </v-layout>
        </v-container>

        <v-footer app inset>
          <v-spacer />
          <div class="overline">
            {{ $t('footer.poweredBy') }}
            <v-icon small color="primary">mdi-copyright</v-icon>
            <strong class="primary--text">{{ appInfo.name }}</strong>
          </div>
        </v-footer>
      </v-main>
    </div>

    <change-password-dialog ref="changePasswordDialog" />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import MainMenu from '@/components/navigation/MainMenu'
import ToolbarUser from '@/components/toolbar/ToolbarUser'
import ChangePasswordDialog from '@/components/profile/organisms/ChangePasswordDialog'
import config from '@/configs'

export default {
  components: {
    MainMenu,
    ToolbarUser,
    ChangePasswordDialog
  },
  data() {
    return {
      drawer: null,
      navigation: config.navigation
    }
  },
  computed: {
    ...mapState(['appInfo'])
  },
  methods: {
    handleChangePassword() {
      this.$refs.changePasswordDialog.open()
    }
  }
}
</script>
