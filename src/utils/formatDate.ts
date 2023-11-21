const padStarDate = (date: number) => String(date).padStart(2, "0");
const DEFAULT_INVALID_DATE = "Data inválida"

function formatDate(value: string) {
  if (!value) return DEFAULT_INVALID_DATE;
  const date = new Date(value)
  const day = date.getDate();
  const month = date.getMonth() + 1;
  if (isNaN(day) || isNaN(month)) return DEFAULT_INVALID_DATE;
  return `${padStarDate(day)}/${padStarDate(month)}`;
}

export default formatDate
