
import type { NextApiRequest, NextApiResponse } from "next";
const url = "https://opentdb.com/api.php?amount=20";


const fetchInfo = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};


export default  async function questions(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiData = await fetchInfo()
  res.status(200).json(apiData);
  console.log(apiData.results);
}

