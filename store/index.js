/*
  Stores itienary details that is being passed in from the FilePicker 
*/
export const state = () => ({
  itienary: null,
  error: null,
})

export const mutations = {
  set_itienary(state, data) {
    state.itienary = data
  },
  set_error(state, data) {
    state.error = data
  },
}
