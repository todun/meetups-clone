<template>
  <div class="find-meetups page">
    <find-meetups-header :meetup-type="meetupType" />
    <query-handler :apolloQuery="query" :apolloVariables="{}">
      <template slot-scope="defaultSlotScope">
        <search-meetups
          :currentLocation="defaultSlotScope.data.currentLocation.location.name"
          :change-user-location="changeUserLocation"
        />
        <meetups-grid
          :currentLocation="defaultSlotScope.data.currentLocation.location.name"
        />
      </template>
    </query-handler>
  </div>
</template>

<script>
import Header from "@/components/find/Header";
import SearchMeetups from "@/components/find/SearchMeetups";
import MeetupsGrid from "@/components/find/MeetupsGrid";
import QueryHandler from "@/components/shared/QueryHandler";

import { fetchCurrentLocation } from "@/graphql/queries";
import { changeLocation } from "@/graphql/mutations";

export default {
  components: {
    findMeetupsHeader: Header,
    SearchMeetups,
    MeetupsGrid,
    QueryHandler
  },
  data() {
    return {
      query: fetchCurrentLocation,
      meetups: [],
      currentLocation: {},
      newLocation: {},
      meetupType: this.$route.params.type,
      loading: 0
    };
  },
  watch: {
    "$route.params.type"(meetupType) {
      this.meetupType = meetupType;
    }
  },
  methods: {
    changeUserLocation() {
      this.$apollo.mutate({
        mutation: changeLocation,
        variables: {
          location: this.newLocation
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$body-color: #353e48;

.find-meetups {
  background-color: lighten($body-color, 70%);
  flex: 1;
}
</style>
