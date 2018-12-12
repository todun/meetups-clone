<template>
	<div 
		class="loader" 
		:style="{ 
			border: `${borderWidth}rem solid #f2f2f2`,
			borderTop: `${borderWidth}rem solid ${color}`, 
			height: `${height}rem`, 
			width: `${width}rem`
		}"
	></div>
</template>

<script>
export default {
  name: "loader",
  props: {
    color: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    borderWidth: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.loader {
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
