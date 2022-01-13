<template>
  <app-form v-slot="{ handleSubmit }">
    <v-card class="pa-1">
      <div class="text-center">
        <img src="/app-icon.svg" alt="" width="150px" />
      </div>
      <v-card-title class="justify-center">{{ $t('login.title') }}</v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <app-text-field
              v-model="username"
              :label="$t('login.username')"
              rules="required"
              @keyup.enter="submit"
              @change="resetErrors"
            />
          </v-col>
          <v-col cols="12">
            <app-password
              v-model="password"
              :label="$t('login.password')"
              rules="required"
              @keyup.enter="submit"
              @change="resetErrors"
            />
          </v-col>
          <v-col cols="12">
            <v-btn :loading="loading" color="primary" block @click="handleSubmit(submit)">
              {{ $t('login.button') }}
            </v-btn>
          </v-col>
        </v-row>
        <div v-if="errorProvider" class="error--text mt-2">{{ errorProviderMessages }}</div>
      </v-card-text>
    </v-card>
  </app-form>
</template>

<script>
import { mapState } from 'vuex'
import AppForm from '@/components/common/atoms/AppForm'
import AppTextField from '@/components/common/atoms/AppTextField'
import AppPassword from '@/components/common/atoms/AppPassword'

export default {
  components: {
    AppForm,
    AppTextField,
    AppPassword
  },
  layout: 'auth',
  auth: false,
  data() {
    return {
      loading: false,
      username: '',
      password: '',
      errorProvider: false,
      errorProviderMessages: ''
    }
  },
  computed: {
    ...mapState(['appInfo'])
  },
  methods: {
    submit() {
      this.loading = true
      this.signIn(this.username, this.password)
    },
    async signIn(username, password) {
      try {
        await this.$auth.loginWith('local', { data: { username, password } })
        this.$router.push('/')
        this.loading = false
      } catch (err) {
        this.errorProvider = true
        this.errorProviderMessages = err.response?.data?.error?.message
        this.loading = false
      }
    },
    resetErrors() {
      this.errorProvider = false
      this.errorProviderMessages = ''
    }
  }
}
</script>
