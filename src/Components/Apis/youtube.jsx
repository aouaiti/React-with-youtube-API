import axios from "axios";
const KEY = "AIzaSyDR-Ep_q0n4L4Q9uNivYHlWE8_ueAf5C70";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
