import { ApiTrendingSearchesResponse } from "@/interfaces/trend";

const googleTrends = require("google-trends-api");

export async function POST(request: Request) {
  const { msj } = await request.json();

  // Obtener la fecha actual
  const currentDate = new Date();

  // Formatear la fecha en el formato YYYY-MM-DD requerido por la API de Google Trends
  const formattedDate = currentDate.toISOString().split("T")[0];

  return googleTrends.dailyTrends(
    {
      trendDate: formattedDate,
      geo: "US",
    },
    function (err: any, results: any) {
      if (err) {
        // console.log(err);
        return Response.json({ results: err });
      } else {
        const data: ApiTrendingSearchesResponse = JSON.parse(results);
        //console.log(data);
        return Response.json({ results: data });
      }
    }
  );
}
