<template>
  <div>
    <div>test2</div>
    {{ count }}
    <button @click="add">增加</button>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
};
</script>

<style lang="scss" scoped></style>
