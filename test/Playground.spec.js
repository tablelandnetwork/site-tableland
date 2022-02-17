import { createLocalVue, mount } from '@vue/test-utils';
import { setupTest } from '@nuxt/test-utils'
import Playground from '@/components/Playground.vue';
import messages from '~/playground-messages';
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

  test('prompts user to connect to Tableland', async function () {
    const form = wrapper.find('form.web-terminal-form');
    const textInput = form.find('input[type="text"]');

    textInput.element.value = 'whoami';
    form.trigger('submit');

    await flushPromises();

    await expect(wrapper.find('.web-terminal > span:first-of-type').text()).toMatch(messages.warn.connect);
  });

  test('Shows help message when not connected', async function () {
    const form = wrapper.find('form.web-terminal-form');
    const textInput = form.find('input[type="text"]');

    textInput.element.value = 'help';
    form.trigger('submit');

    await flushPromises();

    const messageLines = messages.help.split('\n');
    const terminalLines = wrapper.findAll('.web-terminal > span');

    for (let i = 0; i < messageLines.length; i++) {
      const line = messageLines[i];

      await expect(terminalLines.at(i).text().replace(/\s+/g, '')).toMatch(messageLines[i].replace(/\s+/g, ''));
    }
  });
});
