import { createLocalVue, mount } from '@vue/test-utils';
import { setupTest } from '@nuxt/test-utils';
import IndexPage from '@/pages/index.vue';
import flushPromises from 'flush-promises';

import { registerComponents } from './setup';


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
});
