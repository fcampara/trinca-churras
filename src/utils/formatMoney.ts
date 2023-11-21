function formatMoney(money: number = 0, options?: Pick<Intl.NumberFormatOptions, "notation">) {
  const { notation = "compact" } = options || {}
  return new Intl.NumberFormat("pt-BR", {
    notation,
    style: "currency",
    currency: "BRL",
  }).format(money);
}

export default formatMoney
