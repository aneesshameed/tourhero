import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)

import index from '@/pages/index'

import FilePicker from '@/components/file-picker'
import ItienaryComponent from '@/components/itienary-component'

describe('index', () => {
  let wrapper
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: { itienary: null },
    })
  })

  test('App is a Vue instance', () => {
    wrapper = shallowMount(index, {
      store,
      localVue,
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('Has file picker button', () => {
    expect(wrapper.find(FilePicker).exists()).toBeTruthy()
  })

  test('Itineary container is hidden at start', () => {
    expect(wrapper.find(ItienaryComponent).exists()).toBe(false)
  })
})
