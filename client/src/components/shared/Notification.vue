<template>
	<div 
    class="notification" 
    :class="notificationType === 'success' ? 'notification--success' : 'notification--failure'"
  >
		<p class="notification-message">{{ message }}</p>
		<span 
			class="notification-close"
      :class="notificationType === 'success' ? 'notification-close--success' : 'notification-close--failure'"
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
      type: String
    },
    message: {
      type: String
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
  },
  mounted() {
    setTimeout(() => {
      this.close();
    }, 5000);
  }
};
</script>

<style lang="scss" scoped>
.notification {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &--success {
    background-color: #4bb543;
  }

  &--failure {
    background-color: #e84545;
  }

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

    &--success {
      color: #227d1b;
    }

    &--failure {
      color: #b12a2a;
    }
  }
}
</style>
