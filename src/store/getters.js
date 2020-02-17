export default {
  winWidth(state) {
    return state.WIN_WIDTH
  },
  cliWidth(state) {
    return state.CLI_WIDTH
  },
  isMobile(state){
    return state.CLI_WIDTH < 650 ? true:false
  }
}