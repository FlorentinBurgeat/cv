<template>
  <div class="modal" :class="{'is-active': value}">
    <div class="modal-background" @click="$emit('input', false)"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <div class="modal-card-title">
          <h1 class="title is-uppercase">{{experience.company}}</h1>
          <h2 class="subtitle">{{experience.role}}</h2>
        </div>
        <button class="delete" @click="$emit('input', false)" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <template v-if="experience.tags">
          <p class="tags">
            <span class="tag is-warning is-medium" v-for="(tag, tagId) in experience.tags" :key="tagId">{{tag}}</span>
          </p>
          <div class="is-divider"></div>
          </template>
        <p class="description" v-for="(paragraphe, pIndex) in descriptionParagraphe" v-html="paragraphe" :key="xp + pIndex"></p>
      </section>
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
  },
  computed: {
    descriptionParagraphe () {
      return typeof this.experience.description === 'string' ? [this.experience.description] : this.experience.description
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-card {
  @media(min-width: 1024px) {
    width: 960px;
  }
}
.is-divider {
  margin: 1rem 0px;
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
 p.description {
   text-indent: 2rem;
 }
</style>
