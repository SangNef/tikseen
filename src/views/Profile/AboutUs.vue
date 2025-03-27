<template>
    <div>
        <Header title="Về Chúng Tôi" />
        <div class="page-content-94">
            <article id="articleContent" class="article padding-side" style="margin-top: 15px">
                <p>
                    <span
                        >Vietllot là doanh nghiệp xổ số hàng đầu tại Việt Nam, tiên phong tham gia Dự án An Sinh - Xã
                        Hội với sứ mệnh mang lại giá trị thiết thực cho cộng đồng. Chúng tôi cam kết không chỉ mang đến
                        những sản phẩm xổ số minh bạch, hiện đại và hấp dẫn mà còn góp phần xây dựng một xã hội tốt đẹp
                        hơn thông qua các hoạt động hỗ trợ giáo dục, việc làm, y tế, và an sinh xã hội.</span
                    >
                </p>
                <p>
                    <span
                        >Với tinh thần trách nhiệm và sự đổi mới không ngừng, Vietllot hướng đến việc tạo ra những cơ
                        hội may mắn và nâng cao chất lượng cuộc sống cho mọi người dân Việt Nam.</span
                    >
                </p>
                <div>
                    <span><br /></span>
                </div>
            </article>
        </div>
    </div>
</template>

<script setup>
import Header from "./Header.vue";
</script>

<style scoped>
.page-content-94 {
    height: calc(100vh - env(safe-area-inset-bottom) - 94px);
}

.article, .article p {
    word-wrap: break-word;
    text-align: justify;
    color: #505050;
    line-height: 1.647;
}

.article {
    overflow: hidden;
    font-size: 17px;
    margin: 0 15px 20px;
}

.article p {
    margin: 0 0 20px;
    padding: 0;
}

.article, .article p {
    word-wrap: break-word;
    text-align: justify;
    color: #505050;
    line-height: 1.647;
}
</style>
