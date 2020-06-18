// const withImages = require('next-images')
// const withVideos = require('next-videos')

// module.exports = withImages({
//   webpack(config, options) {
//     return config
//   }
// })

const { withRasterImages, withPlayback } = require('@moxy/next-common-files');
const withPlugins = require('next-compose-plugins');
 
module.exports = withPlugins([
  withRasterImages(),
  withPlayback(),
]);