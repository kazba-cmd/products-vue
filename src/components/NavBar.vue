<template>
    <div class="container">
        <div class="NavBar">
            <a class="NavBar-category" href="#">Категории товаров</a>
            <div class="NavBar-links">
                <a class="NavBar-link" href="#">Главная</a>
                <a class="NavBar-link" href="#">О компании</a>
                <a class="NavBar-link gift" href="#">Бонусная система</a>
                <a class="NavBar-link" href="#">Поддержка</a>
                <a class="NavBar-link" href="#">Контакты</a>
            </div>
            <div class="NavBar-carts">
                <div class="pos-relative">
                    <img class="NavBar-cart cart-gray" src="@/assets/redheart.png" alt="redheart"/>
                    <span class="pos-absolute cart-red"/>
                </div>
                <div class="pos-relative">
                    <img class="NavBar-cart cart-red" src="@/assets/shopping-cart.svg" alt="shopping-cart"/>
                    <span class="pos-absolute cart-white"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    a {
        text-decoration: none;
        color: black;
    }
    .NavBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        box-sizing: border-box;
        margin-bottom: 30px;
    }
    .NavBar-category {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 30px;
        background: gold;
        border-radius: 10px;
    }
    .NavBar-category::before {
        content: url('../assets/menu.svg');
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
    .NavBar-link {
        margin: 0 10px;
    }
    .gift::before {
        content: url('../assets/gift.svg');
        width: 20px;
        height: 20px;
    }
    .NavBar-carts {
        display: flex;
    }
    .NavBar-cart {
        cursor: pointer;
        padding: 10px;
        margin: 0 5px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .cart-gray {
        background: #ccc;
    }
    .cart-red {
        background: #e01563;
    }
    .cart-white {
        background: #e01563;
        border: 2px solid white;
    }
    .pos-relative {
        position: relative;
    }
    .pos-absolute {
        position: absolute;
        width: 10px;
        height: 10px;
        top: 7px;
        right: -35px;
        border-radius: 100%;
    }
</style>