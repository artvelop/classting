// eslint-disable-next-line import/no-anonymous-default-export
export default {
  plugins: [
    {
      plugin: require('craco-alias'),
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.json',
      },
    },
  ],
};
