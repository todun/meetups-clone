<template>
	<div class="add-to-meetup">
		<div class="row row--header">
      <span class="close">Close</span>
      <h2 class="name">Vancouver Vue.js Meetup Group</h2>
      <p class="members">We are 5,901 Vue.js developers</p>
    </div>
    <div class="row row--body">
      <div class="header">
        <div class="organized-by">
          <img 
            src="https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg" 
            alt="Meetup organizer" 
            class="organized-by-img"
          >
          <p class="organized-by-name"> 
            Organized by:<br>
            <span class="name">Philippe Creux</span>
          </p>
        </div>
        <button class="button-add">
          <span><i class="fas fa-plus" /></span> Add me
        </button>
      </div>
      <hr class="divider">
      <h3 class="about-header">About Meetup</h3>
      <p class="about-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, ipsum unde, reprehenderit, expedita modi iusto est tempore aliquid officiis eveniet maxime velit impedit. Quis praesentium, excepturi illo nobis, aperiam dolores!
      </p>
      <p class="about-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, ipsum unde, reprehenderit, expedita modi iusto est tempore aliquid officiis eveniet maxime velit impedit. Quis praesentium, excepturi illo nobis, aperiam dolores!
      </p>
    </div>
	</div>
</template>

<style lang="scss" scoped>
$text-color: #ffffff;
$btn-color: #f13a59;
$shadow-color: rgba(46, 62, 72, 0.12);

.add-to-meetup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 30rem;
  box-shadow: 0 0 0.125rem 0 $shadow-color, 0 0.125rem 0.25rem 0 $shadow-color;
}

.row {
  padding: 1rem;

  &--header {
    text-align: center;
    background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.6)),
      url(https://cdn-images-1.medium.com/max/2000/1*qnI8K0Udjw4lciWDED4HGw.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    .close {
      font-size: 0.85rem;
      color: darken($text-color, 30%);
      border: 1px solid darken($text-color, 30%);
      border-radius: 0.125rem;
      padding: 0.25rem 0.5rem;
      cursor: pointer;
      position: absolute;
      right: 1rem;
    }

    .name {
      color: $text-color;
      margin-top: 3.5rem;
    }

    .members {
      color: darken($text-color, 30%);
      font-size: 0.85rem;
    }
  }

  &--body {
    padding-top: 0;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @at-root .organized-by {
        display: flex;
        align-items: center;

        &-img {
          height: 3rem;
          border-radius: 50%;
        }

        &-name {
          margin-left: 1rem;

          .name {
            padding-top: 0.5rem;
            font-weight: 600;
            display: block;
          }
        }
      }

      @at-root .button-add {
        background-color: $btn-color;
        color: $text-color;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        border-radius: 0.125rem;
        cursor: pointer;
      }
    }

    .divider {
      border-bottom: none;
      margin: 0;
    }

    .about {
      &-header {
        font-size: 1rem;
        font-weight: 600;
        margin: 0.75rem 0 0.5rem;
      }

      &-body {
        letter-spacing: 0.05rem;
        word-spacing: 0.25rem;
      }
    }
  }
}
</style>
