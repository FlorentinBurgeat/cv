<template>
  <div class="skills">
    <h1 class="title">{{$t('skills')}}</h1>

    <div class="tabs is-small-tablet">
      <ul>
        <li v-for="(skillGroup, index) in $t('skillList')" :key="index"
          :class="{'is-active' : index === activeIndex}">
          <a @click="activeIndex = index">{{skillGroup.groupName}}</a></li>
      </ul>
    </div>

    <div class="skill-group">

      <div v-for="(skill, index) in $t(`skillList[${activeIndex}].skills`)" :key="index" class="skill">
        <div class="field is-horizontal">
          <div class="field-label">
            <span class="label">{{skill.name}}:</span>
          </div>
          <div class="field-body">
            <div class="field">
              <!-- <p class="control has-text-warning" v-if="skill.value !== undefined">
                <i class="fa" v-for="(star, starId) in getStars(skill.value)" :class="star" :key="starId"></i>
              </p> -->
              <progress v-if="skill.value !== undefined" class="progress is-primary" :value="skill.value" :max="maxStars"></progress>
              <p class="tags" v-if="skill.tags">
                <span class="tag is-warning is-medium" v-for="(tag, tagId) in skill.tags" :key="tagId">{{tag}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skills',
  data () {
    return {
      activeIndex: 0,
      maxStars: 5
    }
  },
  methods: {
    getStars (score) {
      const starArray = []
      for (let i = 0; i < this.maxStars; i++) {
        if (score >= 1) starArray.push('fa-star')
        else if (score > 0 && score < 1) starArray.push('fa-star-half-o')
        else starArray.push('fa-star-o')

        score--
      }
      return starArray
    }
  }
}
</script>

<style lang="scss" scoped>
.skills {
  padding-left: 1.5em;
  padding-right: 1.5em;
}
.skill-group {
  .progress {
    width: 50%;
  }
  .field.is-horizontal {
    margin-bottom: 2em;
  }
}

</style>
