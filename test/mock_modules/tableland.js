module.exports = {
  connect: async function () {
    await new Promise(resolve => {
      setTimeout(() => resolve(void 0), 500);
    });

    return {
      token: {},
      network: '',
      host: '',
      signer: {
        getAddress: async function () {
          return 'testaddress';
        }
      },
      list: async function () {},
      query: async function () {},
      create: async function () {}
    };
  }
};
