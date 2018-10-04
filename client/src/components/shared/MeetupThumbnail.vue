<template>
	<div class="meetup-card">
		<img class="meetup-card_image" src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/13/1600x1066/gallery-1459459788-delish-banana-bread-chocolate-pb.jpg" alt="Chocolate-peanut butter banana bread">
		<div class="meetup-card_date-tag">
			<p>27</p>
			<p>APR</p>
		</div>
		<div class="meetup-card_content">
			<p class="date">Friday, April 27, 7:30 AM</p>
			<p class="name">Friday Special</p>
			<div class="hosted-by">
			<!--<img class="avatar" src="" alt="">-->				
				<span class="avatar"><i class="far fa-user"></i></span>
				<div class="host">
					<p class="host_name">Hosted by Paul S.</p>
					<p class="host_from">
						<span>From</span><router-link class="group" to="/some-club"> NYC Outdoors Club</router-link>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
$text-color: #000000;
$link-color: #00a2c7;
$btn-color: #f13a59;
$shadow-color: rgba(46, 62, 72, 0.12);

.meetup-card {
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 0.125rem 0 $shadow-color, 0 0.125rem 0.25rem 0 $shadow-color;

  &:hover {
    box-shadow: 0 0 0.25rem 0 $shadow-color, 0 0.25rem 0.75rem 0 $shadow-color;
    transform: translateY(-1px);
  }

  &_image {
    max-width: 25rem;
    height: auto;
    opacity: 0.7;
  }

  &_date-tag {
    position: absolute;
    top: 3.5%;
    left: 3.5%;
    width: 3rem;
    background: lighten($text-color, 80%);
    border-radius: 0.5rem;
    text-align: center;
    padding: 0.5rem 0.25rem;

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

  &_content {
    padding: 1rem;
    letter-spacing: 1px;

    .date,
    .host_name,
    .host_from span {
      color: lighten($text-color, 60%);
    }

    .name,
    .group {
      font-weight: 600;
      color: lighten($text-color, 30%);
    }

    .date {
      font-size: 0.95rem;
      margin-top: 0;
    }

    .name {
      font-size: 1.25rem;
      margin: 0 0 1rem 0;
    }

    @at-root .hosted-by {
      display: flex;
      align-items: center;
      font-size: 0.85rem;

      .avatar {
        display: inline-block;
        margin-right: 1rem;
        padding: 0.75rem 1rem;
        border-radius: 50%;
        background: lighten($text-color, 80%);
      }

      .host {
        &_name {
          margin-top: 0;
          margin-bottom: 0;
        }

        &_from {
          margin: 0;

          &:hover a {
            color: $link-color;
          }
        }
      }
    }
  }

  .svg-inline--fa {
    color: lighten($text-color, 60%);
  }
}
</style>
