<template>
<div class="formation">
  <h1 class="title">{{$t('formation')}}</h1>
  <ul class="timeline formation">
    <li class="timeline-header">
      <span class="tag is-large is-info">
        {{$t('endOfStudies')}}
      </span>
    </li>
    <li v-for="(formation, index) in $t('formations')"
        :key="index"
        class="timeline-item is-info">
      <div class="timeline-marker is-info"></div>
      <div class="timeline-content">
        <p class="heading is-size-6">{{formation.school}} - {{formation.location}}</p>
        <p class="heading year">{{formation.dates}}</p>
        <p class="description">{{formation.description}}</p>
      </div>
    </li>
    <li class="timeline-header">
      <span class="tag is-large is-info">
        {{$t('lycee')}}
      </span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'formation'
}
</script>
