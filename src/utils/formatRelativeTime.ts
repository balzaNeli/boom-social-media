/**
 * Formata data ISO para tempo relativo em pt-BR.
 * Ex: "há 5 horas", "há 2 dias", "agora mesmo"
 * Sem libs externas, compatível com SQLite TEXT (ISO 8601).
 */
export function formatRelativeTime(isoDate: string): string {
  const now = Date.now();
  const then = new Date(isoDate).getTime();

  if (Number.isNaN(then)) return "";

  const diffMs = now - then;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) return "agora mesmo";
  if (diffMin < 60) return `há ${diffMin} min`;
  if (diffHour < 24) return `há ${diffHour} ${diffHour === 1 ? "hora" : "horas"}`;
  if (diffDay < 7) return `há ${diffDay} ${diffDay === 1 ? "dia" : "dias"}`;
  if (diffDay < 30) {
    const weeks = Math.floor(diffDay / 7);
    return `há ${weeks} ${weeks === 1 ? "semana" : "semanas"}`;
  }

  // Fallback: data formatada
  return new Date(isoDate).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
