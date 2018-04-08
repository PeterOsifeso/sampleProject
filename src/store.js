import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    types: [
      {id: 0, icon: 'heading', name: 'Text', definition: 'String of text', defaultDisplay: 'Free-form text input'},
      {id: 1, icon: 'calendar-alt', name: 'Date', definition: 'Standard ISO format date', defaultDisplay: 'Datepicker, with configurable format'},
      {id: 2, icon: 'car', name: 'VIN', definition: 'Vehicle Identification Number', defaultDisplay: 'Free-form text input'},
      {id: 3, icon: 'filter', name: 'Select', definition: 'Single Option Chooser', defaultDisplay: 'Multiple options for user to select'}
    ],
    fields: null,
    indexOfSelectedField: null,
    indexOfSelectedFieldGroup: null,
    fieldGroups: [
      {id: 0, name: 'Sample Group', groups: []}
    ]
  },
  getters: {
    types: state => state.types,
    fields: state => state.fields,
    fieldGroups: state => state.fieldGroups,
    indexOfSelectedFieldGroup: state => state.indexOfSelectedFieldGroup,
    indexOfSelectedField: state => state.indexOfSelectedField
  },
  mutations: {
    addFieldGroup: function (state, fieldGroupName) {
      state.fieldGroups.push({id: state.fieldGroups.length, name: fieldGroupName, groups: []})
    },
    removeInputField: function (state) {
      state.fields = null
      state.indexOfSelectedField = null
    },
    selectFieldGroup: function (state, id) {
      const selectedFieldGroup = state.fieldGroups.find(group => group.id === id)
      let index = state.fieldGroups.indexOf(selectedFieldGroup)
      state.indexOfSelectedFieldGroup = index
    },
    selectField: function (state, index) {
      state.indexOfSelectedField = index
    },
    saveInputToGroup: function (state) {
      console.log('heres what i got', state.fields)
      if (state.fields.displayLabel.length === 0) {
        alert('Display Label cannot be empty')
      } else if (state.fields.fieldType === 'select' && (state.fields.options[0].name.length === 0 || state.fields.options[0].value.length === 0)) {
        alert('At least 1 option name and value is required to add this input field to the group')
      } else {
        state.fieldGroups[state.indexOfSelectedFieldGroup].groups.push(state.fields)
      }
    },
    addInputField: function (state, id) {
      switch (id) {
        case 0 :
          state.fields = {
            id: 0,
            fieldType: 'text',
            inputType: 'text',
            displayLabel: null,
            defaultValue: null,
            customValidation: null,
            referenceName: null,
            tagGroups: [
              {id: 0, name: 'Vinmaster', tags: ['1', '2']},
              {id: 1, name: 'ISO', tags: ['1', '2', '3', '4']},
              {id: 2, name: 'Tag 3', tags: ['1']}
            ],
            selectedTags: []
          }
          break
        case 1:
          state.fields = {
            id: 1,
            fieldType: 'date',
            inputType: 'date',
            displayLabel: null,
            defaultValue: null,
            customValidation: null,
            referenceName: null,
            tagGroups: [
              {id: 0, name: 'Test 1', tags: ['A', 'B']},
              {id: 1, name: 'Test 2', tags: ['C', 'D', 'E', 'F']},
              {id: 2, name: 'Test 3', tags: ['G']}
            ],
            selectedTags: []
          }
          break
        case 2:
          state.fields = {
            id: 2,
            fieldType: 'vin',
            InputType: 'number',
            displayLabel: null,
            defaultValue: null,
            customValidation: null,
            referenceName: null,
            tagGroups: [
              {id: 0, name: 'Up', tags: ['H', 'I']},
              {id: 1, name: 'Middle', tags: ['J', 'K', 'L', 'M']},
              {id: 2, name: 'Down', tags: ['N']}
            ],
            selectedTags: []
          }
          break
        case 3:
          state.fields = {
            id: 2,
            fieldType: 'select',
            inputType: 'text',
            displayLabel: null,
            defaultValue: null,
            options: [
              {id: 0, name: '', value: ''}
            ],
            referenceName: null,
            tagGroups: [
              {id: 0, name: 'Vinmaster', tags: ['1', '2']},
              {id: 1, name: 'ISO', tags: ['1', '2', '3', '4']},
              {id: 2, name: 'Tag 3', tags: ['1']}
            ],
            selectedTags: []
          }
          break
      }
    }
  }
})
