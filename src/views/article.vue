<template>
  <div id="article" align="center">
    <i-row :gutter="30">
      <i-col :lg="5" />

      <i-col :lg="14">
        <i-card dis-hover style="padding: 16px">
          <div class="article-head">
            <span class="article-title">{{ article.title }}</span>

            <br><br>
            <i-col :lg="17" >
              <span class="article-foreword">{{ article.foreword }}</span>
            </i-col>
          </div>

          <div v-for="(content, index) in article.contentList" :key="content.id" style="text-align: left;margin: 0 0 0 0">
            <i-divider :id="index + 1" orientation="left">
              <span class="article-title-sub">
                {{ content.subTitle }} &nbsp;<a class="number-sign" @click="anchor = '#' + (index + 1)">#</a>
              </span>
            </i-divider>

            <br>

            <mavon-editor
              :value="content.subContent"
              :subfield="false"
              :toolbars-flag="false"

              :box-shadow="false"
              default-open="preview"
              code-style="tomorrow-night"
              preview-background="#FFFFFF"
              style="z-index: 0;border: none;"
            />

            <br><br>
          </div>
        </i-card>
      </i-col>

      <!-- 右侧固定 / 锚点 -->
      <i-col :lg="4">
        <i-affix :offset-top="99">
          <i-card dis-hover align="left">
            <i-anchor :affix="false" show-ink @on-select="anchorSelect">
              <template v-for="(content, index) in article.contentList">
                <i-anchor-link :key="content.id" :href="'#' + (index + 1)" :title="content.subTitle" />
              </template>
            </i-anchor>
          </i-card>
        </i-affix>
      </i-col>
    </i-row>
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

#article >>> .article-head {
  padding: 0 0 45px 0;
}

#article >>> .article-title {
  font-size: 27px;
}

#article >>> .article-foreword {
  font-size: 14px;
}

#article >>> .article-title-sub {
  font-size: 22px;
}

#article >>> .number-sign {
  font-size: 21px;
  opacity: 0;
}

#article >>> .ivu-divider:hover .number-sign {
  opacity: 1;
}

/* markdown 编辑器，设置代码部分背景颜色 */
#article >>> .hljs {
  background-color: #323232;
}

/* .article-list-title {
  color: black;
}

.article-list-title:hover {
  color: #0080FF;
} */
</style>
