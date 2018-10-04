<template>
	<div class="notification">
		<p class="notification-message">{{ message }}</p>
		<span 
			class="notification-close" 
			@click="close"
		>
			&times;
		</span>
	</div>
</template>

<script>
export default {
  name: "notification",
  props: {
    notificationType: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    closeNotification: {
      type: Function,
      required: true
    }
  },
  methods: {
    close() {
      this.closeNotification();
    }
  }
};
</script>

<style lang="scss" scoped>
.notification {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e84545;

  &-message {
    color: #ffffff;
    font-size: 0.85rem;
    padding: 0 1rem;
  }

  &-close {
    margin-right: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
    background: #b12a2a;
    color: #e84545;
    border-radius: 50%;
  }
}
</style>
