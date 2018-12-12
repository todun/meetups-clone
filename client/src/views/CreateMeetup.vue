<template>
  <div class="create page">
    <meetup-header />
    <div class="steps">
      <transition name="fade">
        <meetup-location
          v-if="displayStep.one"
          :add-meetup-info="addMeetupInfo"
        />
      </transition>
      <hr v-if="displayStep.two" class="divider" />
      <transition name="fade">
        <meetup-topic v-if="displayStep.two" :add-meetup-info="addMeetupInfo" />
      </transition>
      <hr v-if="displayStep.three" class="divider" />
      <transition name="fade">
        <meetup-details
          v-if="displayStep.three"
          :add-meetup-info="addMeetupInfo"
        />
      </transition>
      <hr v-if="displayStep.four" class="divider" />
      <transition name="fade">
        <meetup-meaning
          v-if="displayStep.four"
          :create-meetup="createMeetup"
          :is-login-msg-displayed="isLoginMsgDisplayed"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import MeetupHeader from "@/components/create/MeetupCreateHeader";
import MeetupLocation from "@/components/create/MeetupLocation";
import MeetupTopic from "@/components/create/MeetupTopic";
import MeetupDetails from "@/components/create/MeetupDetails";
import MeetupMeaning from "@/components/create/MeetupMeaning";

import { createNewMeetup } from "@/graphql/mutations";

export default {
  name: "create-meetup",
  components: {
    MeetupHeader,
    MeetupLocation,
    MeetupTopic,
    MeetupDetails,
    MeetupMeaning
  },
  data() {
    return {
      displayStep: {
        one: true,
        two: false,
        three: false,
        four: false
      },
      meetup: {
        location: {},
        type: [],
        details: {
          name: "",
          hostedBy: "",
          description: "",
          imageUrl: "",
          eventStart: "",
          eventEnd: ""
        }
      },
      isLoginMsgDisplayed: false
    };
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/isAuthenticated",
      currentUser: "user/currentUser",
      currentLocation: "currentLocation"
    })
  },
  methods: {
    addMeetupInfo(meetupInfo, nextStep) {
      this.meetup = { ...this.meetup, ...meetupInfo };
      this.displayStep = { ...this.displayStep, ...nextStep };
    },
    createMeetup() {
      const {
        meetup: { location, type, details }
      } = this.$data;

      if (this.isAuthenticated && this.currentUser) {
        this.$apollo.mutate({
          mutation: createNewMeetup,
          variables: {
            addedBy: this.currentUser.id,
            location,
            type,
            details
          }
        });
      } else {
        this.isLoginMsgDisplayed = true;
      }
    }
  },
  created() {
    this.$eventBus.$on("display-next-step", payload => {
      this.displayStep[payload.step] = payload.shouldDisplay;
    });

    this.meetup = {
      ...this.meetup,
      location: this.currentLocation
    };
  },
  beforeDestroy() {
    this.$eventBus.$off(["display-next-step"]);
  }
};
</script>

<style lang="scss" scoped>
.steps {
  padding: 3rem 15rem;
}

.divider {
  border-top: none;
  margin: 1rem 0 1.75rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
