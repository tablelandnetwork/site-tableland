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
          <h1 class="font-Orbitron text-7xl tracking-tighter leading-none mb-6">
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

    <!-- garage -->
    <section class="garage">
      <div class="container flex justify-between">
        <div class="w-3/12">
          <div class="bg-black text-white pt-14 pb-6 px-16 mb-24 rounded-3xl">
            <p class="text-5xl leading-tighter mb-4">Extend existing NFTs</p>
            <p class="mb-30">
              <a class="text-xl uppercase underline" href="#">View Code</a>
            </p>
            <p class="text-right">
              <a class="text-5xl" href="#">+</a>
            </p>
          </div>

          <div class="bg-black text-white pt-14 pb-6 px-16 mb-24 rounded-3xl">
            <p class="text-5xl leading-tighter mb-4">Create new dynamic NFTs</p>
            <p class="mb-30">
              <a class="text-xl uppercase underline" href="#">View Code</a>
            </p>
            <p class="text-right">
              <a class="text-5xl" href="#">+</a>
            </p>
          </div>
        </div>
        <div class="w-3/12">
          <div class="bg-black text-white pt-14 pb-6 px-16 mb-24 rounded-3xl">
            <p class="text-5xl leading-tighter mb-4">Use tokens to control table access</p>
            <p class="mb-18">
              <a class="text-xl uppercase underline" href="#">View Code</a>
            </p>
            <p class="text-right">
              <a class="text-5xl" href="#">+</a>
            </p>
          </div>

          <div class="bg-black text-white pt-14 pb-6 px-16 mb-24 rounded-3xl">
            <p class="text-5xl leading-tighter mb-4">Compose with existing tables</p>
            <p class="mb-18">
              <a class="text-xl uppercase underline" href="#">View Code</a>
            </p>
            <p class="text-right">
              <a class="text-5xl" href="#">+</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- sql -->
    <section class="sql">
      <div class="garage-break"></div>
      <div class="container flex pt-20">
        <div class="w-1/2">
          <h3 class="font-Orbitron text-7xl tracking-tighter leading-none mb-8">
            In Tableland, we speak SQL
          </h3>
          <p class="text-3xl leading-normal tracking-wide mb-1">
            1 – The bulk of digital information is stored in relational tables.
          </p>
          <p class="text-3xl leading-normal tracking-wide mb-1">
            2 – Your familiar SQL tables are stored on a decentralized network of validators
            and anchored to Ethereum as transferable NFTs, providing ownership and access control.
          </p>
          <p class="text-3xl leading-normal tracking-wide mb-4">
            3 – Easy as pie, right?
          </p>
        </div>
      </div>
    </section>

    <!-- tables -->
    <div class="bg-gradient">
      <section class="tables relative text-white">
        <div class="container flex justify-end">
          <div class="w-1/2">
            <h3 class="font-Orbitron text-7xl tracking-tighter leading-none mb-8">
              Easy to releate tables
            </h3>
            <p class="text-3xl leading-normal tracking-wide mb-16">
              Whether you're a developer, NFT creator, token holder, or just curious about Web3,
              there's a place for you in Tableland. Join a fast-growing community of innovators
              from all over the world.
            </p>
            <button type="button" class="btn">Call to Action</button>
          </div>
        </div>
      </section>


      <!-- playground -->
      <section class="playground text-white py-32">
        <div class="container flex justify-center">
          <div class="w-1/2">
            <h3 class="font-Orbitron text-7xl tracking-tighter leading-none mb-8">
              Try it out
            </h3>
            <p class="text-3xl leading-normal tracking-wide mb-8">
              Don't take just our word for it. Type <span class="font-mono">connect</span>
              below to see how easy it is.
            </p>
            <playground></playground>
          </div>
        </div>
      </section>
    </div>
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
