<template>
  <div class="video">
    <a-input-search class="video__input" placeholder="请输入线上视频地址" @search="onSearch" size="large">
      <a-button slot="enterButton">提交</a-button>
    </a-input-search>
    <a-upload-dragger
      name="file"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :fileList="fileList"
      @change="handleChange"
    >
      <p class="ant-upload-drag-icon">
        <a-icon type="inbox" />
      </p>
      <p class="ant-upload-text">点击或拖拽视频文件到此区域上传</p>
      <p class="ant-upload-hint">
        支持单次上传。严格禁止上传公司数据或其他非法文件。上传文件将在4个小时后销毁。
      </p>
    </a-upload-dragger>
  </div>
</template>

<script>
import { Icon, Upload, Row, Col, Input } from 'ant-design-vue'

export default {
  name: 'Home',
  data() {
    return {
      fileList: [],
    }
  },
  components: {
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Input.Search.name]: Input.Search,
    [Row.name]: Row,
    [Upload.Dragger.name]: Upload.Dragger,
  },
  methods: {
    handleChange(info) {
      let fileList = [...info.fileList];
      fileList = fileList.slice(-2);
      // 2. read from response and show file link
      fileList = fileList.map(file => {
        if (file.response) {
          file.url = file.response.url;
        }
        return file;
      });

      this.fileList = fileList;
    },
    onSearch (value) {
      console.log(value);
    }
  },
}
</script>
