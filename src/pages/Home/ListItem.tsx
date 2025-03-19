import React from "react";
import image1 from "~/assets/images/image1.webp";
import image2 from "~/assets/images/image2.webp";
import image3 from "~/assets/images/image3.webp";
import image4 from "~/assets/images/image4.webp";
import image5 from "~/assets/images/image5.webp";
import image6 from "~/assets/images/image6.webp";
import image7 from "~/assets/images/image7.webp";
import image8 from "~/assets/images/image8.webp";
import image9 from "~/assets/images/image9.webp";
import image10 from "~/assets/images/image10.webp";
import image11 from "~/assets/images/image11.webp";

const ListItem = () => {
    const items = [
        {
            name: "아윤",
            age: 30,
            size: "C+",
            height: 163,
            image: image1,
            description: "자연산 C+컵 가슴에 파묻혀 보세요. 화끈하고 낯가리지 않고 애교부리는 스타일 손님들 강간 당하실수도 있을만큼 명실상부 재방률 1위 !",
            tags: ["승무원", "적극적"],
        },
        {
            name: "하얀",
            age: 27,
            size: "B+",
            height: 162,
            image: image2,
            description: "찐한 애인모드 빼면 시체라는 하얀님... 극강 마인드에 너무 설레네요... 풍만한 자연 B+컵에 훌륭한 떡감까지.. 오빠들 얼른 예약해주세요!!",
            tags: ["아이돌 연습생", "순수"],
        },
        {
            name: "민경",
            age: 24,
            size: "C+",
            height: 158,
            image: image3,
            description: "귀여운 페이스에 이쁨이 묻어나는 매력덩어리가 있습니다 하얀 피부에 푸딩처럼 부들부들안 촉감까지 완벽한 민경님 화끈한 플레이 원하시는 오빠들 민경 빠른예약 GOGO♥️",
            tags: ["모델", "섹시"],
        },
        {
            name: "이설",
            age: 30,
            size: "D",
            height: 165,
            image: image4,
            description: "성격착하고! 스킬 끝내주고! 애견 마인드 끝판왕!! 최고의 오랄스킬 보유자!! 후회ㅣ할일 절대절대 없으실거에요!! ",
            tags: ["모델", "왕가슴"],
        },
        {
            name: "은비",
            age: 22,
            size: "B",
            height: 158,
            image: image5,
            description: "만남쌩초♥️ 로리로리 끝판왕 !! 품에 쏘옥~ 안고싶은 귀여운 은비! 하얀 피부에 부들부들 살결~ 얼굴도 이쁜데 말도 이쁘게하는 부족함 없네요.. 애교도 많은 숨은 보석 은비 잘 적응할 수 있게 아껴주세요♥️",
            tags: ["여대생", "귀여움"],
        },
        {
            name: "소정",
            age: 28,
            size: "B+",
            height: 168,
            image: image6,
            description: "두말하면 잔소리 서비스 애인모드 끝판왕!!! ",
            tags: ["교사", "적극"],
        },
        {
            name: "복희",
            age: 38,
            size: "C+",
            height: 162,
            image: image7,
            description: "경험에서 나오는 노련하고 화끈한 스킬! 에이스 입니다!",
            tags: ["모델", "극강스킬"],
        },
        {
            name: "혜지",
            age: 28,
            size: "D",
            height: 160,
            image: image8,
            description: "풍만한 가슴 자연 D컵 한번 만지면 계속 만지고싶은!!",
            tags: ["간호사", "자연산"],
        },
        {
            name: "연지",
            age: 22,
            size: "B",
            height: 160,
            image: image9,
            description: "풋풋한 여대생 부끄러움도 많으니 살살 다뤄주세요!! ",
            tags: ["배우지망생", "순둥순둥"],
        },
        {
            name: "소정",
            age: 22,
            size: "B",
            height: 162,
            image: image10,
            description: "고양이상 섹시 끝판왕 ",
            tags: ["인플루언서", "섹시", "도도"],
        },
        {
            name: "이슬",
            age: 26,
            size: "C",
            height: 165,
            image: image11,
            description: " S라인 슬림 탄탄 모델급 몸매 ",
            tags: ["일반인", "노예", "젖소"],
        },
    ];
    
    const handleClicked = () => {
        alert("담당 매니저에게 문의해주세요.");
    }

    return (
        <div
            data-radix-scroll-area-viewport
            className="h-full w-full rounded-[inherit] overflow-x-hidden overflow-y-scroll">
            <div className="[flex-grow: 1]">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="w-full aspect-[4/1.6] bg-slate-50 shadow-sm flex flex-row  mt-2 mb-4 rounded-xl">
                        <div className="h-full w-[25%] relative rounded-xl">
                            <img
                                src={item.image}
                                alt=""
                                sizes="100vw"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="rounded-l-xl object-cover absolute h-full w-full inset-0"
                            />
                        </div>
                        <div className="grid grid-cols-4 pt-4 w-full">
                            <div className="pb-1 text-xs font-bold text-center">이름</div>
                            <div className="pb-1 text-xs text-center">{item.name}</div>
                            <div className="pb-1 text-xs font-bold text-center">가슴 사이즈</div>
                            <div className="pb-1 text-xs text-center">{item.size}</div>
                            <div className="pb-1 text-xs font-bold text-center">나이</div>
                            <div className="pb-1 text-xs text-center">{item.age}</div>
                            <div className="pb-1 text-xs font-bold text-center">키</div>
                            <div className="pb-1 text-xs text-center">{item.height}</div>
                            <div className="font-bold text-sm text-[#4492bf] text-center col-span-4 px-4 whitespace-break-spaces">
                                {item.description}
                            </div>
                            <div className="font-bold text-xs text-[#] text-center col-span-4 w-full flex flex-row px-5 gap-3">
                                {/* <div className="inline-flex items-center rounded-md border text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow hover:bg-primary/80 px-2 w-fit py-1 h-fit bg-[#4492bf] text-white font-bold">
                                    # 승무원
                                </div>
                                <div className="inline-flex items-center rounded-md border text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow hover:bg-primary/80 px-2 w-fit py-1 h-fit bg-[#4492bf] text-white font-bold">
                                    # 적극적
                                </div> */}
                                {item.tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className="inline-flex items-center rounded-md border text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow hover:bg-primary/80 px-2 w-fit py-1 h-fit bg-[#4492bf] text-white font-bold">
                                        # {tag}
                                    </div>
                                ))}
                            </div>
                            <div className="cursor-pointer font-bold text-xs w-full px-5 flex flex-row justify-end col-span-4 text-[#4492bf]"  onClick={handleClicked}>
                                바로연결 &gt;
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListItem;
