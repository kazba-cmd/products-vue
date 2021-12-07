<template>
    <div>
        <ProductInfo
            v-bind:product="product"
        />
    </div>
</template>

<script>
import ProductInfo from '../components/ProductInfo.vue';
export default {
    name: 'ProductPage',
    data() {
        return {
        product: {},
    }},
    components: {
        ProductInfo
    },
    created() {
        return this.product = this.$route.query
    }
}
</script>