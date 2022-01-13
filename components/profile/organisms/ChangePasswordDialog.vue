<template>
  <form-dialog
    v-model="visible"
    :loading="loading"
    :title="$t('menu.changePassword')"
    :submit-text="$t('common.action.send')"
    width="400px"
    @submit="handleSubmit"
  >
    <template slot="content">
      <v-row dense>
        <v-col cols="12">
          <app-password
            v-model="form.password"
            :label="$t('changePassword.model.password')"
            vid="password"
            rules="required"
          />
        </v-col>
        <v-col cols="12">
          <app-password
            v-model="form.new_password"
            :label="$t('changePassword.model.newPassword')"
            vid="new_password"
            rules="required"
          />
        </v-col>
        <v-col cols="12">
          <app-password
            v-model="form.new_password_confirmation"
            :label="$t('changePassword.model.newPasswordConfirmation')"
            vid="new_password_confirmation"
            rules="required|confirmed:new_password"
          />
        </v-col>
      </v-row>
    </template>
  </form-dialog>
</template>

<script>
import { defineComponent, reactive, ref, toRef, useContext, watch } from '@nuxtjs/composition-api'
import FormDialog from '@/components/common/organisms/FormDialog'
import AppPassword from '@/components/common/atoms/AppPassword'

export default defineComponent({
  name: 'ChangePasswordDialog',
  components: {
    FormDialog,
    AppPassword
  },
  setup(_, { root }) {
    const initialState = () => ({
      form: {
        password: '',
        new_password: '',
        new_password_confirmation: ''
      }
    })

    const { $api, $toast } = useContext()
    const visible = ref(false)
    const loading = ref(false)
    const state = reactive(initialState())

    watch(visible, (val) => {
      if (!val) {
        Object.assign(state, initialState())
      }
    })

    const open = () => {
      visible.value = true
    }
    const handleSubmit = () => {
      loading.value = true
      $api.profile
        .changePassword(state.form)
        .then(() => {
          $toast.success(root.$t('common.notice.success'))
          visible.value = false
        })
        .finally(() => {
          loading.value = false
        })
    }

    return {
      visible,
      loading,
      form: toRef(state, 'form'),
      open,
      handleSubmit
    }
  }
})
</script>
