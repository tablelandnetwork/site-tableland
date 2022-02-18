import Vuex from 'vuex';
import { createLocalVue, mount } from '@vue/test-utils';
import { setupTest } from '@nuxt/test-utils'
import flushPromises from 'flush-promises';
// get mock tableland's error stub
import { nextError } from '@textile/tableland';

import Playground from '@/components/Playground.vue';
import messages from '~/playground-messages';
import { registerComponents } from './setup';
import {
  state,
  mutations,
  actions
} from '../store/index.ts';

describe('Playground component', function () {
  setupTest({
    configFile: 'nuxt.config.js'
  });

  let wrapper;

  beforeEach(async function () {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    registerComponents(localVue);

    const store = new Vuex.Store({ // await NuxtStore.createStore({
      state: state,
      mutations: mutations,
      actions: actions
    });

    // hoisted
    wrapper = mount(Playground, { localVue: localVue, mocks: { $store: store }});
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

  test('Shows help message when connection successful', async function () {
    const form = wrapper.find('form.web-terminal-form');
    const textInput = form.find('input[type="text"]');

    textInput.element.value = 'connect';
    form.trigger('submit');

    // mock connect waits 500ms, we want to make sure we wait longer than that.
    // This allows the Component to render the connnecting spinner
    await new Promise(resolve => {
      setTimeout(() => resolve(void 0), 1500);
    });
    await flushPromises();

    const messageLines = messages.connected.split('\n');
    const terminalLines = wrapper.findAll('.web-terminal > span');

    for (let i = 0; i < messageLines.length; i++) {
      const line = messageLines[i];

      await expect(terminalLines.at(i).text().replace(/\s+/g, '')).toMatch(messageLines[i].replace(/\s+/g, ''));
    }
  });

});
