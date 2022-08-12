<template>
  <div style="padding: 40px">
    <h1>{{ title }}</h1>

    <!-- :menu="menu" 配置左侧的菜单 -->
    <fc-designer ref="designer" height="1000px">
      <template slot="handle">
        <el-button type="primary" @click="getJson">生成json文件</el-button>
        <el-button type="primary" @click="handleSubmit">提交</el-button>
      </template>
    </fc-designer>
    <hr />
    <form-create
      :rule="rule"
      v-model="fApi"
      :option="options"
      :value.sync="value"
    ></form-create>
  </div>
</template>

<script>
export default {
  name: 'FormCreatorTest',
  data() {
    return {
      title: 'form-creator低代码测试',
      fApi: {},
      value: { field1: '111', field2: '222', time: '11:11:11' },
      options: {
        onSubmit: (formData) => {
          console.log('fApi', this.fApi);
          alert(JSON.stringify(formData));
        }
      },
      rule: [
        { type: 'input', field: 'field1', title: 'field1', value: 'aaa' },
        { type: 'input', field: 'field2', title: 'field2', value: 'sss' },
        { type: 'timePicker', field: 'time', title: 'time', value: '12:12:12' },
        {
          type: 'ElButton',
          title: 'Modify field1',
          native: false,
          on: {
            click: () => {
              this.rule[0].value += 'a';
            }
          },
          children: ['Click']
        }
      ],
      menu: [
        {
          title: '分组1',
          name: 'group1',
          list: [
            {
              icon: 'icon-checkbox',
              name: 'checkbox',
              label: '单选框'
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleSubmit() {
      // console.log('submit');
      console.log(
        'this.$refs.designer.getRule()',
        this.$refs.designer.getRule()
      );
    },
    getJson() {
      //FcDesigner 生成的`JSON`
      // 动态生成的json配置 object
      const FcDesignerRule = this.$refs.designer.getRule();
      console.log('FcDesignerRule', FcDesignerRule);
      //FcDesigner 生成的`options` //整个表单对应的设置配置项
      const FcDesignerOptions = this.$refs.designer.getOption();
      console.log('FcDesignerOptions', FcDesignerOptions);

      // 动态生成的json字符串形式
      const jsonStr = this.$refs.designer.getJson();
      console.log('jsonStr', jsonStr);
    }
  }
};
</script>

<style lang="scss" scoped></style>
