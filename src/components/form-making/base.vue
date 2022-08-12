<template>
  <div>
    <fm-generate-form
      :data="jsonData"
      :remote="remoteFuncs"
      :value="editData"
      ref="generateForm"
    >
      <template slot="upload" slot-scope="scope">
        <!-- 上传 -->
        <!-- use v-model="scope.model.upload" to bind data -->
      </template>

      <template slot="firstStepFail" slot-scope="scope">
        <!--  -->
        <!-- use v-model="scope.model.firstStepFail" to bind data -->
        <el-button @click="agree">同意</el-button>
      </template>

      <template slot="firstStepFail" slot-scope="scope">
        <el-button @click="refuse">拒绝</el-button>
        <!--  -->
        <!-- use v-model="scope.model.firstStepFail" to bind data -->
      </template>
    </fm-generate-form>
    <el-button type="primary" @click="handleSubmit">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsonData: {
        list: [
          {
            type: 'input',
            icon: 'icon-input',
            options: {
              width: '100%',
              defaultValue: '',
              required: false,
              dataType: 'string',
              pattern: '',
              placeholder: '',
              disabled: false,
              remoteFunc: 'func_1659949765000_65025'
            },
            name: '姓名',
            key: '1659949765000_65025',
            model: 'input',
            rules: [{ type: 'string', message: '姓名格式不正确' }]
          },
          {
            type: 'checkbox',
            icon: 'icon-check-box',
            options: {
              inline: false,
              defaultValue: [],
              showLabel: false,
              options: [
                { value: '苹果' },
                { value: '栗子' },
                { value: '橘子' }
              ],
              required: false,
              width: '',
              remote: false,
              remoteOptions: [],
              props: { value: 'value', label: 'label' },
              remoteFunc: 'func_1659951716000_12446',
              disabled: false
            },
            name: '多选框组',
            key: '1659951716000_12446',
            model: 'checkbox_1659951716000_12446',
            rules: []
          },
          {
            type: 'select',
            icon: 'icon-select',
            options: {
              defaultValue: [],
              multiple: true,
              disabled: false,
              clearable: true,
              placeholder: '请选择',
              required: true,
              showLabel: true,
              width: '200px',
              options: [
                { value: 'Option 1' },
                { value: 'Option 2' },
                { value: 'Option 3' }
              ],
              remote: true,
              filterable: true,
              remoteOptions: [],
              props: { value: 'value', label: 'label' },
              remoteFunc: 'getOptions1'
            },
            name: '兴趣爱好',
            key: '1659951872000_7994',
            model: 'hobby',
            rules: [{ required: true, message: '兴趣爱好必须填写' }]
          },
          {
            type: 'color',
            icon: 'icon-color',
            options: {
              defaultValue: '',
              disabled: false,
              showAlpha: false,
              required: false,
              remoteFunc: 'func_1659952045000_43804'
            },
            name: '颜色选择器',
            key: '1659952045000_43804',
            model: 'color_1659952045000_43804',
            rules: []
          },
          {
            type: 'number',
            icon: 'icon-number',
            options: {
              width: '',
              required: false,
              defaultValue: 6,
              min: 0,
              max: 0,
              step: 1,
              disabled: false,
              controlsPosition: '',
              remoteFunc: 'func_1659952054000_52223'
            },
            name: '计数器',
            key: '1659952054000_52223',
            model: 'number_1659952054000_52223',
            rules: []
          },
          {
            type: 'rate',
            icon: 'icon-pingfen1',
            options: {
              defaultValue: 0,
              max: 5,
              disabled: false,
              allowHalf: false,
              required: false,
              remoteFunc: 'func_1659952064000_48560'
            },
            name: '评分',
            key: '1659952064000_48560',
            model: 'rate_1659952064000_48560',
            rules: []
          },
          {
            type: 'blank',
            icon: 'icon-zidingyishuju',
            options: {
              defaultType: 'String',
              remoteFunc: 'func_1660015537000_39000'
            },
            name: '上传',
            key: '1660015537000_39000',
            model: 'upload',
            rules: []
          },
          {
            type: 'blank',
            icon: 'icon-zidingyishuju',
            options: {
              defaultType: 'String',
              remoteFunc: 'func_1660016088000_88294'
            },
            name: '',
            key: '1660016088000_88294',
            model: 'firstStepFail',
            rules: []
          },
          {
            type: 'blank',
            icon: 'icon-zidingyishuju',
            options: {
              defaultType: 'String',
              remoteFunc: 'func_1660016846000_90711'
            },
            name: '',
            key: '1660016846000_90711',
            model: 'firstStepFail',
            rules: []
          }
        ],
        config: { labelWidth: 100, labelPosition: 'left', size: 'small' }
      },
      editData: {},
      remoteFuncs: {
        getOptions1(resolve) {
          // 兴趣爱好 hobby
          // Call callback function once get the data from remote server
          // resolve(data)
          resolve([
            {
              label: '哈哈哈',
              value: 1
            }
          ]);
        }
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.generateForm
        .getData()
        .then((data) => {
          // data check success
          // data - form data
        })
        .catch((e) => {
          // data check failed
        });
    },
    refuse() {
      //form赋值
      this.$refs.generateForm
        .getData()
        .then((data) => {
          console.log('data', data);
          // data check success
          // data - form data
        })
        .catch((e) => {
          // data check failed
        });
    },
    agree() {
      this.$refs.generateForm
        .getData()
        .then((data) => {
          console.log('data', data);
          // data check success
          // data - form data
        })
        .catch((e) => {
          // data check failed
        });
    }
  }
};
</script>
