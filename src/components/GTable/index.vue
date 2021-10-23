<template>
  <div class="g-table">
    <div class="thead-box">
      <div class="thead">
        <div 
          class="text" 
          v-for="(item, index) in state.theadList" 
          :key="index"
        >
          <div>{{ item.label }}</div>
        </div>
      </div>
    </div>

    <div class="tbody-box">
      <div 
        class="tbody"
        v-for="(item, index) in state.tbodyList"
        :key="index"
      >
        <div class="text">{{ item.level }}</div>
        <div class="text">{{ item.profit }}</div>
        <div class="text">{{ item.percent }}</div>
        <div class="text">{{ item.bonus }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTable } from '../../assets/mixin/useTable'

export default {
  setup () {
    const { 
      state 
    } = useTable()

    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>

</style>