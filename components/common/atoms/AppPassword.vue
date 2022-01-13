<template>
  <validation-provider v-slot="{ errors }" :vid="vid" :rules="rules" :name="name || $attrs.label">
    <v-text-field
      v-model="innerValue"
      v-bind="$attrs"
      :type="show ? 'text' : 'password'"
      :error-messages="errors"
      :hide-details="errors.length === 0 && !!!$attrs.hint"
      :dense="dense"
      :outlined="outlined"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="show = !show"
      v-on="$listeners"
    >
      <template v-if="!!$attrs.label" slot="label">
        {{ $attrs.label }}
        <span v-if="isRequired" class="red--text">*</span>
      </template>
      <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />
    </v-text-field>
  </validation-provider>
</template>

<script>
import ControlMixin from '@/mixins/control'

export default {
  name: 'AppPassword',
  mixins: [ControlMixin],
  data() {
    return {
      show: false
    }
  }
}
</script>
