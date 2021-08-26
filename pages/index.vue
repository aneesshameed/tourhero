<template>
  <v-container class="col-lg-8 col-xl-7 mt-15">
    <v-row>
      <v-col lg="10" xl="10">
        <v-container v-if="itienary != null" id="cntr_itienary">
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
        <v-btn id="btn_addFile" fab color="blue darken-4" @click="addFile">
          <v-icon class="mdi-rotate-90 white--text">mdi-attachment</v-icon>
        </v-btn>
        <div class="pa-2 ma-5">Add the YAML File</div>
        <input
          ref="fileInput"
          type="file"
          hidden
          name="file"
          @change="readFile"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import yaml from 'js-yaml'
import VClamp from 'vue-clamp'

export default {
  components: {
    VClamp,
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
      itienary: {
        id: 'swan-valley-to-jurien-bay-wine-tasting-sea-lion-safari-and-exploring-the-pinnacles-desert',
        projected_travel_date: 'May 2021',
        region_name: 'Swan Valley',
        title:
          'Swan Valley to Jurien Bay: Wine tasting, sea lion safari & exploring the Pinnacles Desert',
        description:
          '4 Days, 3 Nights – Escape the bustling city life to discover Western Australia’s picturesque region of Swan Valley before heading inland to the heritage town of Toodyay and up towards Cervantes and Jurien Bay. Delight your taste buds as you indulge in exquisite wines at your own private vineyard cottage, and sample local coffee and honey on a delightful horse-drawn wagon tour. Then, explore the region’s natural wonders — ride down pure white sand dunes, encounter the famous Pinnacles limestone towers formed 25,000 years ago, swim with sea lions, enter a mysterious cave, and look for adorable koalas in the wild.',
        sale_price_raw: 120000,
        base_currency: 'AUD',
        duration_days: 4,
        duration_nights: 3,
        countries_count: 1,
        activity_level: 'Moderate',
        group_size: '2 – 4',
        days: [
          {
            title:
              'Discover Western Australia’s oldest wine-growing region and Caversham Wildlife Park',
            description:
              'Begin at the **award-winning Upper Reach Winery** with an **all-inclusive a la carte breakfast** followed by a **guided winery tour**. Explore the working winery, taste aromatic wines, and find out why Swan Valley is the premier location for winemaking. Next, head to **Caversham Wildlife Park**, the largest privately-owned collection of native wildlife in Western Australia. Become friends with some of the 200 species at the park; **hand-feed the kangaroos**, **take a photo with a koala**, **meet a wombat** and discover more at their daily interactive farm shows. Towards the evening, take a relaxing stroll on the circuit walk trail at **Bells Rapids Park**. Soak in incredible views of the surrounding countryside and coastal plains and **spot beautiful grey kangaroos**, commonly seen at certain months of the year. Finally, unwind back at the Upper Reach Winery Cottage. This idyllic stay is set in the heart of the winery’s 20-acre vineyard for ultimate privacy. Best of all, Cellar Door, the winery’s wine tasting hideout, is located just a minute away.',
          },
          {
            title:
              'Explore one of the region’s oldest inland towns and go stargazing',
            description:
              'Start your morning with breakfast at the winery’s stunning Riverbrook Restaurant. Head to Cranleigh Street to kickstart your **horse-drawn wagon tour**. This unique experience takes you through the Valley for a gastronomical adventure of **coffee, honey, and wine tastings**. In the afternoon, explore the well-preserved heritage town of **Toodyay**. Uncover the fascinating stories of the town’s colonial past and wine and dine at the Toodyay’s charming selection of cafes and pubs. Then, make your way to **Pinnacles Edge Resort** to check in for your stay for the night. Your day doesn’t end there. Kickstart the night’s extraordinary adventures at **Gravity Discovery Centre & Observatory**, Western Australia’s premier science and education center for Physics and Astronomy. After dinner at the center, embark on a **world-class stargazing tour** to uncover the mysteries of space and beyond. Return to the resort after your tour to recharge for another exciting day tomorrow.',
          },
          {
            title:
              'Be inspired by nature at the Lancelin Sand Dunes, Nambung National Park, and Jurien Bay',
            description:
              'Fuel your morning with an add-on continental breakfast at the resort and begin your exciting day at the **Lancelin Sand Dunes**. Scale pure white sand dunes that rise to over three stories high and descend on sandboards, available for rent on-site. Next, explore **Nambung National Park’s famous limestone formations**. These otherworldly formations rose from the shifting yellow sands of the **Pinnacles Desert** over 25,000 years ago, creating one of Australia’s most intriguing landscapes. After a morning of exploration, visit the famous **Lobster Shack** for a beachfront lunch of Western Rock Lobsters and a **tour of the lobster factory**. Once you’ve had your fill, head to **Jurien Bay** for a **sea lion boat safari and snorkeling expedition**. Catch sight of adorable sea lions and dive into crystal clear waters to discover the wildlife beneath the surface. All equipment is supplied and light refreshments are also provided for a quick pick-me-up. Finally, return to the resort for dinner and rest.',
          },
          {
            title:
              'Visit Perth’s only tourist cave and see koalas at the Yanchep Koala Boardwalk',
            description:
              'Wake up to a hearty breakfast at the resort, then head to the **Turquoise Way Trail** for an invigorating morning bike ride through the picturesque trail. Soak in incredible views of the **Hill River estuary**, **pristine beaches**, and **turquoise blue waters**. Grab lunch along the way as you make your way to the elusive **Yanchep Crystal Caves**. Go underground for an educational tour of the ecology, geology, and history of Perth’s only tourist cave. Once you’ve resurfaced from the caves, stroll to the **Yanchep Koala Boardwalk**, located just a stone throw away. Say hello to the colony of koalas that call Yanchep home and be surrounded by lush bushland. Your journey concludes here as you head for Perth Airport for a flight bound for home.',
          },
        ],
        hotels: [
          {
            title: 'Upper Reach Winery Spa Cottage',
            description:
              'If you’re looking for a break from city life, the tranquil Upper Reach Winery Spa Cottage is the place to be. Recharge in your private cottage set in the heart of a 20-acre vineyard. With the winery’s wine tasting hideout, Cellar Door, and stellar restaurant, Riverbrook Restaurant, located just a few minutes away, a stay here is tranquility and peace at its best. The cottage comes with two queen-sized bedrooms in addition to its kitchen and living room spaces.',
          },
          {
            title: 'Pinnacles Edge Resort',
            description:
              'From the out-of-this-world Pinnacle Desert region to the crystal clear waters of Jurien Bay, the Pinnacles Edge Resort puts you in the center of the area’s best attractions. Recharge in the resort’s modern suites, complete with a private balcony, spa bath, and fully-equipped kitchen. If you’re feeling hungry, head to the resort’s on-site restaurant, the Europa Anchor, for a feast of fresh seafood and Mediterranian cuisine.',
          },
        ],
        included_in_price: [
          '4 Nights accommodation (2 people per room)',
          '1 night at Upper Reach Spa Cottage',
          '2 nights at Pinnacles Edge Resort',
          '2 x Breakfasts at Upper Reach Spa Cottage',
          'All activities',
          '24/7 guest support',
        ],
        excluded_in_price: ['All lunches and dinners'],
      },
    }
  },
  mounted() {
    this.buildRandomImageSet()
  },
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
            this.itienary = doc
          }.bind(this)
        )
      })
      reader.readAsText(this.$refs.fileInput.files[0])
    },
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
