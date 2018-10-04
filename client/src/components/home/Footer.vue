<template>
	<div class="home-footer">
		<router-link class="create" to="/create">Create a Meetup</router-link>
		<hr class="divider">
		<div class="row">
			<div class="column column--menu">
				<template v-for="item in menuItems">
					<div 
						:class="`menu menu--${item.name.toLowerCase()}`" 
						:key="item.name"
					>
						<p>{{item.name}}</p>
						<ul>
							<template v-for="link in item.links">
								<router-link class="menu-item" :to="link.path" tag="li" :key="link.name">{{link.name}}</router-link>
							</template>
						</ul>
					</div>
				</template>
			</div>
			<div class="column column--buttons">
				<div class="row row--btn-grp">
					<i class="fab fa-facebook"></i>
					<i class="fab fa-twitter"></i>
					<i class="fab fa-youtube"></i>
					<i class="fab fa-instagram"></i>
					<i class="fab fa-medium"></i>
				</div>
				<div class="row row--language">
			    <select class="select-language" name="select-language" id="select-language">
			      <option>Select Language</option>
			      <option value="English">English</option>
			      <option value="French">French</option>
			    </select>
			  </div>
				<div class="row row--app-links">
					<a href="http://meetu.ps/2ZhShs" rel="noopener noreferrer">
						<img 
							class="app-link app-link--apple" 
							src="../../assets/images/applestore.png" 
							alt="Apple app store link"
						>
					</a>
					<a href="http://meetu.ps/2ZhSyb" rel="noopener noreferrer">
						<img 
							class="app-link app-link--google" 
							src="../../assets/images/googlestore.png" 
							alt="Google play store link"
						>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { menuItems } from "@/helpers";

export default {
  name: "home-footer",
  data() {
    return {
      menuItems
    };
  }
};
</script>

<style lang="scss" scoped>
$body-color: #353e48;
$text-color: #ffffff;
$select-color: #0f1721;

.home-footer {
  background-color: $body-color;
  color: $text-color;
  padding: 2.5rem 5rem;

  @at-root .create {
    color: $text-color;
    text-decoration: underline;
  }

  @at-root .divider {
    margin-top: 2rem;
    border-bottom: none;
  }

  @at-root .row {
    display: flex;
    justify-content: center;

    @at-root.column {
      &--menu {
        flex-basis: 55%;
        display: flex;
        justify-content: space-between;

        @at-root .menu-item {
          padding-bottom: 1rem;
          color: darken($text-color, 35%);
          cursor: pointer;
        }
      }

      &--buttons {
        margin-left: 5rem;
        flex-basis: 45%;

        .row {
          &--btn-grp {
            display: flex;
            justify-content: space-evenly;
            padding: 1rem;

            @at-root .svg-inline--fa {
              font-size: 1.5rem;
              color: darken($text-color, 35%);
            }
          }

          &--language {
            position: relative;
            display: block;
            width: 20.75rem;
            height: 3rem;
            line-height: 3;
            background-color: $select-color;
            overflow: hidden;
            border: 1px solid darken($text-color, 35%);
            border-radius: 0.25rem;
            margin: 2rem 0 2rem 4rem;

            &::after {
              content: "\25BC";
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              padding: 0 1rem;
              background-color: #34495e;
              pointer-events: none;
              transition: 250ms all ease;
            }

            @at-root .select-language {
              appearance: none;
              outline: 0;
              box-shadow: none;
              border: 0;
              background-color: $select-color;
              width: 100%;
              height: 100%;
              margin: 0;
              padding-left: 1rem;
              color: $text-color;
              cursor: pointer;
              font-size: 1rem;
              letter-spacing: 1px;

              &::-ms-expand {
                display: none;
              }
            }
          }

          &--app-links {
            @at-root .app-link {
              max-width: 10rem;

              &--apple {
                padding-right: 0.5rem;
              }

              &--google {
                padding-left: 0.5rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
