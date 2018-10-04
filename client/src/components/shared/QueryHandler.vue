<template>
  <ApolloQuery :query="apolloQuery" :variables="apolloVariables ? apolloVariables : false">
    <template slot-scope="{ result: { loading, error, data } }">
      <h4 v-if="loading">Loading...</h4>
      <div v-else-if="error">Oops! Something went wrong</div>

      <div v-else-if="data">
        <slot :data="data"></slot>
      </div>

      <h4 v-else>***Crickets***</h4>
    </template>
  </ApolloQuery>
</template>

<script>
export default {
  name: "query-handler",
  props: {
    apolloQuery: {
      type: Object,
      required: true
    },
    apolloVariables: {
      type: Object
    }
  }
};
</script>
