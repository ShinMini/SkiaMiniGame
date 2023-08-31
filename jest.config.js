module.exports = {
  preset: 'react-native',
  // This is needed to load CanvasKit
  globalSetup: '@shopify/react-native-skia/globalJestSetup.js',
  // This is needed to load the mock
  setupFiles: ['@shopify/react-native-skia/jestSetup.js'],
};
