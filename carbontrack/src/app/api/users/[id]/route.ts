// const baseUrl = process.env.BASE_URL;

// export async function GET(request: Request, { params }: { params: { id: string } }) {
//   try {
//     const response = await fetch(`${baseUrl}/users/${params.id}/`);
//     if (!response.ok) {
//       return new Response("Failed to fetch user", { status: response.status });
//     }
//     const result = await response.json();
//     return new Response(JSON.stringify(result), { status: 200 });
//   } catch (error) {
//     return new Response((error as Error).message, { status: 500 });
//   }
// }

// export async function PUT(request: Request, { params }: { params: { id: string } }) {
//   try {
    
//     const body = await request.json();
//     const response = await fetch(`${baseUrl}/users/${params.id}/`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: body,
//     });
//     if (!response.ok) {
//       return new Response("Failed to update user", { status: response.status });
//     }
//     const result = await response.json();
//     return new Response(JSON.stringify(result), { status: 200 });
//   } catch (error) {
//     return new Response((error as Error).message, { status: 500 });
//   }
// }


const baseUrl = process.env.BASE_URL;

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const response = await fetch(`${baseUrl}/users/${params.id}/`);
    if (!response.ok) {
      return new Response("Failed to fetch user", { status: response.status });
    }
    const result = await response.json();
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response((error as Error).message, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    
    const formData = await request.formData();
 
    const response = await fetch(`${baseUrl}/users/${params.id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: formData,
    });

    if (!response.ok) {
      return new Response("Failed to update user", { status: response.status });
    }

    const result = await response.json();
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response((error as Error).message, { status: 500 });
  }
}
