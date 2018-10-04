<template>
	<aside class="upcoming">
		<div class="upcoming-header">
			<div class="date-tag">
				<p>14</p>
				<p>AUG</p>
			</div>
			<div class="main">
				<p class="date-time">Tue, Aug 14, 2018, 6:00 PM</p>
				<p class="name">TechVancouver Meetup (August 2018)</p>
			</div>
		</div>
		<div class="upcoming-body">			
			<div class="hosted-by">
	      <img 
	        src="https://pbs.twimg.com/profile_images/910113377824976896/SyABvbFE_400x400.jpg" 
	        alt="Meetup organizer" 
	        class="hosted-by-img"
	      >
	      <p class="hosted-by-name"> 
	        Hosted by: <span class="name">Philippe Creux and others</span>
	      </p>
	    </div>
			<div class="going-users">
				<div class="going-users-imgs">
					<template v-for="x in [1, 2, 3, 4, 5]">					
						<img 
		          src="http://beragaminfo.com/wp-content/uploads/2017/09/These-Are-the-Photos-Your-Dating-Profile-Absolutely-Must-Have-According-to-Matchmakers.jpg" 
		          alt="Going User" 
		          class="going-user-img"
		          :key="x"
		        >
	        </template>
				</div>
				<span>14 going</span>
			</div>
		</div>
		<button class="upcoming-button">Attend</button>
	</aside>
</template>

<style lang="scss" scoped>
$text-color: #000000;
$bg-color: #ffffff;
$btn-color: #f13a59;
$btn-color--blue: #00a2c7;
$shadow-color: rgba(46, 62, 72, 0.12);

.upcoming {
  padding: 1rem;
  margin: 1rem 0;
  background-color: $bg-color;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 0 0.125rem 0 $shadow-color, 0 0.125rem 0.25rem 0 $shadow-color;

  &:hover {
    box-shadow: 0 0 0.25rem 0 $shadow-color, 0 0.25rem 0.75rem 0 $shadow-color;
    transform: translateY(-1px);
  }

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    @at-root .date-tag {
      width: 3rem;
      background: lighten($text-color, 95%);
      border-radius: 0.5rem;
      text-align: center;
      padding: 0.5rem;
      margin-right: 1rem;

      p {
        margin: 0;

        &:first-child {
          font-weight: 600;
          color: $btn-color;
          font-size: 1.25rem;
        }

        &:last-child {
          font-size: 0.75rem;
        }
      }
    }

    @at-root .main {
      display: flex;
      flex-direction: column;

      .date-time,
      .name {
        font-size: 0.85rem;
        letter-spacing: 1px;
        word-spacing: 1px;
        margin: 0;
      }

      .date-time {
        color: lighten($text-color, 70%);
      }

      .name {
        font-weight: 600;
        margin-top: 0.5rem;
      }
    }
  }

  &-body {
    margin-bottom: 2rem;

    @at-root .hosted-by {
      display: flex;
      align-items: center;

      &-img {
        height: 3rem;
        border-radius: 50%;
        margin-right: 1rem;
      }

      &-name {
        font-size: 0.85rem;
        color: lighten($text-color, 70%);

        .name {
          color: $btn-color--blue;
        }
      }
    }

    @at-root .going {
      &-users {
        display: flex;
        align-items: center;
        width: fit-content;
        border-radius: 2rem;
        padding: 0.5rem 1rem;
        margin-top: 2rem;
        background-color: lighten($text-color, 95%);

        &-imgs {
          margin-right: 1rem;

          ~ span {
            font-size: 0.85rem;
            color: lighten($text-color, 60%);
          }
        }
      }

      &-user {
        &-img {
          height: 2rem;
          width: 2rem;
          border-radius: 50%;
          margin: 0 -0.25rem;
        }
      }
    }
  }

  &-button {
    background-color: $btn-color--blue;
    color: $bg-color;
    border: none;
    border-radius: 0.125rem;
    padding: 0.75rem 1rem;
    width: 100%;
  }
}
</style>
