let testErr = null;

module.exports = {
  connect: async function () {
    await new Promise(resolve => {
      setTimeout(() => resolve(void 0), 500);
    });
console.log(testErr);
    if (testErr) {
      const err = testErr;
      testErr = null;
      throw err;
    }

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
  },
  nextError: function (err) {
    console.log('nextError ' + err);
    testErr = err;
  }
};
