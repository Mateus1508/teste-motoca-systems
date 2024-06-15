export const formatValueToCurrency = (valor: number): string => {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};
