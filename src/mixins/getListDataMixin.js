//根据tag返回listData
import { getBlogList } from "network/blog";
export default {
  data() {
    return {
      tag: "",
      listData: [],
    }
  },
  methods: {
    getListData(tag) {
      return getBlogList(tag).then(list => {
        this.listData = list.data;
        // console.log(this.listData);
      });
    }
  },
}