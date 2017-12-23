<template>
  <div class="modal" :class="{'is-active': value}">
    <div class="modal-background" @click="$emit('input', false)"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <span class="title-block">{{experience.role}}</span>
          <span class="title-separator">-</span>
          <span class="is-uppercase title-block">{{experience.company}}</span>
        </p>
        <button class="delete" @click="$emit('input', false)" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div v-html="experience.description"></div>
      </section>
      <!-- <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'xp-modal',
  props: {
    experience: {
      type: Object,
      required: true
    },
    value: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-card{
    width: 60vw;
  }
 .modal-card-title {
   flex-shrink: 1;
 }
 .title-block{
   display: inline-block;
   word-wrap: normal;
   word-break: keep-all;
   white-space: nowrap;
 }
</style>
