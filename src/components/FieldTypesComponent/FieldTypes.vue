<template src="./FieldTypes.html"></template>
<style lang="scss" scoped>
  @import 'fieldtypes.scss'
</style>
<script>
import FieldTypeCard from './FieldTypeCardComponent/FieldTypeCard'

export default {
  name: 'FieldTypes',
  data () {
    return {
      keyword: '',
      searchResults: []
    }
  },
  props: ['types'],
  components: {
    'field-type-card': FieldTypeCard
  },
  methods: {
    doFilter: function () {
      this.searchResults = this.types.filter(type => type.name.toLowerCase().indexOf(this.keyword.toLowerCase()) > -1)
    }
  }
}
</script>
