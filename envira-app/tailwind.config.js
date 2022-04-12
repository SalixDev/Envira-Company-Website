module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sfproReg:["sfpro-reg"],
        sfproBold:["sfpro-bold"],
        sfproMed:["sfpro-med"],
      },
      colors: {
        enviraGreen: '#1fda76',
        enviraOrange: '#da4f1f',
        enviraDarkOrange: '#993716',
        enviraBlue: '#2649da',
        enviraDarkBlue: '#1a3399',
        whiteSmoke: '#f5f5f5',
      },
    },
  },
  plugins: [],
};
