import { placeHolder } from '../../assets/images';

import '../CriminalDetailPhoto/_criminalDetailPhoto.scss';

export const CriminalDetailPhoto = ({ data }) => {
  const { images } = data;

  return (
    <img
      src={(images.length && images[0].original) || placeHolder}
      onError={(e) => (e.target.src = placeHolder)}
      alt="criminal-face"
      className="criminal-photo"
    />
  );
};
