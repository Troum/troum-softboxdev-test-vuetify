<script setup lang="ts">

</script>

<template>
  <div class="animation-container">
    <template v-for="index of 6" :key="index">
      <div class="circle"></div>
    </template>
  </div>
</template>

<style scoped lang="scss">

$circle-size: 16px;
$animation-duration: 1.5s;
$animation-delay-step: 0.3s;

@keyframes circleAnimation {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-24px);
  }
}

@function random-color() {
  @return rgb(random(256), random(256), random(256));
}

.animation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
}

.circle {
  width: $circle-size;
  height: $circle-size;
  border-radius: 50%;
  margin: 10px;
  animation: circleAnimation $animation-duration infinite ease-in-out;

  @for $i from 2 through 6 {
    &:nth-child(#{$i}) {
      animation-delay: $i * $animation-delay-step;
      background-color: random-color();
    }
  }
}

</style>