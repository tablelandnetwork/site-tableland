<template>
  <div class="desktop-footer">
    <img
      class="logo-spray-1"
      src="img/logo--spray.svg"
    />
    <div class="footer-links">
      <div class="flex">
        <div class="desktop-footer-link">
          <a href="#investors" class="navigation-link-1 poppins-normal-spray-16px">{{ property2regularProps.navigationLink }}</a>
        </div>
        <div class="desktop-footer-link">
          <a href="#partners" class="navigation-link-1 poppins-normal-spray-16px">{{ property2regular2Props.navigationLink }}</a>
        </div>
        <div class="desktop-footer-link">
          <a href="#legal" class="navigation-link-1 poppins-normal-spray-16px">{{ property2regular3Props.navigationLink }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['property2regularProps', 'property2regular2Props', 'property2regular3Props']
};
</script>

<style>
.desktop-footer {
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 84px;
  right: 0;
  left:  0;
  padding: 0 119.9px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background: black;
  z-index: 100;
}
.desktop-footer-link {
  padding-right: 1rem;
  padding-left: 1rem;
}

.desktop-footer-link .navigation-link-1:hover {
  text-decoration: underline;
}

.logo-spray-1 {
  height: 18px;
  width: 167px;
}

.footer-links {
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 44px;
}

</style>
