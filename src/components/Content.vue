<template>
    <div class="container">

  <div class="content">
      <img class="content-image" src="@/uploads/content.png" alt="content-img"/>
      <div class="bg-white">
        <h3 class="content-title">Название заголовка</h3>
        <p class="content-text">Lorem ipsum dolor sit amet.</p>
        <img class="content-carousel" src="@/assets/carousel.png" alt="carousel logo"/>
      </div>
    </div>
  </div>
</template>

<style>
  .content {
    position: relative;
  }
  .content-image {
    display: block;
    width: 100%;
  }
  .bg-white {
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: left;
    background: white;
    padding: 10px;
    left: 50px;
    bottom: 50px;
    border-radius: 5px;
  }
  .content-title {
    font-size: 22px;
    margin: 10px;
  }
  .content-text {
    font-size: 15px;
    margin: 10px;
  }
  .content-carousel {
    margin: 10px;
    width: 40px;
  }
</style>