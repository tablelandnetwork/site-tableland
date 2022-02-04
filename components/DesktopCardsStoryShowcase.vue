<template>
  <div :class="[`desktop-cards-story-showcase`, className || ``]">
    <div :class="['desktop-cards-story-showcase-content', (padTop ? 'pad-top-' + padTop : '')]">
      <div class="title-icon">
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38.8125 8.625H7.1875C6.39359 8.625 5.75 9.26859 5.75 10.0625V35.9375C5.75 36.7314 6.39359 37.375 7.1875 37.375H38.8125C39.6064 37.375 40.25 36.7314 40.25 35.9375V10.0625C40.25 9.26859 39.6064 8.625 38.8125 8.625Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M5.75 30.1873L14.796 21.1412C14.9295 21.0078 15.088 20.9019 15.2624 20.8296C15.4368 20.7574 15.6237 20.7202 15.8125 20.7202C16.0012 20.7202 16.1882 20.7574 16.3626 20.8296C16.537 20.9019 16.6955 21.0078 16.8289 21.1412L24.8585 29.1708C24.992 29.3043 25.1505 29.4102 25.3249 29.4824C25.4993 29.5547 25.6862 29.5919 25.875 29.5919C26.0637 29.5919 26.2507 29.5547 26.4251 29.4824C26.5995 29.4102 26.758 29.3043 26.8914 29.1708L30.6085 25.4537C30.742 25.3203 30.9005 25.2144 31.0749 25.1421C31.2493 25.0699 31.4362 25.0327 31.625 25.0327C31.8137 25.0327 32.0007 25.0699 32.1751 25.1421C32.3495 25.2144 32.508 25.3203 32.6414 25.4537L40.25 33.0623" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M30.125 17.9688C30.125 19.1251 29.1876 20.0625 28.0312 20.0625C26.8749 20.0625 25.9375 19.1251 25.9375 17.9688C25.9375 16.8124 26.8749 15.875 28.0312 15.875C29.1876 15.875 30.125 16.8124 30.125 17.9688Z" fill="#FFF6A8" stroke="black" stroke-width="0.125" />
        </svg>
      </div>

      <h4 class="card-title orbitron-black-black-25px">{{ cardTitle }}</h4>

      <div class="card-content">
        <p class="poppins-normal-black-16px">{{ cardContent }}</p>
      </div>

      <div class="card-link poppins-semi-bold-black-16px">
        <a :href="cardLink || '#'" target="_blank" class="poppins-semi-bold-black-16px">
          {{ cardTextLink }}
        </a>
      </div>
    </div>
    <img src="~/assets/img/wedge-rounded-white.png" width="100%">
  </div>
</template>

<script>
export default {
  props: ['className', 'cardTitle', 'cardContent', 'cardTextLink', 'cardLink', 'padTop']
};
</script>

<style>
.desktop-cards-story-showcase {
  align-items: flex-start;
  display: flex;
  flex-grow: 1;
  flex-basis: 10%;
  flex-direction: column;
  min-height: 488px;
}

.desktop-cards-story-showcase-content {
  width: 100%;
  background: #fff;
  border-radius: 40px 40px 0 0;
  margin-bottom: -7px;
}

.desktop-cards-story-showcase-content .card-title {
  margin: 30px;
}

.desktop-cards-story-showcase-content .card-link {
  margin: 30px;
  text-decoration: underline;
  text-decoration-thickness: 3px;
}

.desktop-cards-story-showcase-content .card-link:hover {
  text-decoration-thickness: 2px;
}

.desktop-cards-story-showcase-content .card-content {
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
}

.desktop-cards-story-showcase-content.pad-top-md {
  margin-top: 40px;
}

.desktop-cards-story-showcase-content.pad-top-lg {
  margin-top: 80px;
}

.rectangle-55-1 {
  height: 78px;
  margin-top: 2px;
  width: 285px;
}

.desktop-cards-story-showcase .title-icon {
  margin-left: 1rem;
  margin-top: 1rem;
}

.desktop-cards-story-showcase .card-title {
  margin-bottom: 1rem;
}

</style>
