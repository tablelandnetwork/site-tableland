import { createLocalVue, mount } from '@vue/test-utils';
import { setupTest } from '@nuxt/test-utils'
import Playground from '@/components/Playground.vue';
import flushPromises from 'flush-promises';

import { registerComponents } from './setup';

describe('Playground component', function () {
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
    wrapper = mount(Playground, { localVue: localVue, store: store });
  });

  test('is a Vue instance', function () {
    expect(wrapper.vm).toBeTruthy();
  });

  test('prompts user connect to Tableland', async function () {
    const textInput = wrapper.find('input[type="text"]');
    const form = wrapper.find('form.web-terminal-form');

    textInput.value = 'help';
    form.trigger('submit');

    await flushPromises();

    await expect(wrapper.find('.web-terminal > span:first-of-type').text()).toMatch('Before running commands you need to connect with a Tableland Validator. We currently only support connecting via Metamask. Make sure it\'s installed, then type `connect` and hit return.');
  });
});
