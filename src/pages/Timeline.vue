<template>
<ul class="timeline">
    <li class="timeline-header" >
      <span class="tag is-large is-primary">{{$t('professionnalExperiences')}}</span>
    </li>
    <li class="timeline-item is-primary"></li>

    <template v-for="(xp, index) in $t('experiences')">
      <div v-if="xp.type === 'year'" class="timeline-header is-small" :key="index">
        <span class="tag is-small is-primary">{{xp.val}}</span>
      </div>
      <div v-else-if="xp.type === 'company'" :key="index" class="timeline-header">
        <span class="tag is-medium is-info">{{xp.val}}</span>
      </div>
      <li v-else :key="'xp' + index" class="timeline-item is-primary clickable" @click="$emit('xpClicked', xp)">
        <div class="timeline-marker is-primary"></div>
        <div class="timeline-content">
          <p class="heading company is-size-6">{{xp.company}} - {{xp.location}}</p>
          <p class="heading dates">{{xp.date}}</p>
          <p class="description">{{xp.role}}</p>
        </div>
      </li>
    </template>
    <li class="timeline-header" >
      <span class="tag is-large is-primary">{{$t('studentProjects')}}</span>
    </li>
    <li v-for="(xp, index) in $t('projects')" :key="'project' + index" class="timeline-item is-primary clickable" @click="$emit('xpClicked', xp)">
      <div class="timeline-marker is-primary"></div>
      <div class="timeline-content">
        <p class="heading company is-size-6">{{xp.company}} - {{xp.location}}</p>
        <p class="heading dates">{{xp.date}}</p>
        <p class="description">{{xp.role}}</p>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'timeline'
}
</script>
<style lang="scss" scoped>
@import '../styles/colors.scss';

li.timeline-item.clickable{
cursor: pointer;
  &:hover {
    background-color:lighten($cyan, 30);
    color: $black;
  }
}
</style>