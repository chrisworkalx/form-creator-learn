<template>
  <el-drawer
    :visible.sync="drawer"
    :direction="direction"
    :before-close="handleClose"
    size="100%"
    custom-class="cst-drawer"
    :wrapperClosable="false"
    v-bind="$attrs"
  >
    <div class="drawer-content" v-loading="isLoading">
      <slot name="header">
        <div v-if="!$attrs.withHeader" class="cst-header">
          <div class="left">
            <span v-if="showAllPages"> {{ pageCount }} page(s) </span>
            <span v-else>
              <button :disabled="page <= 1" @click="page--">❮</button>
              {{ page }} / {{ pageCount }}
              <button :disabled="page >= pageCount" @click="page++">❯</button>
            </span>
            <label>
              <input v-model="showAllPages" type="checkbox" />
              Show all pages
            </label>
          </div>
          <div class="center">
            <span>{{ cstTitle }}</span>
          </div>
          <div class="right">
            <i class="el-icon-download largeIcon" @click="handleDownload"></i>
            <i class="el-icon-close largeIcon" @click="handleClose"></i>
          </div>
        </div>
      </slot>
      <div class="pdf-box">
        <vue-pdf-embed
          :source="url"
          ref="pdfRef"
          :page="page"
          @rendered="handleDocumentRender"
        />
      </div>
    </div>
  </el-drawer>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed.js';
export default {
  name: 'PdfComponent',
  components: {
    VuePdfEmbed
  },
  data() {
    return {
      isLoading: true,
      drawer: false,
      showAllPages: true,
      page: null,
      pageCount: 1
    };
  },
  props: {
    url: {
      type: String,
      default: ''
    },
    cstTitle: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: 'btt'
    },
    drawClose: {
      type: Function,
      default: () => {}
    }
  },
  watch: {
    showAllPages() {
      this.page = this.showAllPages ? null : 1;
    }
  },
  methods: {
    handleOpenDraw() {
      this.drawer = true;
    },
    handleDocumentRender() {
      this.isLoading = false;
      this.pageCount = this.$refs.pdfRef.pageCount;
    },
    handleDownload() {
      this.$refs.pdfRef.print();
    },
    handleClose() {
      this.drawer = false;
    }
  }
};
</script>

<style lang="scss">
.cst-drawer {
  &.el-drawer {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
<style lang="scss" scoped>
.drawer-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  .cst-header {
    padding: 20px 18px;
    box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
    background-color: #555;
    color: #ddd;
    display: flex;
    align-items: center;
    .left {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .center {
      flex: 1;
      font-size: 18px;
      font-weight: 700;
    }
    .right {
      flex: 1;
      text-align: right;
      i {
        color: #fff;
        font-size: 20px;
        margin-right: 8px;
        cursor: pointer;
      }
    }
  }
  .pdf-box {
    flex: 1;
    overflow: auto;
  }
}
</style>
