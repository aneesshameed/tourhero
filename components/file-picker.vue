<!--
  A file picker that helps to pick the yaml file and read it contents
  Once the contents are read then the vuex will be updated, which will then make the itineary component visible
-->
<template>
  <div>
    <v-btn id="btn_addFile" fab color="blue darken-4" @click="addFile">
      <v-icon class="mdi-rotate-90 white--text">mdi-attachment</v-icon>
    </v-btn>
    <div class="pa-2 ma-5">Add the YAML File</div>
    <input
      ref="fileInput"
      type="file"
      hidden
      name="file"
      accept="yaml/*"
      @change="readFile"
    />
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

      try {
        const fileName = this.$refs.fileInput.files[0].name
        this.$store.commit('set_itienary', null)

        if (fileName.split('.')[1] !== 'yaml') {
          this.$store.commit('set_error', 'Selected file is not a yaml one')
          return
        }

        const reader = new FileReader()
        reader.addEventListener('load', (evt) => {
          const data = evt.target.result
          yaml.loadAll(
            data,
            function (doc) {
              if (doc.days === undefined) {
                this.$store.commit('set_error', 'Thats not a right yaml file')
                return
              }
              this.$store.commit('set_itienary', doc)
              this.$store.commit('set_error', null)
            }.bind(this)
          )
        })
        reader.readAsText(this.$refs.fileInput.files[0])
      } catch (err) {
        this.$store.commit('set_error', err.message)
      }
    },
  },
}
</script>
