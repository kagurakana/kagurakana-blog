import { getValidUsername } from "@/network/user";

export default {
  winWidth(state) {
    return state.WIN_WIDTH;
  },
  cliWidth(state) {
    return state.CLI_WIDTH;
  },
  isMobile(state) {
    return state.CLI_WIDTH < 650 ? true : false;
    // return state.CLI_WIDTH < 600 ? true:false
  },
  search(state) {
    return state.search;
  },
  scrollData(state) {
    return state.scrollData;
  },
  loginCheckUsername(state) {
    return state.user.username;
  },
  loginCheckEmail(state) {
    return state.user.email;
  },
  isAdmin(state) {
    return state.isAdmin;
  },
};
