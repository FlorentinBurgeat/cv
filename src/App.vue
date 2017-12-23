<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/initial-variables.sass";
@import "./styles/colors";
$radius: 0px;
$radius-large: 0px;
$radius-small: 0px;

// @import "~bulma/sass/utilities/derived-variables.sass";
$primary: $blue;
$info: $cyan;
$border: $yellow;
$text: $black;

@import "~bulma/bulma.sass";
@import "~bulma-timeline/timeline.sass";
@import "~font-awesome/css/font-awesome.min.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $yellow-light; 
}
.is-outlined {
  &.is-primary {
    color: $primary ;
    border-color: $primary !important;
  }
  &.is-info {
    color: $info ;
    border-color: $info !important;
  }
  &.is-warning {
    color: $warning ;
    border-color: $warning !important;
  }
  &.is-danger {
    color: $danger ;
    border-color: $danger !important;
  }
  background-color: $background;
  font-weight: bold;
  color: $black !important;
  border: 0.1em solid;
}
.timeline{
  padding-left: 12px;
  
  &.is-centered .timeline-item:nth-of-type(2n) {
    justify-content: flex-end;
    .timeline-marker {
      right: -0.43em;
    }
  }
  &:not(.is-centered):not(.is-rtl) {
    .timeline-header {
      justify-content: flex-start;
      margin-left: 1em;
    }
  }

  &.is-rtl {
    .timeline-header {
      justify-content: flex-end;
      margin-right: 1em;
    }
  }
  .timeline-content {
    padding-right: 32px !important;
  }
}
</style>
