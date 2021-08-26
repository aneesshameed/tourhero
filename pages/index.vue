<template>
  <v-container class="col-lg-8 col-xl-7 mt-15">
    <v-row>
      <v-col v-if="itienary != null" lg="10" xl="10">
        <ItienaryComponent />
      </v-col>
      <v-col align="center">
        <FilePicker />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'

import FilePicker from '@/components/file-picker.vue'
import ItienaryComponent from '@/components/itienary-component.vue'

export default {
  components: {
    ItienaryComponent,
    FilePicker,
  },
  computed: {
    ...mapState({
      itienary: (state) => state.itienary,
    }),
  },
  methods: {},
}
</script>
