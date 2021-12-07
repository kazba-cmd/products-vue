<template>
    <div class="v-carouselItem">
        <img class="carouselItem-image" :src="require(`@/uploads/${item_data.image}`)"/>
    </div>
</template>

<script>
export default {
    props: {
        item_data: {
            type: Object,
            default: () => {}
        }

    }
}
</script>

<style>
    .carouselItem-image {
        width: 1200px;
        height: 600px;
    }
</style>