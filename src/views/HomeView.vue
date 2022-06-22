<template>
  <div>
    <div class="home">home</div>
    {{ count }}
    <button @click="add">增加</button>
    <p><button @click="test1Click">test1</button></p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
    test1Click() {
      this.$router.push({
        path: "/test1",
      });
    },
  },
  // beforeRouteLeave(to, from, next) {
  //   console.log(to);
  //   console.log(from);
  //   if (to.path === "/test1") {
  //     let list = [...this.$store.state.routeList];
  //     list.push(from.name);
  //     this.$store.commit("addCatch", list);
  //   }
  //   next();
  // },
};
</script>
