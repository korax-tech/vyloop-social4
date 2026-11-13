export const onRequestGet: PagesFunction = async () => {
  return Response.json(
    { status: "ok", service: "vyloop-social", timestamp: new Date().toISOString() },
    { headers: { "Cache-Control": "no-store" } },
  );
};
