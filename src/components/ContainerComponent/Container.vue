<template src="./container.html"></template>
<style lang="scss" scoped>
  @import 'container.scss'
</style>

<script>
import FieldTypes from '../FieldTypesComponent/FieldTypes'
import FieldDetails from '../FieldDetailsComponent/FieldDetails'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Container',
  components: {
    'field-types': FieldTypes,
    'field-details': FieldDetails
  },
  computed: {
    ...mapGetters([
      'types',
      'fields',
      'fieldGroups',
      'indexOfSelectedFieldGroup'
    ])
  },
  methods: {
    ...mapMutations([
      'removeInputField',
      'saveInputToGroup'
    ]),
    removeInput: function () {
      this.$store.commit('removeInputField')
    },
    saveInputToGroup: function () {
      this.$store.commit('saveInputToGroup')
    }
  }
}
</script>
