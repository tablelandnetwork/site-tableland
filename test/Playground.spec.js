import Vuex from "vuex";
import { createLocalVue, mount } from "@vue/test-utils";
import { setupTest } from "@nuxt/test-utils";
import flushPromises from "flush-promises";
// get mock tableland's error stub
// eslint-disable-next-line import/named
import { nextError } from "@tableland/sdk";

import { state, mutations, actions } from "../store/index.ts";
import { registerComponents } from "./setup";
import Playground from "@/components/Playground.vue";
import messages from "~/playground-messages";

const wait = function (ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(undefined), ms);
  });
};

describe("Playground component", function () {
  setupTest({
    configFile: "nuxt.config.js",
  });

  let wrapper;

  beforeEach(async function () {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    registerComponents(localVue);

    // eslint-disable-next-line import/no-named-as-default-member
    const store = new Vuex.Store({
      // await NuxtStore.createStore({
      state,
      mutations,
      actions,
    });

    await store.dispatch("disconnect");

    window.ethereum = {};
    // hoisted
    wrapper = mount(Playground, {
      attachTo: document.body,
      localVue,
      mocks: { $store: store },
    });
  });

  test("is a Vue instance", function () {
    expect(wrapper.vm).toBeTruthy();
  });

  test("prompts user to connect to Tableland", async function () {
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');

    textInput.element.value = "whoami";
    form.trigger("submit");

    await flushPromises();

    await expect(
      wrapper.find(".web-terminal > span:first-of-type").text()
    ).toMatch(messages.warn.connect);
  });

  test("Shows help message when not connected", async function () {
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');

    textInput.element.value = "help";
    form.trigger("submit");

    await flushPromises();

    const messageLines = messages.help.split("\n");
    const terminalLines = wrapper.findAll(".web-terminal > span");

    for (let i = 0; i < messageLines.length; i++) {
      await expect(terminalLines.at(i).text().replace(/\s+/g, "")).toMatch(
        messageLines[i].replace(/\s+/g, "")
      );
    }
  });

  test("Shows docs message", async function () {
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');

    textInput.element.value = "docs";
    form.trigger("submit");

    await flushPromises();

    const messageLines = messages.docs.split("\n");
    const terminalLines = wrapper.findAll(".web-terminal > span");

    for (let i = 0; i < messageLines.length; i++) {
      await expect(terminalLines.at(i).text().replace(/\s+/g, "")).toMatch(
        messageLines[i].replace(/\s+/g, "")
      );
    }
  });

  test("clear clears the terminal screen", async function () {
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');

    textInput.element.value = "help";
    form.trigger("submit");

    await flushPromises();

    const terminalLines1 = wrapper.findAll(".web-terminal > span");
    await expect(terminalLines1.at(0).text()).toMatch("Available commands:");

    textInput.element.value = "clear";
    form.trigger("submit");

    await wait(1001);
    await flushPromises();

    const terminalLines2 = wrapper.findAll(".web-terminal > span");

    // NOTES:
    //    - the clear command clears enough lines to make sure no old commands are visible.
    //      Since the wrapper doesn't have a clientHeight like a real DOM, clear is only
    //      going to clear one line.
    //    - can't use toMatch for empty string
    await expect(terminalLines2.at(0).text() === "").toBe(true);
  });

  test("Shows help message when connection successful", async function () {
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');

    textInput.element.value = "connect";
    form.trigger("submit");

    // mock connect waits 500ms, we want to make sure we wait longer than that.
    // This allows the Component to render the connnecting spinner
    await wait(1500);
    await flushPromises();

    const messageLines = messages.connected.split("\n");
    const terminalLines = wrapper.findAll(".web-terminal > span");

    for (let i = 0; i < messageLines.length; i++) {
      await expect(terminalLines.at(i).text().replace(/\s+/g, "")).toMatch(
        messageLines[i].replace(/\s+/g, "")
      );
    }
  });

  test("whoami shows eth address", async function () {
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');

    textInput.element.value = "connect";
    form.trigger("submit");

    // mock connect waits 500ms, we want to make sure we wait longer than that.
    // This allows the Component to render the connnecting spinner
    await wait(1500);
    await flushPromises();

    textInput.element.value = "whoami";
    form.trigger("submit");

    await flushPromises();

    await expect(
      wrapper.find(".web-terminal > span").text() === "testaddress"
    ).toBe(true);
  });

  // TODO: this test only passes if its the first call to connect because the module cache isn't being cleared
  test("Shows discord message when address not authorized", async function () {
    nextError(
      new Error("checking address authorization: address not authorized")
    );
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');

    textInput.element.value = "connect";
    form.trigger("submit");

    // mock connect waits 500ms, we want to make sure we wait longer than that.
    await wait(1000);
    await flushPromises();

    const messageLines = messages.warn.address.split("\n");
    const terminalLines = wrapper.findAll(".web-terminal > span");

    for (let i = 0; i < messageLines.length; i++) {
      await expect(terminalLines.at(i).text().replace(/\s+/g, "")).toMatch(
        messageLines[i].replace(/\s+/g, "")
      );
    }
  });

  test("prints a table with read query results", async function () {
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');

    textInput.element.value = "connect";
    form.trigger("submit");

    // mock connect waits 500ms, we want to make sure we wait longer than that.
    await wait(1000);
    await flushPromises();

    textInput.element.value = "readquery1";
    form.trigger("submit");

    await wait(1);
    await flushPromises();

    await expect(wrapper.findAll("th").at(0)).toBeTruthy();
    await expect(wrapper.findAll("th").at(1)).toBeTruthy();
    await expect(wrapper.findAll("th").at(2)).toBeTruthy();
  });

  test("create table statements show queryable name", async function () {
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');

    textInput.element.value = "connect";
    form.trigger("submit");

    // mock connect waits 500ms, we want to make sure we wait longer than that.
    await wait(1000);
    await flushPromises();

    textInput.element.value = "create table unittests (a int);";
    form.trigger("submit");

    await wait(1);
    await flushPromises();

    const terminalLines = wrapper.findAll(".web-terminal > span");
    await expect(terminalLines.at(0).text()).toMatch("Table Created:");
    await expect(terminalLines.at(1).text()).toMatch("{");
    await expect(terminalLines.at(2).text()).toMatch('"name": "unittests_180');
    await expect(terminalLines.at(3).text()).toMatch("}");
  });

  test('create table statements are not case sensitive', async function () {
    const form = wrapper.find('form.web-terminal-form');
    const textInput = form.find('input[type="text"]');

    textInput.element.value = 'connect';
    form.trigger('submit');

    // mock connect waits 500ms, we want to make sure we wait longer than that.
    await wait(1000);
    await flushPromises();

    textInput.element.value = 'CREaTE TaBLE unittests (a int);';
    form.trigger('submit');

    await wait(1);
    await flushPromises();

    const terminalLines = wrapper.findAll('.web-terminal > span');
    await expect(terminalLines.at(0).text()).toMatch('Table Created:');
    await expect(terminalLines.at(1).text()).toMatch('{');
    await expect(terminalLines.at(2).text()).toMatch('"name": "unittests_180');
    await expect(terminalLines.at(3).text()).toMatch('}');
  });

  test('list show user their existing tables', async function () {
    const form = wrapper.find('form.web-terminal-form');
    const textInput = form.find('input[type="text"]');

    textInput.element.value = "connect";
    form.trigger("submit");

    // mock connect waits 500ms, we want to make sure we wait longer than that.
    await wait(1000);
    await flushPromises();

    textInput.element.value = "CREaTE TaBLE unittests (a int);";
    form.trigger("submit");

    await wait(1);
    await flushPromises();

    const terminalLines = wrapper.findAll(".web-terminal > span");
    await expect(terminalLines.at(0).text()).toMatch("Table Created:");
    await expect(terminalLines.at(1).text()).toMatch("{");
    await expect(terminalLines.at(2).text()).toMatch('"name": "unittests_180');
    await expect(terminalLines.at(3).text()).toMatch("}");
  });

  test("list show user their existing tables", async function () {
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');

    textInput.element.value = "connect";
    form.trigger("submit");

    // mock connect waits 500ms, we want to make sure we wait longer than that.
    await wait(1000);
    await flushPromises();

    textInput.element.value = "list";
    form.trigger("submit");

    await wait(1);
    await flushPromises();

    const terminalLines = wrapper.findAll(".web-terminal > span");
    await expect(terminalLines.at(0).text()).toMatch("Result:");
    await expect(terminalLines.at(1).text()).toMatch("[");
    await expect(terminalLines.at(2).text()).toMatch("{");
    await expect(terminalLines.at(3).text()).toMatch(
      '"controller": "0x03cA05928aC3179c20Ae6541376Fd6B6E6ed92Cd",'
    );
  });

  test("user commands are buffered and saved in command history", async function () {
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');

    // mimic user typing and hitting return twice
    textInput.element.value = "qwe";
    form.trigger("submit");

    await wait(1);
    await flushPromises();

    textInput.element.value = "rty";
    form.trigger("submit");

    await wait(1);
    await flushPromises();

    // hitting up twice should show the first command
    textInput.trigger("keydown.up");
    await wait(1);
    await flushPromises();
    textInput.trigger("keydown.up");
    await wait(1);
    await flushPromises();

    await expect(textInput.element.value === "qwe").toBe(true);

    // now hitting down should show the second command
    textInput.trigger("keydown.down");
    await wait(1);
    await flushPromises();

    await expect(textInput.element.value === "rty").toBe(true);
  });

  test("clicking the terminal puts focus on input", async function () {
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');
    const playgroundComponent = wrapper.find(".playground-component");

    await expect(textInput.element).not.toBe(document.activeElement);

    playgroundComponent.trigger("click");
    await wait(1);
    await flushPromises();

    await expect(textInput.element).toBe(document.activeElement);
  });

  test("submitting empty string shows warning", async function () {
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');

    textInput.element.value = "connect";
    form.trigger("submit");

    // mock connect waits 500ms, we want to make sure we wait longer than that.
    await wait(1000);
    await flushPromises();

    textInput.element.value = "";
    form.trigger("submit");
    await flushPromises();

    const messageLines = messages.warn.statement.split("\n");
    const terminalLines = wrapper.findAll(".web-terminal > span");

    for (let i = 0; i < messageLines.length; i++) {
      await expect(terminalLines.at(i).text().replace(/\s+/g, "")).toMatch(
        messageLines[i].replace(/\s+/g, "")
      );
    }
  });

  test("read query errors are shown", async function () {
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');

    textInput.element.value = "connect";
    form.trigger("submit");

    // mock connect waits 500ms, we want to make sure we wait longer than that.
    await wait(1000);
    await flushPromises();

    nextError(new Error("test error"));

    textInput.element.value = "readquery1";
    form.trigger("submit");

    await wait(1);
    await flushPromises();

    const terminalLines = wrapper.findAll(".web-terminal > span");
    await expect(terminalLines.at(0).text()).toMatch("Error:");
    await expect(terminalLines.at(1).text()).toMatch("test error");
  });

  test("update query shows rpc response", async function () {
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');

    textInput.element.value = "connect";
    form.trigger("submit");

    // mock connect waits 500ms, we want to make sure we wait longer than that.
    await wait(1000);
    await flushPromises();

    textInput.element.value = "updatequery1";
    form.trigger("submit");

    await wait(1);
    await flushPromises();

    const terminalLines = wrapper.findAll(".web-terminal > span");
    await expect(terminalLines.at(0).text()).toMatch("Result:");
    await expect(terminalLines.at(1).text()).toMatch("{");
    await expect(terminalLines.at(2).text()).toMatch('"data": null');
    await expect(terminalLines.at(3).text()).toMatch("}");
  });

  test("create query errors are shown", async function () {
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');

    textInput.element.value = "connect";
    form.trigger("submit");

    // mock connect waits 500ms, we want to make sure we wait longer than that.
    await wait(1000);
    await flushPromises();

    nextError(new Error("test error"));

    textInput.element.value = "create table unittests (a int);";
    form.trigger("submit");

    await wait(1);
    await flushPromises();

    const terminalLines = wrapper.findAll(".web-terminal > span");
    await expect(terminalLines.at(0).text()).toMatch("Error:");
    await expect(terminalLines.at(1).text()).toMatch("test error");
  });

  test("list errors are shown", async function () {
    const form = wrapper.find("form.web-terminal-form");
    const textInput = form.find('input[type="text"]');

    textInput.element.value = "connect";
    form.trigger("submit");

    // mock connect waits 500ms, we want to make sure we wait longer than that.
    await wait(1000);
    await flushPromises();

    nextError(new Error("test error"));

    textInput.element.value = "list";
    form.trigger("submit");

    await wait(1);
    await flushPromises();

    const terminalLines = wrapper.findAll(".web-terminal > span");
    await expect(terminalLines.at(0).text()).toMatch("Error:");
    await expect(terminalLines.at(1).text()).toMatch("test error");
  });
});
