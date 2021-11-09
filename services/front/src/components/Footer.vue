<template>
    <footer class="footer">
      <div class="footer__copy">
        Copyright, 2021
      </div>
      <div class="footer__text">
        Lorem ipsum dolor sit amet.
      </div>
    </footer>
</template>

<style>
.footer {
  grid-area: footer;
  display: grid;
  grid-template: 1fr / 1fr minmax(auto, 300px) minmax(auto, 1100px) 1fr;
  padding: 15px;
  align-items: center;
  background-color: #303942;
  color: aliceblue;
}
.footer__copy {
  grid-column: 2 / 3;
}
.footer__text {
  grid-column: 3 / 4;
}
</style>