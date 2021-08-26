import { createLocalVue, shallowMount, config } from '@vue/test-utils'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)

import FilePicker from '@/components/file-picker'

describe('FilePicker', () => {
  let wrapper
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
    })
  })

  test('File picker is a Vue instance', () => {
    wrapper = shallowMount(FilePicker, {
      localVue,
      store,
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('File picker button is available', () => {
    wrapper.find('#btn_addFile').trigger('click')
  })
})
