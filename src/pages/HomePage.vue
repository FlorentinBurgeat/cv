<template>
  <div class="cv">
    <XpModal v-model="isModalOpen" :experience="selectedExperience" />
    <nav-bar></nav-bar>
    <div class="tile is-ancestor is-desktop">
      <div class="tile is-vertical is-parent">

        <div class="tile is-parent">
          <div class="tile box is-parent">
            <div class="tile is-child">
              <div class="columns-info">
                <div class="columns-info__column">
                  <h1 class="title">Florentin BURGEAT</h1>
                  <h2 class="subtitle">Curriculum Vitae</h2>
                  <p>{{$t('accroche')}}</p>
                </div>
                <div class="columns-info__column">
                  <a href="mailto:florentin.burgeat@orange.fr" class="mail is-flex"><i class="icon fa fa-envelope-o"></i><i>florentin.burgeat@orange.fr</i></a>
                  <p class="phone is-flex"><i class="icon fa fa-phone"></i><i>+33 6 11 80 74 86</i></p>
                  <a :href="$t('linkedIn')" class="linkedin is-flex"><i class="icon fa fa-linkedin-square"></i><i>LinkedIn</i></a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="tile main-columns">
          <div class="tile is-parent timeline">
            <div class="tile is-child box timeline__box">
              <Timeline @xpClicked="openXpModal"/>
            </div>
          </div>
          <div class="tile is-vertical skill-column">
            <div class="tile is-parent">
              <div class="tile is-child box skills">
                <Skills/>
              </div>
            </div>
            <div class="tile">
              <div class="tile is-parent">
                <div class="tile is-child box">
                  <Formation/>
                </div>
              </div>
              <div class="tile is-parent is-vertical">

                <div class="tile is-child box is-vertical">
                  <h1 class="title">{{$t('diplomas')}}</h1>
                  <div class="tile is-parent" v-for="(diploma, index) in $t('diplomasList')" :key="index">
                    <div class="tile is-child box diploma">
                      <span class="icon"><i class="fa" :class="diploma.icon"></i></span>
                      <span class="subtitle">{{diploma.title}}</span>
                    </div>
                  </div>
                </div>

                <div class="tile is-child box is-vertical">
                  <h1 class="title">{{$t('hobbies')}}</h1>
                  <div class="hobbie" v-for="(hobbie, index) in $t('hobbiesList')" :key="index">
                    <h2 class="title is-size-5">{{hobbie.title}}</h2>
                    <h3 class="subtitle is-size-6">{{hobbie.year}}</h3>
                    <p>{{hobbie.description}}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Timeline from './Timeline'
  import Formation from './Formation'
  import Skills from './Skills'
  import NavBar from './NavBar'
  import XpModal from './XpModal'
  export default {
    name: 'HomePage',
    components: {
      Timeline,
      Formation,
      Skills,
      NavBar,
      XpModal
    },
    data () {
      return {
        selectedExperience: {},
        isModalOpen: false
      }
    },
    methods: {
      openXpModal (xp) {
        this.selectedExperience = xp
        this.isModalOpen = true
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../styles/colors.scss';
  .box.is-child {
    background-color: $white;
    &.diploma {
      background-color: $blue;
      &, .subtitle {
        color: $white;
      }
      .icon {
        margin-right: 5px;
      }
    }
  }
  .columns-info {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    .columns-info__column {
      flex: 0 0 auto;
      a {
        color: $black;
        &:hover {
          color: $cyan;
        }
      }
    }

  }
  .main-columns {
    flex-flow: row wrap;
    .timeline {
      flex: 1 0 420px;
    }
    .skill-column {
      flex: 2 0 780px;
    }
  }
  .tile.is-ancestor {
    margin-top: 55px;
    .timeline__box.tile.box {
      // flex-shrink: 0;
      // border: 2px solid #adf;
      padding-left: 0px;
      padding-right: 0px;
    }
    .skills {
      // border: 2px solid #A8D4AD;
    }
  }
  .hobbie:not(:first-child) {
    margin-top: 20px;
  }
</style>

