export const state = () => ({
  itienary: null,
})

export const mutations = {
  set_itienary(state, data) {
    state.itienary = data
  },
}
