/*
  Stores itienary details that is being passed in from the FilePicker 
*/
export const state = () => ({
  itienary: null,
})

export const mutations = {
  set_itienary(state, data) {
    state.itienary = data
  },
}
