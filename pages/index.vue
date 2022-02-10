<template>
  <div>
    <img src="~assets/img/mock.png" alt="" class="mock">

    <!-- Header -->
    <header class="bg-navbar">
      <nav class="container flex items-center py-2">
        <div class="py-4">
          <img src="~assets/img/logo.svg" alt="Tableland" class="h-5">
        </div>
        <ul class="hidden sm:flex flex-1 justify-end items-center gap-x-24 uppercase text-sm pr-20">
          <li><a href="#">About</a></li>
          <li><a href="#">Join Us</a></li>
          <li><a href="#">Docs</a></li>
          <li><a href="#">Mint</a></li>
        </ul>
      </nav>
    </header>

    <!-- hero -->
    <section class="hero">
      <div class="container flex items-center py-64">
        <div class="w-1/2">
          <h1 class="font-Orbitron text-7xl tracking-tighter leading-none mb-8">
            Build dApps and NFT games using familiar SQL
          </h1>
          <p class="text-3xl leading-normal mb-18">
            Tableland is a network and SQL database protocol for Ethereum.
            Built for developers, NFT creators, and Web3 visionaries.
          </p>
          <button type="button" class="btn mb-64">Call to Action</button>
          <p class="text-5xl tracking-tight leading-tighter">
            Use familiar SQL tables to read and write NFT meatadata, media, social
            data, or anything else – all orchestrated by token networks like Ethereum.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
    };
  }
};

</script>
