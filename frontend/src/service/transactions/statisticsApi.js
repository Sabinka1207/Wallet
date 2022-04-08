import axios from "axios";

/* axios.defaults.baseURL = `http://localhost:3001/api/transactions/`; */

async function fetchStatistics() {
  const { data } = await axios.get("statistics");
  return data;
}
export default fetchStatistics;
