import { ApiTimelineDataResponse } from "@/interfaces/trend";

const googleTrends = require("google-trends-api");

export async function POST(request: Request) {
  const { msj } = await request.json();

  return googleTrends
    .interestOverTime({ keyword: msj, geo: "CO" })
    .then(function (results: any) {
      const newData: ApiTimelineDataResponse = JSON.parse(results);
      // console.log(JSON.stringify(newData));
      return Response.json({ results: newData });
    })
    .catch(function (err: any) {
      console.error(err);
      return Response.json({ results: null });
    });
}
