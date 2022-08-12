<template>
  <div class="box">
    <h1>{{ $t('form.create') }}</h1>
    <el-button @click="switchStoreLang">切换store语言</el-button>
    <form-base></form-base>
  </div>
</template>

<script>
// @ is an alias to /src
import FormBase from '@/components/form-making/base.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'formMaking',
  components: {
    FormBase
  },
  methods: {
    ...mapMutations({
      changeLang: 'CHANGE_LANG'
    }),
    switchStoreLang() {
      this.changeLang(this.$i18n.locale === 'zh-CN' ? 'en-US' : 'zh-CN');
    }
  }
};
</script>
