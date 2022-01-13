<template>
  <app-form v-slot="{ handleSubmit }">
    <v-card>
      <v-card-title>
        <slot name="title">
          <span class="text-h5">{{ title }}</span>
        </slot>
      </v-card-title>
      <v-card-text class="pt-2">
        <slot name="content" />
      </v-card-text>
      <v-card-actions>
        <v-btn v-if="canDelete" color="error" class="px-2" @click="$emit('delete')">
          {{ deleteText || $t('common.action.delete') }}
        </v-btn>
        <v-spacer />
        <v-btn :disabled="loading" class="px-2 mr-1" text @click="$emit('cancel')">
          {{ cancelText || $t('common.action.cancel') }}
        </v-btn>
        <v-btn :loading="loading" color="primary" class="px-2" @click="handleSubmit(submit)">
          <span v-if="submitText">{{ submitText }}</span>
          <span v-else>
            {{ isUpdate ? updateText || $t('common.action.update') : createText || $t('common.action.create') }}
          </span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </app-form>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import AppForm from '@/components/common/atoms/AppForm'

export default defineComponent({
  name: 'FormCard',
  components: {
    AppForm
  },
  props: {
    loading: Boolean,
    canDelete: Boolean,
    isUpdate: Boolean,
    title: {
      type: String,
      default: null
    },
    submitText: {
      type: String,
      default: null
    },
    createText: {
      type: String,
      default: null
    },
    updateText: {
      type: String,
      default: null
    },
    deleteText: {
      type: String,
      default: null
    },
    cancelText: {
      type: String,
      default: null
    }
  },
  setup(_, { emit }) {
    const submit = () => {
      emit('submit')
    }

    return {
      submit
    }
  }
})
</script>
