import { reactive } from 'vue'

export function useTable() {
  // const baseRatio = ref(0.05)
  // const scaleRatio = ref(0.5)
  // const percentNumber = ref(0)

  const state = reactive({
    layerNumbers: 5,
    layerList: [
      { label: '5', value: 5},
      { label: '10', value: 10},
      { label: '15', value: 15},
      { label: '20', value: 20},
      { label: '25', value: 25},
      { label: '30', value: 30},
    ],

    bonusNumbers: 100,
    bonusList: [
      { label: '100', value: 100},
      { label: '300', value: 300},
      { label: '500', value: 500},
      { label: '800', value: 800},
    ],

    theadList: [
      { label: '等级'},
      { label: '金额'},
      { label: '比例'},
      { label: '奖金'}
    ],

    tbodyList: [
      // { level: 'level 1', profit: 100, percent: '5', bonus: 20 }
    ]
  })

  return {
    state,
  }
}