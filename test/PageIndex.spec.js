import { createLocalVue, mount } from '@vue/test-utils';
import { setupTest } from '@nuxt/test-utils'
import IndexPage from '@/pages/index.vue';
import flushPromises from 'flush-promises';

import { registerComponents } from './setup';

/*
window.ethereum = {};

jest.mock('ethers', function () {
  return {
    providers: {
      Web3Provider: function () {
        // mock provider
        return {
          send: async function () {},
          getSigner: function () {
            // mock signer
            return {
              getAddress: function () {
                return 'testaddress';
              },
              signMessage: async function () {
                return 'testsignedmessage';
              }
            };
          }
        };
      }
    }
  }
});
*/

describe('Index Page', function () {
  setupTest({
    configFile: 'nuxt.config.js'
  });

  let wrapper;

  beforeAll(async function () {
    const localVue = createLocalVue();
    registerComponents(localVue);

    // env defined in global setup
    const storePath = `${process.env.buildDir}/store.js`;
    const NuxtStore = await import(storePath);
    const store = await NuxtStore.createStore();

    // hoisted
    wrapper = mount(IndexPage, { localVue: localVue, store: store });
  });

  test('is a Vue instance', function () {
    expect(wrapper.vm).toBeTruthy();
  });

  test('renders correctly', function () {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should respond to clicking showcase slider', async function () {
    const showcase = wrapper.find('.showcase');
    const activeSlider = showcase.find('.slide.active');
    const inactiveSlider = showcase.find('.slide.inactive');
    inactiveSlider.trigger('click');

    await flushPromises();

    await expect(activeSlider.element.classList.contains('inactive')).toBe(true);
    await expect(inactiveSlider.element.classList.contains('active')).toBe(true);
  });
});
