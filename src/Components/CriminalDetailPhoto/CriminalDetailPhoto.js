import { placeHolder } from '../../assets/images';

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
