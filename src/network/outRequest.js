import { outRequest } from "./request";

export function getGitHubCommits() {
  return outRequest({
    withCredentials: false,
    method: 'get',
    url: 'https://api.github.com/repos/kagurakana/kagurakana-blog/commits',
    params:{
      per_page:100
    }
  })
}
