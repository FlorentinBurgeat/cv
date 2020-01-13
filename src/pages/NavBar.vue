<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      Florentin BURGEAT
    </div>
    <div class="navbar-menu is-flex">
      <div class="navbar-end"><a class="navbar-item" @click="setLocale($t('switchLanguage.locale'))">{{$t('switchLanguage.name')}}</a></div>
    </div>
  </nav>
</template>

<script>
import i18n from '../i18n'
export default {
  name: 'navbar',
  methods: {
    setLocale (locale) {
      i18n.locale = locale
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';
nav.navbar{
  display: inline-flex;
  justify-content: space-between;
  &, & .navbar-menu {
     background-color: $blue;
  }
  .navbar-menu {
    padding: 0px;
    .navbar-end {
      padding: 0px;
      a.navbar-item {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }
  }
  * {
    color: $white;
  }
  .navbar-item:hover {
    background-color: $cyan;
  }
}
  .navbar-brand {
    align-items: center;
    padding-left: 1rem;
  }

</style>
