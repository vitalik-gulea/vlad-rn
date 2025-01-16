const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Добавление настройки для react-native-svg-transformer
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"), // Удаляем поддержку svg из assetExts
  sourceExts: [...config.resolver.sourceExts, "svg"], // Добавляем svg как sourceExt
};

module.exports = withNativeWind(config, { input: "./src/global.css" });
