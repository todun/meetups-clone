<template>
	<main class="main">
		<transition name="router-anim">
		  <router-view/>
		</transition>
	</main>
</template>

<style>
.main {
  display: flex;
  flex-direction: column;
}

.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: 0.5s;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
