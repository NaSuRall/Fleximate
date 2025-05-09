const pluginTailwind = await import('prettier-plugin-tailwindcss');

export default {
  plugins: [pluginTailwind],
  tailwindConfig: './tailwind.config.js',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
};
