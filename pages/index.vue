<!--
  Displays the itineary and file picker side by side
  There are a total of two components. ItienaryComponent that displays the itineary days data and 
  FilePicker which help to plick and read the file.
  Since, itineary will be null at the start of the app, the #col_itineary will can be made invisibe.
  This makes the FilePicker components center aligned.

  When the file has been loaded and the details read, then itienary will get populates which makes the #col_itineary
  visible and everything will be aligned perfectly
-->
<template>
  <v-container class="col-lg-8 col-xl-7 mt-15">
    <v-row>
      <v-col v-if="itienary != null" id="col_itineary" lg="10" xl="10">
        <ItienaryComponent />
      </v-col>
      <v-col id="col_filepicker" align="center">
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
}
</script>
