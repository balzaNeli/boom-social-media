export function parsePagination(query: Record<string, unknown>) {
  let page = parseInt(String(query.page ?? '1'), 10);
  let limit = parseInt(String(query.limit ?? '10'), 10);

  if (!Number.isFinite(page) || page < 1) page = 1;
  if (!Number.isFinite(limit) || limit < 1) limit = 10;
  if (limit > 50) limit = 50;

  const offset = (page - 1) * limit;
  return { page, limit, offset };
}

export function hasMore(total: number, page: number, limit: number): boolean {
  return page * limit < total;
}
