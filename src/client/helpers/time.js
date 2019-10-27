export const stringToEventDate = (strDate) => {
  const date = new Date(strDate);

  var options = { weekday: 'long', year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' };

  return date.toLocaleDateString('pt-BR', options);
}