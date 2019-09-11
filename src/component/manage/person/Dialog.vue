<template>
  <div >
  <el-button type="text" @click="dialogVisible = true">提交</el-button>

  <el-dialog
    title="确认提交"
    :visible.sync="dialogVisible"
    size="tiny"
    :before-close="handleClose">
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
   </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
