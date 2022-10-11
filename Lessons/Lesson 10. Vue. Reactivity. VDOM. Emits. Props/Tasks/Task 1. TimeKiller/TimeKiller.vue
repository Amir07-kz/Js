<template>
    <div class="time-killer">
        <!--Начало-->
      <button @click="addDate"
              type="button"
              class="btn btn-warning">
        Добавить время!
      </button>
      <TimeElement
          :dateList="dateList"
          @remove="deleteDate">
      </TimeElement>
        <!--Конец-->
    </div>
</template>

<script>
export default {
    name: 'TimeKiller',
    // Начало
  data() {
    return {
      dateList: []
    }
  },
  methods: {
    addDate() {
      this.dateList.push(new Date())
    },
    deleteDate(index) {
      this.dateList.splice(index, 1)
    }
  }
    // Конец
};
</script>

<style>
.time-killer {
    margin: 100px;
    display: flex;
}

.time-killer > button {
    margin-right: 20px;
    align-self: baseline;
}
</style>