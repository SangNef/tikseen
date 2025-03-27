<template>
    <div>
        <Header title="Trung tâm tin nhắn" />
        <div style="height: 50px; width: 100%">
            <div class="toolbar tabbar" style="position: relative">
                <div class="toolbar-inner">
                    <a id="tab1" class="tab-link active" style="flex-direction: row"
                        >Tin tức<span class="msg-length">0</span></a
                    ><a id="tab2" class="tab-link">Để ý</a
                    ><span
                        id="highlight"
                        class="tab-link-highlight"
                        style="width: 50%; transform: translate3d(0%, 0px, 0px)"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from "./Header.vue";
</script>

<style scoped>
.toolbar {
    position: fixed;
    z-index: 2;
    background: #fff;
    border-top: 1px solid #e1e1e1;
    height: 48px !important;
}

.baBox,
.toolbar {
    bottom: 0;
    top: auto;
}

.tabbar .toolbar-inner {
    padding-left: 0;
    padding-right: 0;
}

.navbar-inner,
.toolbar-inner {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    align-items: center;
}

.tabbar a.tab-link.active,
.tabbar a.tab-link.active-state,
html:not(.watch-active-state) .tabbar a.tab-link:active {
    color: #e72732;
}

.tabbar a.link,
.tabbar a.tab-link {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    -ms-flex: 1;
    flex-direction: column;
    font-size: 14px;
    text-transform: uppercase;
}

.tabbar a.tab-link {
    transition-duration: 0.3s;
    overflow: hidden;
    color: hsla(0, 0%, 100%, 0.7);
    position: relative;
    color: #999;
    background-color: #fff;
    border-bottom: 2px solid #ececec;
}

.toolbar a {
    -webkit-box-flex: 1;
    flex-shrink: 1;
    position: relative;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.tabbar a.link,
.tabbar a.tab-link {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    -ms-flex: 1;
    flex-direction: column;
    font-size: 14px;
    text-transform: uppercase;
}

.tabbar a.tab-link {
    transition-duration: 0.3s;
    overflow: hidden;
    color: hsla(0, 0%, 100%, 0.7);
    position: relative;
    color: #999;
    background-color: #fff;
    border-bottom: 2px solid #ececec;
}

.toolbar a {
    -webkit-box-flex: 1;
    flex-shrink: 1;
    position: relative;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.tabbar a.link,
.tabbar a.tab-link {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    -ms-flex: 1;
    flex-direction: column;
    font-size: 14px;
    text-transform: uppercase;
}

.tabbar a.tab-link {
    transition-duration: 0.3s;
    overflow: hidden;
    color: hsla(0, 0%, 100%, 0.7);
    position: relative;
    color: #999;
    background-color: #fff;
    border-bottom: 2px solid #ececec;
}

.toolbar a {
    -webkit-box-flex: 1;
    flex-shrink: 1;
    position: relative;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.msg-length {
    font-size: 80%;
    margin-left: 8px;
    padding: 2px 12px;
    border-radius: 15px;
    display: block;
    color: #fff;
    background: #e72732;
}

.tabbar .tab-link-highlight {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    background: #e72732;
    transition-duration: .3s;
}
</style>
