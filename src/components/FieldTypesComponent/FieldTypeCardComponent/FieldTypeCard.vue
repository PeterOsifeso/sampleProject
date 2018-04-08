<template src="./FieldTypeCard.html"></template>
<style lang="scss" scoped>
  @import 'fieldtypecard.scss'
</style>

<script>
import Icon from 'vue-awesome/components/Icon'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'FieldTypeCard',
  props: ['type'],
  components: {
    Icon
  },
  computed: {
    ...mapGetters([
      'indexOfSelectedField'
    ])
  },
  methods: {
    ...mapMutations([
      'addInputField',
      'selectField'
    ]),
    selectField: function (id) {
      this.$store.commit('selectField', id)
      this.addType(id)
    },
    addType: function (id) {
      this.$store.commit('addInputField', id)
    }
  }
}
</script>
