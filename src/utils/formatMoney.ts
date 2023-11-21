function formatMoney(money: number = 0) {
  return new Intl.NumberFormat("pt-BR", {
    notation: "compact",
    style: "currency",
    currency: "BRL",
  }).format(money);
}

export default formatMoney
