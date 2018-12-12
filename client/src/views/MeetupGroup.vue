<template>
  <div class="meetup-group page">
    <meetup-header />
    <hr class="divider" />
    <meetup-nav />
    <div class="group-main">
      <div class="group__row">
        <div class="group__column group__column--main">
          <next-meetup />
          <about-meetup />
          <meetup-members />
          <meetup-photos />
          <meetup-discussions />
        </div>
        <div class="group__column group__column--upcoming">
          <template v-for="meetup in [1, 2, 3, 4]">
            <upcoming-meetups :key="meetup" />
          </template>
        </div>
      </div>
      <related-topics />
      <related-meetups />
    </div>
  </div>
</template>

<script>
import MeetupHeader from "@/components/group/MeetupHeader";
import MeetupNav from "@/components/group/MeetupNav";
import NextMeetup from "@/components/group/NextMeetup";
import AboutMeetup from "@/components/group/AboutMeetup";
import MeetupMembers from "@/components/group/MeetupMembers";
import MeetupPhotos from "@/components/group/MeetupPhotos";
import MeetupDiscussions from "@/components/group/MeetupDiscussions";
import RelatedTopics from "@/components/group/RelatedTopics";
import RelatedMeetups from "@/components/group/RelatedMeetups";
import UpcomingMeetups from "@/components/group/UpcomingMeetups";

export default {
  components: {
    MeetupHeader,
    MeetupNav,
    NextMeetup,
    AboutMeetup,
    MeetupMembers,
    MeetupPhotos,
    MeetupDiscussions,
    RelatedTopics,
    RelatedMeetups,
    UpcomingMeetups
  }
};
</script>

<style lang="scss" scoped>
$text-color: #ffffff;

.divider {
  border-bottom: none;
  margin: 0;
}

.group {
  &-main {
    background-color: darken($text-color, 3%);
    padding: 2.5rem 5rem;
  }

  &__row {
    display: flex;
  }

  &__column {
    &--main {
      flex-basis: 70%;
    }

    &--upcoming {
      flex-basis: 30%;
    }
  }
}
</style>
