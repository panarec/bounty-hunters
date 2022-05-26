export const formatDetailsKey = (key) => {
  let formatedKey = key.split('_');
  formatedKey = formatedKey.join(' ');
  formatedKey =
    formatedKey.substring(0, 1).toUpperCase() +
    formatedKey.substring(1, formatedKey.lenght);
  return formatedKey;
};
