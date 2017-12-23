<template>
  <div class="cv">
    <XpModal v-model="isModalOpen" :experience="selectedExperience" />
    <nav-bar></nav-bar>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        
        <div class="tile is-parent">
          <div class="tile is-child box">
            <h1 class="title">Florentin BURGEAT</h1>
            <h2 class="subtitle">Curriculum Vitae</h2>
          </div>
        </div>

        <div class="tile">
          <div class="tile is-parent is-4">
            <div class="tile is-child box timeline">
              <Timeline @xpClicked="openXpModal"/>
            </div>
          </div>
          <div class="tile is-vertical is-8">
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
              <div class="tile is-parent">
                <div class="tile is-child box is-vertical">
                  <h1 class="title">{{$t('diplomas')}}</h1>
                  <div class="tile is-parent" v-for="(diploma, index) in $t('diplomasList')" :key="index">
                    <div class="tile is-child box diploma">
                      <span class="icon"><i class="fa" :class="diploma.icon"></i></span>
                      <span class="subtitle">{{diploma.title}}</span>
                    </div>
                  </div>
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
  // border: 5px solid $yellow;
  background-color: $white;
  &.diploma {
    background-color: $blue;
    &, .subtitle {
      color: $white;
    }
  }
}
.tile.is-ancestor {
  margin-top: 0px;
  .timeline.tile.box {
    flex-shrink: 0;
    // border: 2px solid #adf;
    padding-left: 0px;
    padding-right: 0px;
  }
  .skills {
    // border: 2px solid #A8D4AD;
  }
}
</style>

