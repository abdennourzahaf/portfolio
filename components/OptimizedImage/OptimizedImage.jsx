import React from 'react';

const requireImage = require.context(
  '../../public/assets',
  false,
  /\.(svg|png)$/,
);

const requireWebpImage = require.context(
  '../../public/assets?webp',
  false,
  /\.png$/,
);

const OptimizedImage = ({ src, alt, ...restProps }) => {
  if (/\.svg$/.test(src))
    return <img src={requireImage(`./${src}`)} alt={alt} {...restProps} />;

  return (
    <picture>
      <source srcSet={requireWebpImage(`./${src}`)} type="image/webp" />
      <source srcSet={requireImage(`./${src}`)} type="image/png" />
      <img src={requireImage(`./${src}`)} alt={alt} {...restProps} />
    </picture>
  );
};

export default OptimizedImage;
