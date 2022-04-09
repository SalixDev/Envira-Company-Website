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
    },
  },
  plugins: [],
};
