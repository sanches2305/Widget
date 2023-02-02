<!DOCTYPE HTML>
<html>
<head>
 
</head>
<body>
<div class="container">
  <div class="messenger">
    <div id="menubtn" title="Чат с менеджером" class="messenger-btn"><img src="https://volgo-prime.ru/img/icons/chat.svg" alt="Чат с менеджером" /></div>
    <div id="messenger-links" class="messenger-links">
      <a title="Позвонить" href="tel:+120345678910"><img src="https://volgo-prime.ru/img/icons/phone-icon.svg" alt="Позвонить" /></a>
      <a title="Whatsapp" href="whatsapp://send?phone=79270000000"><img src="https://volgo-prime.ru/img/icons/whatsapp-icon.svg" alt="Whatsapp" /></a>
      <a title="Viber" href="viber://chat?number=79270000000"><img src="https://volgo-prime.ru/img/icons/viber-icon.svg" alt="Viber" /></a>
      <a title="Telegram" href="https://t.me/romanvorozhbitov"><img src="https://volgo-prime.ru/img/icons/telegram-icon.svg" alt="Telegram" /></a>
      <a title="Вконтакте" href="https://vk.com"><img src="https://volgo-prime.ru/img/icons/vk-icon.svg" alt="Вконтакте" /></a>
    </div>
  </div>
</div>
<style>* {
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #263238;
}
.messenger {
  display: block;
  position: fixed;
  right: 50%;
  bottom: 50%;
  width: 260px;
  height: 60px;
  /* overflow: hidden; */
}
.messenger-btn {
    padding: 14px;
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background-color: #9fbce0;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    z-index: 2;
  }
.messenger-btn img {
  width: 32px;
  height: 32px;
}
.messenger-links {
  position: absolute;
  left: 0px;
  top: 10px;
  width: 240px;
  transform: scale(0);
  transform-origin: 100% 50%;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  z-index: 0;
}
.messenger-links.show {
  left: -45px;
  transform: scale(1);
}
.messenger-links a {
  width: 40px;
  margin-left: 4px;
}
.messenger-links img {
  max-width: 40px;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.messenger-links a:hover img {
  transform: scale(1.1);
  text-decoration: none;
}</style>

<script type="text/javascript" src="https://raw.githack.com/sanches2305/Widget/main/cod.js"></script>
</body>
</html>
