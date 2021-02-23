<template>
  <div class="box" align="center">
    <i-card style="width: 1025px;padding: 8px">
      <div>
        <div>
          <span class="article-title">{{ article.title }}</span>

          <br><br>
          <span class="article-foreword">{{ article.foreword }}</span>
        </div>

        <div v-for="(content, index) in article.contentList" :key="content.id" style="text-align: left;margin: 45px 0 0 0">
          <i-divider :id="index + 1" orientation="left">
            <h3>{{ content.subTitle }} &nbsp;<a class="number-sign" @click="anchor = '#' + (index + 1)">#</a></h3>
          </i-divider>
          <mavon-editor
            :value="content.subContent"
            :toolbars="{}"
            :subfield="false"
            :toolbars-flag="false"
            default-open="preview"
            style="z-index: 1"
          />
          <!-- <p>{{ content.subContent }}</p> -->

          <br><br>
        </div>
      </div>

      <!-- 右侧固定栏 -->
      <i-affix :offset-top="75" style="top: 0;position: absolute;margin-left: 1015px;width: 225px">
        <i-card dis-hover align="left">
          <i-anchor :affix="false" show-ink @on-select="anchorSelect">
            <template v-for="(content, index) in article.contentList">
              <i-anchor-link :key="content.id" :href="'#' + (index + 1)" :title="content.subTitle" />
            </template>
          </i-anchor>
        </i-card>
      </i-affix>
    </i-card>
  </div>
</template>

<script>
import { detail } from '@/api/article.js'

export default {
  name: 'Article',
  props: {
    articleId: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      article: {},

      anchor: '' // 锚点
    }
  },
  watch: {
    anchor(newVal) {
      if (newVal) {
        this.$router.replace(this.$route.path + newVal)
      }
    }
  },
  mounted() {
    if (this.articleId) {
      this.loadArticle()
    }
  },
  methods: {
    loadArticle() { // 加载文章内容
      const param = {
        id: this.articleId
      }

      detail(param).then(resp => {
        this.article = resp.data
      })
    },

    anchorSelect(val) {
      this.anchor = val
    }
  }
}
</script>

<style scoped>
.box {
  margin-top: 75px;
}

.article-title {
  font-size: 27px;
}

.article-foreword {
  font-size: 8px;
}

.number-sign {
  font-size: 21px;
  opacity: 0;
}

.ivu-divider:hover .number-sign {
  opacity: 1;
}

.article-list-title {
  color: black;
}

.article-list-title:hover {
  color: #0080FF;
}
</style>
