<template src="./FieldGroups.html"></template>
<style lang="scss" scoped>
  @import 'fieldgroups.scss'
</style>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'FieldGroups',
  data () {
    return {
      fieldGroupName: ''
    }
  },
  computed: {
    ...mapGetters([
      'indexOfSelectedFieldGroup'
    ])
  },
  props: ['fieldGroups'],
  methods: {
    ...mapMutations([
      'selectFieldGroup'
    ]),
    addFieldGroup: function () {
      const exist = this.fieldGroups.find(fieldGroup => fieldGroup.name === this.fieldGroupName)
      if (this.fieldGroupName && !exist) {
        this.$store.commit('addFieldGroup', this.fieldGroupName)
        this.fieldGroupName = null
        this.hideModal()
      }
      if (exist) {
        alert('Another field group with the name "' + this.fieldGroupName + '" exists')
      }
    },
    selectFieldGroup: function (id) {
      this.$store.commit('selectFieldGroup', id)
    },
    showModal: function () {
      this.$refs.myModalRef.show()
    },
    hideModal: function () {
      this.$refs.myModalRef.hide()
    }
  }
}
</script>
