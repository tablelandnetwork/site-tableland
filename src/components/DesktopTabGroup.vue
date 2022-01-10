<template>
  <div class="desktop-tab-group border-2px-black">
    <div class="overlap-group-5">
      <property1-tab-button-active :text="property1TabButtonActiveProps.text" />
      <img
        class="line-2-1"
        src="../../img/line-2@2x.svg"
      />
      <property1-tab-button :text="property1TabButtonProps.text" />
      <img
        class="line-3"
        src="../../img/line-2@2x.svg"
      />
      <property1-tab-button :text="property1TabButton2Props.text" :className="property1TabButton2Props.className" />
      <img
        class="line-4-1"
        src="../../img/line-2@2x.svg"
      />
      <property1-tab-button :text="property1TabButton3Props.text" :className="property1TabButton3Props.className" />
    </div>
  </div>
</template>

<script>
import Property1TabButtonActive from "./Property1TabButtonActive";
import Property1TabButton from "./Property1TabButton";
export default {
  name: "DesktopTabGroup",
  components: {
    Property1TabButtonActive,
    Property1TabButton,
  },
  props: [
    "property1TabButtonActiveProps",
    "property1TabButtonProps",
    "property1TabButton2Props",
    "property1TabButton3Props",
  ],
};
</script>

<style>
.desktop-tab-group {
  align-items: flex-start;
  border-radius: 20px;
  display: flex;
  overflow: hidden;
  width: 285px;
}

.overlap-group-5 {
  height: 240px;
  position: relative;
  width: 285px;
}

.line-2-1 {
  height: 2px;
  left: 0;
  position: absolute;
  top: 59px;
  width: 285px;
}

.line-3 {
  height: 2px;
  left: 0;
  position: absolute;
  top: 119px;
  width: 285px;
}

.line-4-1 {
  height: 2px;
  left: 0;
  position: absolute;
  top: 179px;
  width: 285px;
}
</style>
