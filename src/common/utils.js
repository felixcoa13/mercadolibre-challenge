export const getItemCurrency = (item) => {
    if(item?.price?.currency === "USD")
        return 'U$S';
    return '$'; 
}

export const getItemPriceFormated = (item) => {
    let amount = item?.price?.amount;
    return amount?.toLocaleString('es-AR', {maximumFractionDigits: item.price.decimals});
}

export const getCondition = (item) => {
    if(item?.condition == "new")
      return 'Nuevo';
    return "Usado"
}