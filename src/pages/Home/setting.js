import { slidesToShowPlugin } from '@brainhubeu/react-carousel';

const plugins = [
  {
    resolve: slidesToShowPlugin,
    options: {
      numberOfSlides: 4,
    },
  },
];

export default plugins;
