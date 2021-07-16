<template>
  <div id="home" align="center">
    <i-row :gutter="30">
      <i-col :lg="4" />

      <i-col :lg="12">
        <i-carousel :autoplay-speed="3000" autoplay class="demo-carousel">
          <i-carousel-item >山有木兮木有枝，心悦君兮君不知</i-carousel-item>
          <i-carousel-item>夕阳何事近黄昏，不道人间犹有未招魂</i-carousel-item>
          <i-carousel-item>待吾功成天下日，回城铭古倾覆入史</i-carousel-item>
        </i-carousel>

        <!-- 文章列表 -->
        <div>
          <i-card v-for="(item, index) in articleArr.list" :key="index" class="article-card">
            <div align="left" @click="$router.push(`article/${item.id}.html`)">
              <h2 class="article-title">{{ item.title }}</h2>

              <p class="article-foreword">{{ item.foreword }}</p>
              <br>
              <i-row>
                <i-col :span="12">{{ item.themeName }}</i-col>
                <i-col :span="12" align="right">
                  <span v-if="item.updatetime">更新时间：{{ item.updatetime | timestampFormatYMDHM }}</span>
                </i-col>
              </i-row>
            </div>
          </i-card>

          <br>
          <i-page :current.sync="articleArrParam.page" :page-size="articleArrParam.size" :total="articleArr.total" show-total />
        </div>
      </i-col>

      <i-col :lg="4">
        <i-card class="user-panel">
          <i-divider>
            <i-avatar src="http://www.kanoko.top/wealth/sill-avatar.png" style="width: 57px;height: 57px" />
          </i-divider>

          <br><br>
          <h4>站长建设中</h4>
          <br><br>
          <!-- <ul>
            <li>Java 写递归千万不要使用 this 关键字</li>
          </ul> -->
        </i-card>
      </i-col>

      <i-col :lg="4" />
    </i-row>
  </div>
</template>

<script>
import { list as articleList } from '@/api/article.js'

export default {
  name: 'Home',
  data() {
    return {
      articleArr: {},
      articleArrParam: {
        page: 1,
        size: 4
      }
    }
  },
  watch: {
    'articleArrParam.page'(newVal) {
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
      articleList(this.articleArrParam).then(resp => {
        const data = resp.data

        this.articleArr = data
      })
    }
  }
}
</script>

<style scoped>

/* left article */

#home >>> .article-card {
  font-family: "Courier New";
  cursor: pointer;
  margin: 8px 0 0 0;
  height: 125px;
}

#home >>> .article-title {
  margin: -3px 0 9px 0;
  font-size: 17px;
}

#home >>> .article-foreword {
  width: 105%;
  height: 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

#home >>> .demo-carousel {
  color: white;
  font-size: 27px;
  padding: 85px 0 0 0;
  margin: 0 0 27px 0;
  height: 215px;
  background-color: #506B9E;
}

/* right user-panel */

#home >>> .user-panel {
  height: 375px
}

/* * {
  border: darkorchid 1px solid;
} */
</style>
