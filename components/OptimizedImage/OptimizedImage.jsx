import React from 'react';

const requireImage = require.context('../../public/assets', false, /\.png$/);

const requireWebpImage = require.context(
  '../../public/assets?webp',
  false,
  /\.png$/,
);

const OptimizedImage = ({ src, alt }) => {
  return (
    <picture>
      <source srcSet={requireWebpImage(`./${src}`)} type='image/webp' />
      <source srcSet={requireImage(`./${src}`)} type='image/png' />
      <img src={requireImage(`./${src}`)} alt={alt} />
    </picture>
  );
};

export default OptimizedImage;
