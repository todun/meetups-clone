<template>
	<header class="header">
		<div class="header-banner"></div>
		<div class="header-details">
			<h2 class="group-name">TechVancouver</h2>
			<ul class="group-info">
				<li class="info">Vancouver, BC </li>
        <span> · </span>
				<li class="info">7340 members </li>
        <span> · </span>
				<li class="info">Public group</li>
			</ul>
			<div class="group-organizer">
        <img 
          src="https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg" 
          alt="Meetup organizer" 
          class="organizer-img"
        >
        <p class="organizer-name"> 
          Organized by:<br>
          <span class="name">Philippe C. <span class="and">and</span> 2 others</span>
        </p>
      </div>
      <div class="group-share">
        <p>Share:</p>
        <ul class="share-icons">
        	<li class="social-icon">
        		<i class="fab fa-facebook"/>
        	</li>
        	<li class="social-icon">
        		<i class="fab fa-twitter"/>
        	</li>
        	<li class="social-icon">
        		<i class="fab fa-linkedin"/>
        	</li>
        </ul>
      </div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
$text-color: #ffffff;
$btn-color: #f13a59;

.header {
  display: flex;
  padding: 1rem 5rem;

  &-banner {
    background-image: url(https://cdn-images-1.medium.com/max/2000/1*qnI8K0Udjw4lciWDED4HGw.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 35rem;
    height: 20rem;
    border-radius: 0.5rem;
    margin-right: 3rem;
  }

  &-details {
    @at-root .group {
      &-name {
        margin: 0 auto;
        text-align: left;
      }

      &-info {
        .info {
          display: inline-block;
          font-size: 0.85rem;
          margin: 0 0.5rem;

          &:first-of-type {
            margin-left: 0;
          }

          &:last-of-type {
            margin-right: 0;
          }
        }
      }

      &-organizer {
        display: flex;
        align-items: center;

        @at-root .organizer-img {
          height: 3rem;
          border-radius: 50%;
          margin-right: 1rem;
        }

        @at-root .organizer-name {
          font-size: 0.85rem;

          .name {
            font-weight: 600;

            .and {
              font-weight: 400;
            }
          }
        }
      }

      &-share {
        display: flex;

        p {
          font-size: 0.85rem;
        }

        @at-root .share-icons {
          list-style: none;
          margin-left: 1rem;
        }

        @at-root .social-icon {
          display: inline-block;
          margin: 0 0.5rem;

          &:first-of-type {
            margin-left: 0;
          }

          &:last-of-type {
            margin-right: 0;
          }

          @at-root .svg-inline--fa {
            font-size: 1.5rem;
            color: darken($text-color, 50%);
          }
        }
      }
    }
  }
}
</style>
