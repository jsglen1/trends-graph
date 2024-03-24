import { type ApiResponseTrend } from "@/interfaces/trend";
const googleTrends = require("google-trends-api");

export async function POST(request: Request) {
  const { msj } = await request.json();

  return googleTrends
    .autoComplete({ keyword: msj })
    .then(function (results: any) {
      const newData: ApiResponseTrend = JSON.parse(results);
      return Response.json({ results: newData.default.topics });
    })
    .catch(function (err: any) {
      console.error(err);
      return Response.json({ results: "null" });
    });
}
