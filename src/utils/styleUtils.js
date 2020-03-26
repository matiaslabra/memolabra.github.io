import { css } from 'styled-components'

const sizes = {
  giant: 1400,
  desktop: 1280,
  tablet: 992,
  phablet: 768,
  phone: 500,
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  // const emSize = sizes[label] / 15; // 15 since font is 1.5rem;
  const pxSize = sizes[label];
  accumulator[label] = (...args) => css`
    @media (max-width: ${pxSize}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})