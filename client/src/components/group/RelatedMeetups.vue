<template>
	<section class="related-meetups" id="related-meetups">
		<h3 class="title">Find more Meetups in Tech</h3>
		<div class="upcoming-header">
			<div class="date-tag">
				<p>14</p>
				<p>AUG</p>
			</div>
			<p class="date-time">Tue, Aug 14, 2018, 6:00 PM</p>
			<p class="name">TechVancouver Meetup (August 2018)</p>
		</div>
		<div class="upcoming-body">			
			<div class="hosted-by">
	      <img 
	        src="https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg" 
	        alt="Meetup organizer" 
	        class="hosted-by-img"
	      >
	      <div class="hosted-by-info">
	      	<p class="hosted-by-name"> 
		        Hosted by: <span class="name">Philippe Creux and others</span>
		      </p>
		      <p class="hosted-by-from"> 
		        From: <router-link to="/user/name" class="from">Vancouver Robotics Club</router-link>
		      </p>
	      </div>
	    </div>
			<div class="going-users" v-if="going > 0">
				<div class="going-users-imgs">
					<template v-for="x in [1, 2, 3, 4, 5]">					
						<img 
		          src="https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg" 
		          alt="Going User" 
		          class="going-user-img"
		          :key="x"
		        >
	        </template>
				</div>
				<span>14 going</span>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  name: "related-meetups",
  data() {
    return {
      going: 1
    };
  }
};
</script>

<style lang="scss" scoped>
$text-color: #ffffff;
$btn-color: #f13a59;
</style>
