<template>
  <div class="box" align="center">
    <!-- 文章 -->
    <div>
      <i-card v-for="article in articleData.list" :key="article.id" class="article-card">
        <div @click="$router.push(`article/${article.id}.html`)">
          <i-divider orientation="left">
            <h4>{{ article.title }}</h4>
          </i-divider>

          <p class="article-foreword">&emsp;&emsp;{{ article.foreword }}</p>
        </div>
      </i-card>

      <br>
      <i-page :current.sync="articleDataParam.page" :page-size="articleDataParam.size" :total="articleData.total" show-total />
    </div>
  </div>
</template>

<script>
import { list as articleList } from '@/api/article.js'

export default {
  name: 'Home',
  data() {
    return {
      articleData: {},
      articleDataParam: {
        page: 1,
        size: 5
      }
    }
  },
  watch: {
    'articleDataParam.page'(newVal) {
      if (newVal) {
        this.initData()
      }
    }
  },
  mounted() {
    this.initData() // 初始化数据
  },
  methods: {
    initData() {
      articleList(this.articleDataParam).then(resp => {
        const data = resp.data

        this.articleData = data
      })
    }
  }
}
</script>

<style scoped>
.box {
  margin-top: 25px;
}

.article-card {
  width: 1025px;
  padding: 8px;
  margin: 15px 0 0 0;
  cursor: pointer;
}

.article-foreword {
  height: 45px;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
