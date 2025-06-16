<template>
    <div>
        <Header title="Phương thức thanh toán" />
        <div class="h-[85vh] pt-7">
            <h3 class="text-[#888b94] text-[0.36rem] font-medium px-1.5 !mb-1">Danh sách ngân hàng</h3>
            <p class="px-1.5 text-[0.32rem] text-[#adb0b9] mt-1 !mb-2">
                * Vui lòng nhập thông tin theo yêu cầu của hệ thống, để không ảnh hưởng đến giao dịch nạp, rút tiền của
                bạn.
            </p>
            <div class="divide-y divide-[#1d2433]">
                <div class="flex items-center justify-between py-1.5 active:opacity-60 active:duration-150 px-1.5">
                    <div class="flex items-center gap-1">
                        <div class="flex items-center justify-center rounded-full w-5 h-5">
                            <img
                                width="35"
                                class="rounded-sm"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANEAAADRBAMAAACgFErcAAAAG1BMVEX////////////+5tz6sZj0gGTwWEHtMy7sHyd0HxrkAAAAAnRSTlNAgGtSAR0AAALPSURBVHja7doxatxQFIVhJytIdhCk0QYEnukHAq5VBPVu3AeC+4zGd9kpUhwGrufngDCBnFuqeL8+1Dzf8cPn4WPm20NKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSiml9C+WHuf28ffdS+PLc/f4UMvepWNdO9SpNrPEpKoGNb5WLV6JSdWhTlW1mSUmCXVDqjp7JSZVXTtS1cUsMalqaUiAMktT/Z2tIQHKLK1VQt2QhDJKRBJKH08oo4QkofTxhDJKRBJKJKGMEpCE6kj1NhslIgklkuanUUKSPolIGkRx6VC3cxEJUG7pqapBiSQUlgySUCIJhSWDJJQ+nlBGiUhCTVWAghKQhBJJc52pBKQONVU3z1QCUjciAQpKRKrtWICyS6dqZxlfAOWWxteeNAwOSiWfNAyAgpJBAhSUHNK7qF9Qckl3UAuUTNId1AYljwQot9SfpFsQobgEB+kSxCguMYlRXGISo6DkkRjFJSbx60DJP4Pfh0t8hI/qSxOe4KP60soHMIpLTGIUlJjkobjEJB+lEr/n22zc07Y7JX7P38Y9bYESoQwSlAjlkbjEKCZBiVEmiUuMYhKXdF1h1AQkKOkKhqgVSVxiFJO4xCgmcYlRTKKSj2ISlxjFJC4xCkhQclFM4hKjzkCCkoG6AAlKgOINlX4kgJKJmnbaEjBq3WfzwSggQQlR+2+oGLUdgQQlQNGGyt8kMuoyDEcmcYlRZ11pmMQloWCLLRKXAAWbeZG4hCj+tUEkLjFKJKGAZJaEEkkoJnFJKNhQiUQlRsGGSiQo4TzBhgpIRunQ//36CCSrJJRImlUko0QokTSTSEaJUSIJJZJRQpRIQolklBglklAiGSVEiSSUSEYJUSJpViL5pYNINyiRjBKg+vXqj3n30vjO4/yvW0oppZRSSimllFJKKaWUUkoppZRSSimllFJKKf3vpU9fP2a+/AHCPAypuxT8dQAAAABJRU5ErkJggg=="
                                alt="" />
                        </div>
                        <div class="flex flex-col justify-center text-[0.32rem]">
                            <h3 class="font-medium !mb-0.5">Ngân hàng TMCP Kỹ thương Việt Nam</h3>
                            <span class="font-medium text-gray-400">7135797777</span>
                        </div>
                    </div>
                    <img
                        class="w-2.5"
                        src="data:image/svg+xml,%3csvg%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns='http://www.w3.org/2000/svg'%20class='MuiSvgIcon-root%20MuiSvgIcon-fontSizeMedium%20MuiSvgIcon-root%20MuiSvgIcon-fontSizeMedium%20svg-icon%20css-kry165'%20focusable='false'%20aria-hidden='true'%20viewBox='0%200%2024%2024'%20data-testid='RadioButtonCheckedIcon'%20tabindex='-1'%20title='RadioButtonChecked'%20width='67'%20height='67'%20%3e%3cpath%20d='M12%207c-2.76%200-5%202.24-5%205s2.24%205%205%205%205-2.24%205-5-2.24-5-5-5m0-5C6.48%202%202%206.48%202%2012s4.48%2010%2010%2010%2010-4.48%2010-10S17.52%202%2012%202m0%2018c-4.42%200-8-3.58-8-8s3.58-8%208-8%208%203.58%208%208-3.58%208-8%208'%20fill='%2301bc8d'%3e%3c/path%3e%3c/svg%3e"
                        alt="" />
                </div>
            </div>
        </div>
        <div class="fixed bottom-3.5 w-full px-1.5">
            <div
                class="w-full flex items-center justify-center gap-1 py-1 rounded-sm active:opacity-60 active:scale-95 active:duration-150 bg-default">
                <span role="img" aria-label="plus-circle" class="anticon anticon-plus-circle"
                    ><svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="plus-circle"
                        width="21.5px"
                        height="21.5px"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
                        <path
                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg
                ></span>
                <p class="text-md">Thêm phương thức thanh toán</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Header } from '@/components/mobile';
</script>

<style></style>
