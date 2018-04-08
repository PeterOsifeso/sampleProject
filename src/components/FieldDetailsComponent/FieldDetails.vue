<template src="./fielddetails.html"></template>
<style lang="scss" scoped>
  @import 'fielddetails.scss'
</style>
<script>
import FieldGroups from './FieldGroupsComponent/FieldGroups'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'FieldDetails',
  data () {
    return {
      selectedTagGroup: []
    }
  },
  props: ['fields', 'fieldGroups'],
  components: {
    Icon,
    'field-group': FieldGroups
  },
  computed: {
    checkRegex: function () {
      if (this.fields.customValidation && this.fields.customValidation.length === 0) {
        return null
      }
      try {
        let testReg = new RegExp(this.fields.customValidation)
        // to pass linting
        testReg.test('123')
        return true
      } catch (e) {
        return false
      }
    },
    checkDisplayLabel: function () {
      if (this.fields.displayLabel === null) {
        return null
      } else {
        return this.fields.displayLabel.length > 0
      }
    }
  },
  methods: {
    toggleFieldTag: function (tag) {
      const tagIndex = this.fields.selectedTags.indexOf(tag)
      if (tagIndex > -1) {
        this.fields.selectedTags.splice(tagIndex, 1)
      } else {
        this.fields.selectedTags.push(tag)
      }
    },
    showTags: function (tagGroup) {
      this.selectedTagGroup = tagGroup
    },
    generateReferenceName: function () {
      this.fields.referenceName = this.fields.displayLabel.replace(/\s/g, '').toLowerCase()
    },
    generateOptionValue: function (fields) {
      if (this.fields.options) {
        let option = this.fields.options[0]
        const index = this.fields.options.indexOf(option)
        this.fields.options[index].value = this.fields.options[index].name.replace(/\s/g, '').toLowerCase()
      }
    },
    addSelectOption: function (option) {
      const index = this.fields.options.indexOf(option)
      this.fields.options.splice(index + 1, 0, {id: this.fields.options.length, value: ''})
    },
    removeSelectOption: function (option) {
      if (this.fields.options.length > 1) {
        const index = this.fields.options.indexOf(option)
        this.fields.options.splice(index, 1)
      }
    }
  }
}
</script>
