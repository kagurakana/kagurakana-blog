import _ from 'lodash'
export default {
  data() {
    return {
      routerErrTip: false,
      timeout: 3000,
      second: 0,
      nowRoute: '',
      debouncedShowErrTip: _.throttle((tag) => { this.showErrTip(tag) }, 3000, { leading: true })
    }
  },
  methods: {
    showErrTip(tag) {
      this.second = this.timeout / 1000
      this.nowRoute = tag
      this.routerErrTip = true;
      if (timer1) {
        clearInterval(timer1)
        clearTimeout(timer2)
      }
      let timer1 = setInterval(() => {
        this.second -= 1;
      }, 1000);
      let timer2 = setTimeout(() => {
        clearInterval(timer1)
      }, this.timeout);
    },
  },
}