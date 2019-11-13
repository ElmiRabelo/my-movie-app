// formata o value do input de search-form, para que seja um query aceito pela api
export default function formatSearchInput(value) {
  return value.trim().replace(" ", "+");
}
