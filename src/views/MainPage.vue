<template>
  <div>

    <Content/>
    <Products />
    <Carousel
    />
    <Sponsors/>

  </div>
</template>

<script>

import Products from '@/components/Products';
import Content from '@/components/Content';
import Carousel from '@/components/Carousel';
import Sponsors from '@/components/Sponsors';

export default {
  name: 'MainPage',
  components: {
    Products,
    Content,
    Carousel,
    Sponsors
  }
}
</script>