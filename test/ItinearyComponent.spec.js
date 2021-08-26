import { createLocalVue, shallowMount, config } from '@vue/test-utils'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)

import ItienaryComponent from '@/components/itienary-component'

describe('ItienaryComponent', () => {
  let wrapper
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        itienary: {
          days: [
            {
              title: 'foo',
              description:
                'Begin at the **award-winning Upper Reach Winery** with an **all-inclusive a la carte breakfast** followed by a **guided winery tour**. Explore the working winery, taste aromatic wines, and find out why Swan Valley is the premier location for winemaking. Next, head to **Caversham Wildlife Park**, the largest privately-owned collection of native wildlife in Western Australia. Become friends with some of the 200 species at the park; **hand-feed the kangaroos**, **take a photo with a koala**, **meet a wombat** and discover more at their daily interactive farm shows. Towards the evening, take a relaxing stroll on the circuit walk trail at **Bells Rapids Park**. Soak in incredible views of the surrounding countryside and coastal plains and **spot beautiful grey kangaroos**, commonly seen at certain months of the year. Finally, unwind back at the Upper Reach Winery Cottage. This idyllic stay is set in the heart of the winery’s 20-acre vineyard for ultimate privacy. Best of all, Cellar Door, the winery’s wine tasting hideout, is located just a minute away.',
            },
            {
              title: 'foo',
              description:
                'Begin at the **award-winning Upper Reach Winery** with an **all-inclusive a la carte breakfast** followed by a **guided winery tour**. Explore the working winery, taste aromatic wines, and find out why Swan Valley is the premier location for winemaking. Next, head to **Caversham Wildlife Park**, the largest privately-owned collection of native wildlife in Western Australia. Become friends with some of the 200 species at the park; **hand-feed the kangaroos**, **take a photo with a koala**, **meet a wombat** and discover more at their daily interactive farm shows. Towards the evening, take a relaxing stroll on the circuit walk trail at **Bells Rapids Park**. Soak in incredible views of the surrounding countryside and coastal plains and **spot beautiful grey kangaroos**, commonly seen at certain months of the year. Finally, unwind back at the Upper Reach Winery Cottage. This idyllic stay is set in the heart of the winery’s 20-acre vineyard for ultimate privacy. Best of all, Cellar Door, the winery’s wine tasting hideout, is located just a minute away.',
            },
          ],
        },
      },
    })
  })

  test('ItinearyComponent is a Vue instance', () => {
    wrapper = shallowMount(ItienaryComponent, {
      localVue,
      store,
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('Rows are displaying', () => {
    expect(wrapper.findAll('.itienary_row').length).toBe(2)
  })

  test('Day carousel has three images', () => {
    const items = wrapper.findAll('.itienary_day_carousel_images').length
    expect(wrapper.findAll(`.day_carousel_image`).length).toBe(3 * items)
  })
})
