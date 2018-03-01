module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'AppolodoroTranslate',
      externals: {
        react: 'React'
      }
    }
  }
}
