export const formatDate = (d) => {
  var date = new Date(d);
  const months = [
    'Janúar',
    'Febrúar',
    'Mars',
    'Apríl',
    'Maí',
    'Júní',
    'Júlí',
    'Ágúst',
    'September',
    'Október',
    'Nóvember',
    'Desember',
  ];

  return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
};
