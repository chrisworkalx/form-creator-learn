<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <!-- {{ currentPage }} / {{ pageCount }} -->
    <el-drawer
      title="同意授权书"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      size="100%"
      custom-class="cst-drawer"
      :wrapperClosable="false"
    >
      <!-- src="/intro.pdf" -->

      <!-- src="http://47.100.90.213/intro.pdf" -->
      <!-- <pdf
        ref="myPdfComponent"
        src="/intro.pdf"
        @num-pages="pageCount = $event"
        @page-loaded="currentPage = $event"
        :page="pageNum"
        @progress="loadedRatio = $event"
      ></pdf> -->
      <pdf
        :src="url"
        v-for="(item, index) in numPages"
        :key="index"
        :page="item"
        ref="refPdf"
      ></pdf>
      <!-- <button @click="logContent">log content</button> -->
      <div class="pagination_box">
        <el-pagination
          background
          @current-change="handlePdfChange"
          :current-page="pageNum"
          :page-size="1"
          layout="prev, pager, next"
          :total="pageCount"
        >
        </el-pagination>
      </div>
    </el-drawer>

    <el-button @click="onPrint" type="primary"> 打印 </el-button>
    <!-- <vue-pdf-embed :source="url" width="600" :page="Number('1')" ref="pdfRef" /> -->

    <el-button @click="drawer = true" type="primary"> 点我打开 </el-button>
    <my-draw-pdf
      :url="url"
      ref="myDraw"
      :withHeader="false"
      title="同意授权书"
      cstTitle="同意授权书"
    ></my-draw-pdf>
    <el-button @click="handleOpenDraw" type="primary"> 自定义组件 </el-button>
  </div>
</template>
<script>
import pdf from 'vue-pdf';
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed.js';
import MyDrawPdf from '@/components/Pdf';
export default {
  components: {
    pdf,
    VuePdfEmbed,
    MyDrawPdf
  },
  data() {
    return {
      url: '/intro.pdf',
      // url: 'http://47.100.90.213/intro.pdf',
      drawer: false,
      currentPage: 0,
      pageCount: 0,
      pageNum: 1,
      loadedRatio: 0,
      direction: 'btt',
      numPages: null // pdf 总页数
    };
  },
  mounted() {
    this.getNumPages();
  },
  methods: {
    logContent() {
      this.$refs.myPdfComponent.pdf.forEachPage(function (page) {
        return page.getTextContent().then(function (content) {
          var text = content.items.map((item) => item.str);
          console.log(text);
        });
      });
    },
    handlePdfChange(val) {
      this.pageNum = Number(val);
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    getNumPages() {
      console.log(this.url, 'this.url');
      let loadingTask = pdf.createLoadingTask(this.url);
      console.log(loadingTask, 'loadingTask===>');
      loadingTask.promise
        .then((pdf) => {
          this.numPages = pdf.numPages;
        })
        .catch((err) => {
          console.error('pdf 加载失败', err);
        });
    },
    onPrint() {
      this.$refs.pdfRef.print();
    },
    handleOpenDraw() {
      console.log('324324');
      this.$refs.myDraw.handleOpenDraw();
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
