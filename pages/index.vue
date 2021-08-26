<template>
  <v-container class="col-lg-8 col-xl-7 mt-15">
    <v-row>
      <v-col v-if="itienary != null" lg="10" xl="10">
        <v-container id="cntr_itienary">
          <v-row>
            <v-col>
              <div class="d-flex flex-row ml-5">
                <v-icon color="teal darken-1">mdi-map-marker-path</v-icon>
                <span class="ml-3 tw-font-bold blue--text text--darken-4"
                  >Itienary</span
                >
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="itienary-container">
                <v-container class="ma-0 pa-0">
                  <v-row>
                    <v-col cols="1" align="center">
                      <div style="height: 600px">
                        <div class="lines">
                          <template v-for="(__, index) in itienary.days">
                            <div :key="`dot_${index}`" class="dot"></div>
                            <div
                              v-if="index != itienary.days.length - 1"
                              :key="`line_${index}`"
                              class="line"
                            ></div>
                          </template>
                        </div>
                      </div>
                    </v-col>
                    <v-col>
                      <v-container class="ma-0 pa-0" style="height: 600px">
                        <v-row
                          v-for="(item, index) in itienary.days"
                          :key="index"
                        >
                          <v-col lg="4" xl="3">
                            <div class="d-flex flex-row tw-overflow-hidden">
                              <v-sheet
                                height="160"
                                width="220"
                                class="tw-rounded tw-overflow-hidden"
                              >
                                <v-carousel
                                  height="175"
                                  width="220"
                                  hide-delimiter-background
                                  delimiter-icon="mdi-minus"
                                  :show-arrows="false"
                                >
                                  <v-carousel-item
                                    v-for="(img, i) in randomImageSet[index]"
                                    :key="i"
                                  >
                                    <v-img
                                      :src="img"
                                      cover
                                      height="160"
                                      width="220"
                                      class="tw-rounded tw-overflow-hidden"
                                    ></v-img>
                                  </v-carousel-item>
                                </v-carousel>
                              </v-sheet>
                            </div>
                          </v-col>
                          <v-col xl="8">
                            <div class="d-flex flex-column mx-5">
                              <div class="d-flex flex-row">
                                <span class="tw-font-bold tw-w-24"
                                  >Day {{ index + 1 }}</span
                                >
                                <span class="ml-10 tw-font-bold">{{
                                  item.title
                                }}</span>
                              </div>
                              <div class="my-3 grey--text text--darken-1">
                                <v-clamp autoresize :max-lines="3">{{
                                  item.description
                                }}</v-clamp>
                              </div>
                              <span
                                class="teal--text text--darken-1 tw-underline"
                                >See More</span
                              >
                            </div>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col align="center">
        <FilePicker />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import VClamp from 'vue-clamp'

import { mapState } from 'vuex'

import FilePicker from '@/components/file-picker.vue'

export default {
  components: {
    VClamp,
    FilePicker,
  },
  data() {
    return {
      images: [
        'https://picsum.photos/id/1015/160/220',
        'https://picsum.photos/id/1023/160/220',
        'https://picsum.photos/id/1016/160/220',
        'https://picsum.photos/id/1023/160/220',
        'https://picsum.photos/id/1036/160/220',
        'https://picsum.photos/id/1040/160/220',
        'https://picsum.photos/id/1045/160/220',
        'https://picsum.photos/id/1049/160/220',
        'https://picsum.photos/id/1058/160/220',
        'https://picsum.photos/id/1060/160/220',
        'https://picsum.photos/id/1063/160/220',
        'https://picsum.photos/id/1067/160/220',
        'https://picsum.photos/id/1074/160/220',
        'https://picsum.photos/id/1077/160/220',
        'https://picsum.photos/id/1079/160/220',
        'https://picsum.photos/id/1083/160/220',
        'https://picsum.photos/id/116/160/220',
        'https://picsum.photos/id/12/160/220',
        'https://picsum.photos/id/124/160/220',
        'https://picsum.photos/id/130/160/220',
      ],
      randomImageSet: [],
    }
  },
  computed: {
    ...mapState({
      itienary: (state) => state.itienary,
    }),
  },
  watch: {
    itienary() {
      this.buildRandomImageSet()
    },
  },
  methods: {
    buildRandomImageSet() {
      // Generate random image set of 3 images per set from the list of given in images
      for (let i = 0; i < this.itienary.days.length; i++) {
        const newSet = []
        while (newSet.length < 3) {
          const random = Math.floor(Math.random() * 20) // Between 1 and 20
          newSet.push(this.images[random])
        }
        this.randomImageSet.push(newSet)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.itienary-container {
  height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
}
.itienary-container::-webkit-scrollbar {
  width: 5px;
  background: #80cbc4;
  border-radius: 20px;
}

.itienary-container::-webkit-scrollbar-thumb {
  background: #009688;
  border-radius: 20px;
}

.lines {
  margin-top: 80px;
  width: 14px;

  .dot {
    width: 14px;
    height: 14px;
    background: #d1d6e6;
    border-radius: 7px;
  }

  .line {
    height: 180px;
    width: 2px;
    background: #d1d6e6;
  }
}
</style>
