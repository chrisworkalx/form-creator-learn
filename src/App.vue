<template>
  <div id="app">
    <div
      class="menu"
      style="box-shadow: 0 0 5px #ccc; display: inline-block; padding: 4px"
    >
      {{ $t('common.swicthLang') }}
      <ul>
        <li>
          <el-button @click="swicthLang('zh-CN')">中文</el-button>
        </li>
        <li>
          <el-button @click="swicthLang('en-US')">英文</el-button>
        </li>
      </ul>
    </div>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/editor">富文本编辑器</router-link>
      <router-link to="/form">form-creator</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    swicthLang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .menu {
    position: relative;
    &:hover {
      ul {
        display: block;
        opacity: 1;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        background-color: #fff;
        color: #fff;
        padding: 20px;
      }
    }
    ul {
      list-style: none;
      position: absolute;
      left: 0;
      top: 30px;
      padding: 0;
      margin: 0;
      opacity: 0;
      transition: 1s ease-in-out;
      li {
        margin: 10px;
      }
    }
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
