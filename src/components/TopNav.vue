<template>
  <header class="topNav">
    <div class="icon">LOGO</div>
    <ol>
      <li>菜单1</li>
      <li>菜单2</li>
      <li>Github</li>
    </ol>
  </header>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.topNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  font-size: 16px;
  background-color: pink;
  > .icon {
  }
  > ol {
    display: flex;
    align-items: center;

    > li {
      padding-left: 9px;
    }
  }
}
</style>
