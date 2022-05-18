import { placeHolder } from '../../assets/images/index';

import "../CriminalDetailPhoto/_criminalDetailPhoto.scss"

export const CriminalDetailPhoto = ({ src }) => {
  return (
    <img
      src={src || placeHolder}
      alt="criminal-face"
      className="criminal-photo"
    />
  );
};
