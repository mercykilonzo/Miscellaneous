const baseUrl = process.env.BASE_URL;

// GET factory by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const response = await fetch(`${baseUrl}/factories/${params.id}/`);
    if (!response.ok) {
      return new Response("Failed to fetch factory", { status: response.status });
    }
    const result = await response.json();
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response((error as Error).message, { status: 500 });
  }
}


