<template>
  <div>
    <div>test1</div>
    {{ count }}
    <input type="text" v-model="value" />
    <button @click="add">增加</button>
    <div>
      <button @click="test2Click">test2</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test1",
  data() {
    return {
      value: "",
      count: 0,
    };
  },
  mounted() {
    // console.log("加载...");
  },
  methods: {
    add() {
      this.count++;
    },
    test2Click() {
      this.$router.push({
        path: "/test2",
      });
    },
  },
  // beforeRouteEnter(to, from, next) {
  //   next((vm) => {
  //     let list = [...vm.$store.getters.routeList];
  //     if (!list.includes(to.name)) {
  //       list.push(to.name);
  //       vm.$store.commit("addCatch", list);
  //     }
  //   });
  // },
  beforeRouteLeave(to, from, next) {
    // console.log(to);
    // console.log(from);
    let list = [...this.$store.getters.routeList];
    if (to.path === "/test2") {
      if (!list.includes(from.name)) {
        console.log(888);
        list.push(from.name);
        this.$store.commit("addCatch", list);
      }
    } else if (to.path !== "test1") {
      if (list.includes(from.name)) {
        console.log(999);
        list.splice(list.indexOf(from.name), 1);
        this.$store.commit("addCatch", list);
      }
    }
    next();
  },
};
</script>

<style lang="scss" scoped></style>
