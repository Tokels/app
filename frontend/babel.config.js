module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset',
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-typescript',
    ],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      'nativewind/babel',
    ],
  };
};
