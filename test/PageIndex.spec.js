import { createLocalVue, mount } from '@vue/test-utils';
import { setupTest } from '@nuxt/test-utils';

import { registerComponents } from './setup';
import IndexPage from '@/pages/index.vue';

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
    wrapper = mount(IndexPage, {
      localVue: localVue,
      store: store,
      attachTo: document.body
    });
  });

  test('is a Vue instance', async function () {
    await expect(wrapper.vm).toBeTruthy();
  });

  test('renders correctly when browser has a wallet', async function () {
    window.ethereum = {};
    await expect(wrapper.element).toMatchSnapshot();
    delete window.ethereum;
  });

  test('renders correctly when browser does not have a wallet', async function () {
    await expect(wrapper.element).toMatchSnapshot();
  });
});
