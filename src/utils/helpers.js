export const formatDetailsKey = (key) => {
  let formatedKey = key.replace('_', ' ');
  formatedKey =
    formatedKey.substring(0, 1).toUpperCase() +
    formatedKey.substring(1, formatedKey.lenght);
  return formatedKey;
};
