module.exports = () => {
  process.on('unhandledRejection', (error) => {
    console.error(error.messages);
  });
  process.on('uncaughtException', (error) => {
    console.error(error.messages);
  });
};
