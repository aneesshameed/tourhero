<template>
  <div>
    <v-btn id="btn_addFile" fab color="blue darken-4" @click="addFile">
      <v-icon class="mdi-rotate-90 white--text">mdi-attachment</v-icon>
    </v-btn>
    <div class="pa-2 ma-5">Add the YAML File</div>
    <input ref="fileInput" type="file" hidden name="file" @change="readFile" />
  </div>
</template>
<script>
import yaml from 'js-yaml'
export default {
  name: 'FilePicker',
  methods: {
    addFile() {
      const fileInput = this.$refs.fileInput
      fileInput.value = null
      if (fileInput && document.createEvent) {
        const evt = document.createEvent('MouseEvents')
        evt.initEvent('click', true, false)
        fileInput.dispatchEvent(evt)
      }
    },
    readFile() {
      // Reads YAML file and update the itienary details
      const reader = new FileReader()
      reader.addEventListener('load', (evt) => {
        const data = evt.target.result
        yaml.loadAll(
          data,
          function (doc) {
            this.$store.commit('set_itienary', doc)
          }.bind(this)
        )
      })
      reader.readAsText(this.$refs.fileInput.files[0])
    },
  },
}
</script>
