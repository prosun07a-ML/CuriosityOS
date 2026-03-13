const PORT = 8080;

console.log(`
  🚀 CuriosityOS Backend is Live!
  --------------------------------------
  🌍 URL: http://localhost:${PORT}
  --------------------------------------
`);

Deno.serve({ port: PORT }, async (req) => {
  const url = new URL(req.url);
  let filePath = "." + url.pathname;
  
  // If they just go to "/", show index.html
  if (filePath === "./") filePath = "./index.html";

  try {
    const file = await Deno.open(filePath, { read: true });
    return new Response(file.readable);
  } catch {
    return new Response("404 Not Found", { status: 404 });
  }
});