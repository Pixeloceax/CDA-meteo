export function nowTOHHMM() {
  const date = new Date();
  return `${date.getHours()} : ${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
}
