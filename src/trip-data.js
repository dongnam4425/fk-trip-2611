const SEED = {
  v: 2, rate: 8.6638, total: 4000000,
  days: [
    {id:"d1", date:"2026-11-29", wd:"일요일", region:"하카타", scene:"flight", hotel:"도요 호텔", room:"더블룸, 2박 중 첫날", note:"", items:[
      ["06:10","인천공항 출발","아시아나 OZ132", P("인천국제공항","Incheon International Airport")],
      ["07:35","후쿠오카공항 도착","", P("후쿠오카공항 국제선","Fukuoka Airport International Terminal")],
      ["07:35","입국심사, 수하물 수령","08:15까지", null],
      ["08:15","택시로 도요 호텔 이동","15분", P("도요 호텔","도요 호텔 하카타","더블룸, 11/29~12/01")],
      ["08:30","도요 호텔 짐 보관","", null],
      ["08:40","편의점, 카페 자유시간","40분", null],
      ["09:20","라멘 이나다로 이동","30분", P("라멘 이나다","라멘 이나다 후쿠오카","10:00 오픈")],
      ["09:50","오픈 대기","", null],
      ["10:00","라멘 이나다 식사","40분", null]]},
    {id:"d2", date:"2026-11-30", wd:"월요일", region:"후쿠오카", scene:"city", hotel:"도요 호텔", room:"더블룸, 2박 중 둘째 날", note:"", items:[]},
    {id:"d3", date:"2026-12-01", wd:"화요일", region:"하카타에서 벳푸로", scene:"onsen", hotel:"AMANE RESORT GAHAMA", room:"시사이드 메조네트, 객실 온천, 조식 포함", note:"", items:[
      ["체크아웃","도요 호텔 체크아웃","", null],
      ["이동","하카타역에서 벳푸행 기차","시간 미정", P("하카타역","Hakata Station")],
      ["체크인","AMANE RESORT GAHAMA","", P("AMANE RESORT GAHAMA","AMANE RESORT GAHAMA Beppu","객실 전용 온천, 조식 포함")]]},
    {id:"d4", date:"2026-12-02", wd:"수요일", region:"벳푸에서 텐진으로", scene:"sea", hotel:"오리엔탈 익스프레스 텐진", room:"코너 더블룸(스타일러), 2박 중 첫날", note:"", items:[
      ["아침","가하마 리조트 조식","포함", null],
      ["체크아웃","료칸 체크아웃","", null],
      ["이동","벳푸에서 하카타행 기차","시간 미정", P("벳푸역","Beppu Station")],
      ["체크인","호텔 오리엔탈 익스프레스 후쿠오카 텐진","", P("오리엔탈 익스프레스 텐진","Hotel Oriental Express Fukuoka Tenjin","코너 더블룸(스타일러)")]]},
    {id:"d5", date:"2026-12-03", wd:"목요일", region:"텐진, 다이묘", scene:"night", hotel:"오리엔탈 익스프레스 텐진", room:"코너 더블룸(스타일러), 2박 중 둘째 날", note:"", items:[]},
    {id:"d6", date:"2026-12-04", wd:"금요일", region:"인천으로", scene:"home", hotel:"", room:"", note:"", items:[
      ["체크아웃","호텔 체크아웃","", null],
      ["17:30","후쿠오카공항 도착 목표","18:00까지", P("후쿠오카공항 국제선","Fukuoka Airport International Terminal")],
      ["20시대","후쿠오카공항 출발","티웨이항공", null]]}
  ],
  budget: [
    {id:"b1", cat:"왕복 항공권", amt:729400, fixed:true, paid:false},
    {id:"b2", cat:"도요 호텔 2박", amt:157542, fixed:true, paid:false},
    {id:"b3", cat:"가하마 료칸 1박", amt:458888, fixed:true, paid:false},
    {id:"b4", cat:"오리엔탈 익스프레스 2박", amt:288786, fixed:true, paid:false},
    {id:"b5", cat:"식비, 디저트", amt:1000000}, {id:"b6", cat:"교통비", amt:220000}, {id:"b7", cat:"관광, 체험", amt:100000},
    {id:"b8", cat:"기념품, 일반 쇼핑", amt:400000}, {id:"b9", cat:"의류 쇼핑", amt:605384}, {id:"b10", cat:"eSIM, 여행자보험", amt:40000}],
  expenses: [],
  todos: ["11/29 라멘 이나다 이후 일정","11/30 하루 일정","벳푸 왕복 기차 시간","아프리칸 사파리 갈지","유후인 갈지","날짜별 맛집, 카페","텐진 옷 쇼핑 매장","eSIM, 여행자보험 가입"].map((t, i) => ({id: "t" + i, txt: t, done: false}))
};
