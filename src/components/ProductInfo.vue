<template>
<div class="container">
    <div class="ProductInfo">
        <div class="ProductInfo-nav">
            <div>
                <router-link class="backToHome" to="/">Главная</router-link>
            </div>
            <div class="ProductInfo-content">
                <img class="ProductInfo-img" src="@/uploads/content.png" alt="picture of product"/>
                <div class="ProductInfo-data">
                    <div class="ProductInfo-flexRow">
                        <div class="ProductInfo-elems">
                            <span class="ProductInfo-article">085978891</span>
                            <span class="ProductInfo-cloth">Одежда</span>
                            <span class="ProductInfo-discount">Новинка</span>
                        </div>
                        <img class="ProductInfo-like" src="../assets/heart.png" alt="heart logo"/>
                    </div>
                    <h2 class="ProductInfo-title">{{product.fullName}}</h2>
                    <p class="ProductInfo-price"><b>{{product.price}} ТГ</b></p>
                    <div class="ProductInfo__btns">
                        <button class="ProductInfo__btn btn-red">Добавить в корзину</button>
                        <button class="ProductInfo__btn btn-black">Купить</button>
                    </div>
                    <table>
                        <tr>
                            <td>Покрой</td>
                            <td class="padding-left">оверсайз</td>
                        </tr>
                        <tr>
                            <td>Фактура материала</td>
                            <td class="padding-left">футер</td>
                        </tr>
                        <tr>
                            <td>Декоративные элементы</td>
                            <td class="padding-left">без элементов</td>
                        </tr>
                        <tr>
                            <td>Длина изделия по спинке</td>
                            <td class="padding-left">70 см</td>
                        </tr>
                        <tr>
                            <td>Комплектация</td>
                            <td class="padding-left">худи</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="ProductInfo-blog">
                <div class="ProductInfo-links">
                    <a href="#" class="ProductInfo-link active">О товаре</a>
                    <a href="#" class="ProductInfo-link">Характеристики</a>
                    <a href="#" class="ProductInfo-link">Отзывы</a>
                    <a href="#" class="ProductInfo-link">Доставка</a>
                </div>
                <div class="ProductInfo-costume">
                    <img class="ProductInfo-costume__img" src="../uploads/costume.png"/>
                    <p class="ProductInfo-costume__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere earum reprehenderit mollitia aliquam consectetur, nam quia tempore sit pariatur perspiciatis iure quisquam ullam perferendis! Cum voluptatem dignissimos, itaque natus dolorem voluptate dolor. Perferendis placeat cupiditate, architecto quaerat harum ea necessitatibus ullam reprehenderit reiciendis maxime unde odit tempore illo atque corrupti fugiat ut mollitia doloremque. Vero inventore ducimus similique vel animi obcaecati quod nobis quasi maiores, voluptate, quae quibusdam et voluptas corporis fuga illo earum optio, accusamus vitae aliquam officiis? Iure voluptatem ea laboriosam rerum voluptatibus, quidem atque distinctio vitae labore error sunt officia deserunt, officiis quos fugiat veniam ipsa a!</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props: ['product']
}
</script>
<style scoped>
    .ProductInfo-links {
        display: flex;
        justify-content: space-between;
        background: #c0e1ff;
        align-items: center;
        flex-wrap: wrap;
        box-sizing: border-box;
    }
    .ProductInfo-link {
        text-decoration: none;
        width: 22%;
        padding: 20px;
        color: black;
    }
    .ProductInfo-link:hover {
        box-shadow: 1px 1px 1px 3px blue;
    }
    .active {
        background: white;
        padding: 20px;
    }
    .ProductInfo-costume {
        display: flex;
        margin: 20px;
        flex-wrap: wrap;
        box-sizing: border-box;
    }
    .ProductInfo-costume__text {
        max-width: 850px;
        margin: 30px;
    }
    .ProductInfo-data {
        display: flex;
        flex-direction: column;
        max-width: 500px;
}
    .ProductInfo-nav {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        box-sizing: border-box;
        text-align: left;
        justify-content: center;
    }
    .ProductInfo-title {
        margin: 0 20px;
    }
    .ProductInfo-price {
        font-size: 24px;
        margin: 20px;
    }
    .ProductInfo__btn {
        cursor: pointer;
        padding: 5px 20px;
        border: none;
        border-radius: 10px;
        color: white;
        margin: 0 10px;
    }
    .btn-red {
        background: #e01563;
    }
    .btn-black {
        background: black;
    }
    .ProductInfo-flexRow {
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        align-items: center;
        padding: 10px 20px;
    }
    .ProductInfo-elems {
        display: flex;
        box-sizing: border-box;
        align-items: center;
    }
    .ProductInfo-like {
        width: 30px;
        height: 30px;
        margin-left: auto;
    }
    .ProductInfo-article {
        color: #ccc;
        padding: 5px;
    }
    .ProductInfo-discount {
        color: white;
        background: green;
        border-radius: 10px;
        padding: 5px;
    }
    .ProductInfo-cloth {
        padding: 5px;
        background: #c0e1ff;
        border-radius: 10px;
        margin: 0 20px;
        color: blue
    }
    .ProductInfo-content {
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
    }
    .ProductInfo-img {
        width: 60%;
        height: 100%;
    }
    .backToHome {
        margin-left: 10px;
        text-decoration: none;
        color: #ccc;
    }
    .backToHome::before {
        content: url('../assets/back.png');
        padding: 7px 3px 0 3px;
        background: #ccc;
        border-radius: 50%;
        margin-right: 20px;
    }
    .padding-left {
        padding-left: 30px;
    }
    table {
        margin-left: 20px;
        margin-top: 20px;
    }
</style>