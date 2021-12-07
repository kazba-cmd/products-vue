<template>
    <div class="Footer">
        <div class="container">
            <div class="Footer-menu">
                <a href="#">
                    <img src="@/assets/logo.svg" class="Footer-logo"  alt="logo"/>
                </a>
                <div class="Footer-links">
                    <a class="Footer-link" href="#">О компании</a>
                    <a class="Footer-link" href="#">Публичная оферта</a>
                    <a class="Footer-link" href="#">Блог</a>
                    <a class="Footer-link" href="#">Для партнеров</a>
                    <a class="Footer-link" href="#">FAQ</a>
                </div>
                <div class="Footer-socials">
                    <a class="Footer-social" href="#">
                        <img src="@/assets/Instagram.svg" alt="inst logo"/>
                    </a>
                    <a class="Footer-social" href="#">
                        <img src="@/assets/Facebook.svg" alt="facebook logo"/>
                    </a>
                    <a class="Footer-social" href="#">
                        <img src="@/assets/Twitter.svg" alt="twitter logo"/>
                    </a>
                    <a class="Footer-social" href="#">
                        <img src="@/assets/Vk.svg" alt="vk logo"/>
                    </a>
                </div>
            </div>
        </div>
        <div class="bg-black">
            <div class="container">
                <div class="Footer-politics">
                    <p class="Footer-text">Лучший магазин (с) 2019 Все права защищены. Интернет-магазин</p>
                    <p class="Footer-text">Политика конфиденциальности</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .Footer {
        margin-top: 20px;
    }
    .Footer-politics {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
    }
    .Footer-text {
        font-size: 16px;
        color: white;
    }
    .bg-black {
        background: black;
    }
    .Footer-logo {
        max-width: 50px;
        margin: 10px;
    }
    .Footer-link {
        display: inline-block;
        color: black;
        text-decoration: none;
        font-size: 18px;
        padding: 20px;
        margin: 0 10px;
    }
    .Footer-link:hover {
        border-radius: 10px;
        box-shadow: 1px 1px 1px 3px #ccc;
    }
    .Footer-social {
        margin: 5px 10px;
    }
    .Footer-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    p {
        margin-bottom: 0;
    }
</style>