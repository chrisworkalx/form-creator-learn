<template>
  <form-create
    v-model="fapi"
    :rule="rule"
    :option="option"
    @submit="onSubmit"
  ></form-create>
</template>

<script>
import formCreate from '@form-create/element-ui';

//FcDesigner 生成的`JSON`
const FcDesignerRule =
  '[{"type":"input","field":"cuk5qqdw3umc","title":"输入框","info":"","_fc_drag_tag":"input","hidden":false,"display":true}]';

//FcDesigner 生成的`options`
const FcDesignerOptions =
  '{"form":{"labelPosition":"right","size":"mini","labelWidth":"125px","hideRequiredAsterisk":false,"showMessage":true,"inlineMessage":false}}';

export default {
  data() {
    return {
      fapi: null,
      rule: formCreate.parseJson(FcDesignerRule),
      option: formCreate.parseJson(FcDesignerOptions)
    };
  },
  methods: {
    onSubmit(formData) {
      //todo 提交表单
    }
  }
};
</script>
