export const formatDetailsKey = (key) => {
  let formatedKey = key.split('_');
  formatedKey = formatedKey.join(' ');
  formatedKey =
    formatedKey.substring(0, 1).toUpperCase() +
    formatedKey.substring(1, formatedKey.lenght);
  return formatedKey;
};

export const getMoneyStringfromString = (string) => {
  return string?.match(/\$(\d,*)*/g);
};

export const getMoneyNumberfromString = (string) => {
  return string?.match(/(?<=\$)[0-9]+|(?<=,)[0-9]+/g);
}
