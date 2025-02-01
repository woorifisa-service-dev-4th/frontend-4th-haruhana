import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "http://34.64.250.183:8080/api/statistics/weekly"
  );
  const data = await response.json();

  return NextResponse.json(data);
}
