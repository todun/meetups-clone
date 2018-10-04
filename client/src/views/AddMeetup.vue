<template>
	<div class="add-meetup page">
    <add-to-meetup />
	</div>
</template>

<script>
import AddToMeetup from "@/components/find/AddToMeetup";

export default {
  components: {
    AddToMeetup
  }
};
</script>

<style lang="scss" scoped>
$body-color: #353e48;

.add-meetup {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
