<template>
  <!--Начало-->
  <componentn :icon-type="iconType"></componentn>
  <!--Конец-->
</template>

<script>
import angry from './icons/AngryIcon.vue';
import annoyed from './icons/AnnoyedIcon.vue';
import embarrassed from './icons/EmbarrassedIcon.vue';
import neutral from './icons/NeutralIcon.vue';
import excited from './icons/ExcitedIcon.vue';
import frustrated from './icons/FrustratedIcon.vue';
import happy from './icons/HappyIcon.vue';
import lonely from './icons/LonelyIcon.vue';
import loved from './icons/LovedIcon.vue';
import nervous from './icons/NervousIcon.vue';
import sad from './icons/SadIcon.vue';
import scared from './icons/ScaredIcon.vue';
import sick from './icons/SickIcon.vue';
import stressed from './icons/StressedIcon.vue';
import surprised from './icons/SurprisedIcon.vue';
import tired from './icons/TiredIcon.vue';
export default {
  name: 'ItisIcon',
  // Начало
  components: {
    angry,
    annoyed,
    embarrassed,
    excited,
    frustrated,
    happy,
    neutral,
    lonely,
    loved,
    nervous,
    sad,
    scared,
    sick,
    stressed,
    surprised,
    tired
  },
  props: {
    iconType: {
      Type: String,
      default: () => [],
    },
  },
  // Конец
};
</script>