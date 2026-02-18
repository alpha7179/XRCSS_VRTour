# **고백의왕 (King of Confession)**

## **1. 프로젝트 개요 (Project Overview)**

의왕시 로컬 브랜디드를 주제로 한 인터랙티브 VR 콘텐츠입니다. 기존 VR 관광 콘텐츠의 단순 정보 나열 방식을 탈피하고, 연애 시뮬레이션 형식의 스토리 기반 체험을 통해 사용자의 몰입도와 흥미를 극대화합니다.

본 프로젝트는 **krpano** 기반의 360도 파노라마 VR 투어 시스템으로, 사용자의 선택에 따라 달라지는 가변형 데이트 코스를 제공합니다. 썸을 타는 남녀가 의왕시로 드라이브를 떠나는 스토리로 시작하여, 최종적으로 '의왕시' 자체에 대한 고백으로 이어지는 중의적 엔딩을 구현했습니다.

### **1.1. 주요 특징 및 기대효과**

* **주요 특징**
    * **페르소나 기반 분기 시스템:** 사용자는 테토(Teto) 또는 에겐(Egen) 중 페르소나를 선택하여 액티비티형 또는 감성형 데이트 코스로 분기됩니다.
    * **360도 파노라마 VR 환경:** 실제 의왕시 관광지를 360도 촬영하여 고품질 파노라마 이미지로 구현했습니다.
    * **인터랙티브 핫스팟 시스템:** 특정 지점 클릭 시 이벤트가 발생하며, 캐릭터 음성과 함께 스토리가 전개됩니다.
    * **멀티 디바이스 지원:** WebXR 기반으로 HMD, 모바일, PC 웹 브라우저 등 다양한 디바이스에서 접근 가능합니다.
    * **글래스모피즘 UI 디자인:** 현대적이고 세련된 글래스모피즘 스타일의 사용자 인터페이스를 적용했습니다.
    * **동적 배경음악 및 음성:** 각 장소와 상황에 맞는 배경음악과 캐릭터 음성이 자동으로 재생됩니다.

* **기대 효과**
    * 게이미피케이션을 통한 로컬 관광 콘텐츠의 새로운 방향성 제시
    * 의왕시 관광 자원의 효과적인 홍보 및 브랜딩
    * 타 지역 관광 콘텐츠에도 적용 가능한 범용적 모델 제공
    * 실감미디어 기술을 활용한 교육 및 체험형 콘텐츠 개발 사례 구축

### **1.2. 차별성 (Differentiation)**

| 기존 VR 관광 콘텐츠 | 고백의왕 (본 프로젝트) |
|---------|-----------------|
| 단순 정보 나열 및 공간 탐색 | 스토리 기반 연애 시뮬레이션 |
| 정적인 체험 | 사용자 선택에 따른 동적 분기 |
| 단일 경로 | 페르소나별 맞춤형 데이트 코스 |
| 제한적인 인터랙션 | 핫스팟, 음성, 영상 등 다층적 인터랙션 |
| 앱 설치 필요 | WebXR 기반 즉시 접근 |


## **2. 시스템 구조 (System Architecture)**

### **2.1. 전체 아키텍처**

```
고백의왕 VR 투어 시스템
│
├── krpano 엔진 (Core)
│   ├── tour.xml (메인 설정 파일)
│   ├── tour.js (krpano 라이브러리)
│   └── index.html (진입점)
│
├── 파노라마 씬 (Scenes)
│   ├── scene_car (시작 - 차량 내부)
│   ├── scene_main (메인 선택 화면)
│   ├── 01_xxxx (의왕레일바이크)
│   ├── 02_xxxx (의왕스카이레일)
│   ├── 03_xxx (청계사)
│   ├── 04_xxx (자연생태공원)
│   ├── 05_xxx (하우현성당)
│   ├── 06_xxx (마당기픈집)
│   ├── 07_xxx (네이처티파니)
│   └── 08_xxx (가나안덕)
│
├── 인터랙티브 요소
│   ├── 핫스팟 시스템 (add_hotspot)
│   ├── 사운드 인터페이스 (soundinterface.js)
│   ├── 비디오 플레이어 (videoplayer.js)
│   └── WebVR 지원 (webvr.js)
│
├── UI/UX 시스템
│   ├── 글래스모피즘 스타일 (CSS3D)
│   ├── 페르소나 선택 시스템
│   ├── 프로그레스 바
│   └── 반응형 레이아웃
│
└── 미디어 리소스
    ├── 파노라마 이미지 (panos/)
    ├── 배경음악 (mp3/)
    ├── 비디오 (vod/)
    └── UI 이미지 (img/)
```

### **2.2. 핵심 기능 (Key Features)**

* **1. 페르소나 선택 시스템**
    * **성별 선택:** 사용자는 먼저 자신의 성별을 선택합니다.
    * **파트너 선택:** 테토(Teto) 또는 에겐(Egen) 중 데이트 파트너를 선택합니다.
    * **코스 분기:** 선택한 페르소나에 따라 액티비티형(테토) 또는 감성형(에겐) 데이트 코스로 자동 분기됩니다.
    * **프로필 확인:** 선택한 파트너의 프로필을 확인한 후 투어를 시작합니다.

* **2. 360도 파노라마 VR 투어**
    * **고품질 파노라마:** 실제 의왕시 관광지를 360도 촬영하여 멀티레졸루션 타일 방식으로 최적화했습니다.
    * **자유로운 시야 이동:** 마우스 드래그, 터치, HMD 헤드 트래킹 등 다양한 방식으로 시야를 이동할 수 있습니다.
    * **씬 간 이동:** 핫스팟을 클릭하여 다른 장소로 부드럽게 전환됩니다.
    * **시야 잠금 기능:** 특정 이벤트 발생 시 시야를 고정하여 스토리에 집중하도록 유도합니다.

* **3. 인터랙티브 핫스팟**
    * **이동 핫스팟:** 다른 씬으로 이동하는 네비게이션 역할을 합니다.
    * **사운드 핫스팟:** 클릭 시 캐릭터 음성이나 설명 오디오가 재생됩니다.
    * **비디오 핫스팟:** 특정 장소에서 관련 영상을 재생합니다.
    * **정보 핫스팟:** 관광지 정보를 텍스트나 이미지로 표시합니다.

* **4. 동적 사운드 시스템**
    * **배경음악:** 각 씬마다 분위기에 맞는 배경음악이 자동으로 재생됩니다.
    * **캐릭터 음성:** 선택한 페르소나에 따라 다른 음성이 재생됩니다 (남성/여성 버전).
    * **사운드 컨트롤:** 사용자가 배경음악을 일시정지하거나 재생할 수 있습니다.


## **3. 관광지 구성 (Tour Locations)**

본 프로젝트는 의왕시의 8개 주요 관광지를 360도 VR로 구현했습니다.

| 번호 | 관광지명 | 유형 | 특징 |
|------|---------|------|------|
| 01 | 의왕레일바이크 | 액티비티 | 폐선로를 활용한 레일바이크 체험 |
| 02 | 의왕스카이레일 | 액티비티 | 왕송호수 위를 가로지르는 모노레일 |
| 03 | 청계사 | 문화/역사 | 전통 사찰 및 자연 경관 |
| 04 | 자연생태공원 | 자연 | 백운호수 주변 생태 공원 |
| 05 | 하우현성당 | 문화/역사 | 역사적 가톨릭 성당 |
| 06 | 마당기픈집 | 음식 | 전통 한식 레스토랑 |
| 07 | 네이처티파니 | 음식 | 카페 및 디저트 |
| 08 | 가나안덕 | 음식 | 한식 레스토랑 |

### **3.1. 페르소나별 코스 구성**

* **테토 (Teto) - 액티비티형 코스**
    * 의왕레일바이크 → 의왕스카이레일 → 청계사 → 자연생태공원 → 마당기픈집

* **에겐 (Egen) - 감성형 코스**
    * 하우현성당 → 자연생태공원 → 청계사 → 네이처티파니 → 가나안덕

## **4. 팀원 (Team Members)**

| 이름 | 학과 | 역할 | e-mail | GitHub |
|------|------|------|--------|--------|
| 김아랑 | 디지털미디어학과 | 기획 및 스토리 설계 | [email] | [GitHub] |
| 김윤경 | 디지털미디어학과 | UI/UX 디자인 | [email] | [GitHub] |
| 노민 | 디지털미디어학과 | 360도 촬영 및 편집 | [email] | [GitHub] |
| 박수본 | 디지털미디어학과 | 사운드 디자인 | [email] | [GitHub] |
| 박준형 | 디지털미디어학과 | 비디오 제작 | [email] | [GitHub] |
| **배민우** | 디지털미디어학과 | **krpano 개발 및 시스템 구축**<br/>- 페르소나 선택 시스템 개발<br/>- 인터랙티브 핫스팟 구현<br/>- 글래스모피즘 UI 디자인 | alpha7179@ajou.ac.kr | [https://github.com/alpha7179](https://github.com/alpha7179) |
| 서영석 | 디지털미디어학과 | 캐릭터 디자인 | [email] | [GitHub] |
| 이동건 | 디지털미디어학과 | 프로젝트 관리 | [email] | [GitHub] |

**지도교수:** 조현준 교수님, 강명규 교수님

## **5. 기술 스택 (Tech Stack)**

* **VR Engine:** krpano 1.23
* **Language:** XML, JavaScript (ES6+), HTML5, CSS3
* **Rendering:** WebGL, CSS3D Renderer
* **Audio:** soundinterface.js (krpano plugin)
* **Video:** videoplayer.js (krpano plugin)
* **VR Support:** webvr.js (WebXR API)
* **Development Tools:**
    * krpano Tools (파노라마 변환 및 최적화)
    * Prettier (코드 포맷팅)
    * Git (버전 관리)
* **Deployment:** Static Web Hosting (HTML5 기반)


## **6. 프로젝트 구조 (Project Structure)**

```
고백의왕/
├── Source/                          # 메인 소스 코드
│   ├── index.html                   # 진입점 HTML
│   ├── tour.xml                     # krpano 메인 설정 파일
│   ├── tour.js                      # krpano 라이브러리
│   ├── lockview.xml                 # 시야 잠금 기능
│   │
│   ├── panos/                       # 파노라마 이미지 (멀티레졸루션 타일)
│   │   ├── car.tiles/               # 차량 씬
│   │   ├── main.tiles/              # 메인 선택 화면
│   │   ├── 01_xxxx.tiles/           # 의왕레일바이크
│   │   ├── 02_xxxx.tiles/           # 의왕스카이레일
│   │   ├── 03_xxx.tiles/            # 청계사
│   │   ├── 04_xxx.tiles/            # 자연생태공원
│   │   ├── 05_xxx.tiles/            # 하우현성당
│   │   ├── 06_xxx.tiles/            # 마당기픈집
│   │   ├── 07_xxx.tiles/            # 네이처티파니
│   │   └── 08_xxx.tiles/            # 가나안덕
│   │
│   ├── mp3/                         # 배경음악 및 음성 파일
│   │   ├── 001.mp3                  # 메인 배경음악
│   │   ├── begin.mp3, begin_m.mp3   # 시작 음성 (여성/남성)
│   │   ├── Start.mp3, GStart.mp3    # 페르소나별 시작 음성
│   │   └── [장소명]_[번호].mp3      # 각 장소별 음성 파일
│   │
│   ├── vod/                         # 비디오 파일
│   │   ├── intro.mp4                # 인트로 영상
│   │   ├── end_video.mp4            # 엔딩 영상
│   │   └── [장소명]_4k.mp4          # 각 장소별 영상
│   │
│   ├── img/                         # UI 이미지
│   │   ├── logo.png                 # 로고
│   │   ├── charEF.png, charEM.png   # 에겐 캐릭터 (여성/남성)
│   │   ├── charTF.png, charTM.png   # 테토 캐릭터 (여성/남성)
│   │   ├── IconEG.png, IconTT.png   # 페르소나 아이콘
│   │   ├── IconF.png, IconM.png     # 성별 아이콘
│   │   └── bg[1-7].jpg              # 배경 이미지
│   │
│   ├── skin/                        # krpano 스킨 파일
│   │   ├── vtourskin.xml            # 기본 스킨 설정
│   │   ├── vtourskin_design_glass.xml  # 글래스 디자인
│   │   └── sound_btn.png            # 사운드 버튼 이미지
│   │
│   ├── plugins/                     # krpano 플러그인
│   │   ├── soundinterface.js        # 사운드 인터페이스
│   │   ├── videoplayer.js           # 비디오 플레이어
│   │   ├── webvr.js                 # WebVR 지원
│   │   └── webvr.xml                # WebVR 설정
│   │
│   └── add_hotspot/                 # 핫스팟 시스템
│       ├── plugins_l/               # 핫스팟 플러그인
│       │   ├── add_hotspot.xml      # 핫스팟 추가 기능
│       │   └── plugin_a/            # 커스텀 플러그인
│       │       ├── sound_hs.xml     # 사운드 핫스팟
│       │       └── vid_hs.xml       # 비디오 핫스팟
│       ├── photo/                   # 사진 리소스
│       ├── sound/                   # 사운드 리소스
│       └── video/                   # 비디오 리소스
│
├── krpanoTool/                      # krpano 개발 도구
│   ├── krpanotools.exe              # krpano 도구 실행 파일
│   ├── MAKE VTOUR (VR-OPT) droplet.bat  # VR 최적화 배치 파일
│   └── templates/                   # 템플릿 파일
│
├── img/                             # 프로젝트 이미지 (문서용)
│   └── [관광지명].png               # 각 관광지 대표 이미지
│
├── RawSource/                       # 원본 소스 (촬영 원본)
│   ├── 보정전 픽/                   # 보정 전 사진
│   └── 초안 픽/                     # 초안 사진
│
├── NoGit/                           # Git 제외 파일 (테스트 버전)
│   ├── AlphaKrpano/                 # 알파 테스트 버전
│   ├── BetaKrpano/                  # 베타 테스트 버전
│   └── TestKrpano/                  # 테스트 버전
│
├── package.json                     # npm 패키지 설정
├── .prettierrc                      # Prettier 설정
├── .gitignore                       # Git 제외 파일 목록
└── README.MD                        # 프로젝트 문서 (본 파일)
```


## **7. 설치 및 실행 (Installation & Usage)**

### **7.1. Prerequisites**

* **웹 서버:** 로컬 테스트를 위한 웹 서버 필요 (krpano Testing Server 포함)
* **브라우저:** 최신 버전의 Chrome, Firefox, Safari, Edge 권장
* **Node.js:** (선택사항) 개발 도구 사용 시 필요

### **7.2. Installation**

```bash
# 1. 레포지토리 클론
git clone https://github.com/your-team/king-of-confession.git
cd king-of-confession

# 2. (선택사항) npm 패키지 설치 (Prettier 등)
npm install
```

### **7.3. 로컬 실행**

**방법 1: krpano Testing Server 사용 (권장)**

```bash
# Windows
cd Source
tour_testingserver.exe

# macOS/Linux
cd Source
./tour_testingserver_macos
```

브라우저에서 `http://localhost:8090` 접속

**방법 2: 다른 로컬 서버 사용**

```bash
# Python 3
cd Source
python -m http.server 8000

# Node.js (http-server)
cd Source
npx http-server -p 8000
```

브라우저에서 `http://localhost:8000` 접속

### **7.4. 배포 (Deployment)**

정적 웹 호스팅 서비스에 `Source/` 폴더의 내용을 업로드하면 됩니다.

* **GitHub Pages**
* **Netlify**
* **Vercel**
* **AWS S3 + CloudFront**

## **8. 개발 규칙 (Development Convention)**

### **8.1. 커밋 메시지**

커밋 메시지는 `[태그] 내용` 형식으로 작성합니다.

| 태그 | 설명 |
|------|------|
| `[Feat]` | 새로운 기능 구현 |
| `[Add]` | 코드, 리소스, 에셋 등 추가 |
| `[Update]` | 기존 기능 및 요소 강화 |
| `[Change]` | 기존 기능 및 요소 단순 변경 |
| `[Fix]` | 버그 및 오류 해결 |
| `[Remove]` | 파일 및 리소스 삭제 |
| `[Refactor]` | 코드 구조 개선 (기능 변경 없음) |
| `[Design]` | UI/UX 디자인 수정 |
| `[Comment]` | 주석 추가 및 수정 |
| `[Setting]` | 프로젝트 설정 |
| `[Docs]` | 문서 작성 및 수정 |

### **8.2. 코딩 스타일**

* **XML (krpano):**
    * 들여쓰기: 4 spaces
    * 속성 정렬: Prettier 자동 포맷팅 사용
    * 주석: `<!-- 설명 -->` 형식

* **JavaScript:**
    * 들여쓰기: 4 spaces
    * 변수명: camelCase
    * 함수명: camelCase
    * 상수: UPPER_SNAKE_CASE

* **CSS:**
    * 들여쓰기: 4 spaces
    * 클래스명: kebab-case
    * 색상: rgba() 또는 hex 사용


## **9. 주요 기능 구현 상세 (Implementation Details)**

### **9.1. 페르소나 선택 시스템**

사용자가 차량 씬(`scene_car`)에 진입하면 자동으로 대시보드 UI가 표시됩니다.

**구현 흐름:**
1. **시작 화면:** 로고 표시 및 START 버튼
2. **인트로 영상:** 프로젝트 소개 영상 재생
3. **성별 선택:** 남성/여성 선택
4. **파트너 선택:** 테토(액티비티형) / 에겐(감성형) 선택
5. **프로필 확인:** 선택한 파트너의 프로필 표시
6. **투어 시작:** 메인 씬으로 이동

**기술 구현:**
* CSS3D Renderer를 사용한 글래스모피즘 UI
* JavaScript로 동적 DOM 생성 및 이벤트 처리
* krpano action을 통한 씬 전환 및 상태 관리

### **9.2. 글래스모피즘 UI 디자인**

현대적이고 세련된 글래스모피즘 스타일을 적용했습니다.

**주요 CSS 속성:**
```css
background: rgba(255, 255, 255, 0.15);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 2px solid rgba(255, 255, 255, 0.5);
border-radius: 50px;
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
```

**인터랙션 효과:**
* Hover 시 배경 투명도 증가 및 테두리 강조
* 클릭 시 3D 변환 효과 (translateZ, scale)
* 부드러운 트랜지션 애니메이션

### **9.3. 핫스팟 시스템**

각 씬에는 다양한 유형의 핫스팟이 배치되어 있습니다.

**핫스팟 유형:**

1. **이동 핫스팟 (Navigation Hotspot)**
```xml
<hotspot name="spot1" 
         style="skin_hotspotstyle" 
         ath="0" atv="0" 
         onclick="loadscene(scene_next, null, MERGE, BLEND(1));" />
```

2. **사운드 핫스팟 (Sound Hotspot)**
```xml
<hotspot name="sound1" 
         url="img/icon.png" 
         ath="45" atv="10" 
         onclick="playsound(snd, mp3/voice.mp3);" />
```

3. **비디오 핫스팟 (Video Hotspot)**
```xml
<hotspot name="video1" 
         url="img/play_icon.png" 
         ath="-30" atv="0" 
         onclick="play_video(vod/video.mp4);" />
```

### **9.4. 동적 사운드 관리**

각 씬마다 자동으로 배경음악이 재생되며, 사용자가 제어할 수 있습니다.

**구현 방법:**
```xml
<scene name="scene_01" onstart="playsound(bgsnd, mp3/01.mp3, 0);">
```

**사운드 컨트롤 버튼:**
```xml
<layer name="snd" 
       url="skin/sound_btn.png" 
       onclick="pausesoundtoggle(bgsnd); switch(crop, 0|0|60|60, 60|0|60|60);" />
```

### **9.5. 시야 잠금 기능**

특정 이벤트 발생 시 사용자의 시야를 고정하여 스토리에 집중하도록 합니다.

**구현:**
```xml
<include url="lockview.xml"/>

<action name="lock_view">
    set(control.usercontrol, off);
    tween(view.hlookat, 0, 1.0, easeInOutSine);
    tween(view.vlookat, 0, 1.0, easeInOutSine);
</action>

<action name="unlock_view">
    set(control.usercontrol, all);
</action>
```


## **10. 개발 로드맵 (Roadmap)**

### **Phase 1: 기획 및 사전 제작 (Week 1-2)**
- [x] 프로젝트 컨셉 및 스토리 기획
- [x] 의왕시 관광지 선정 및 답사
- [x] 페르소나 및 캐릭터 디자인
- [x] 360도 촬영 계획 수립

### **Phase 2: 촬영 및 리소스 제작 (Week 3-4)**
- [x] 8개 관광지 360도 촬영
- [x] 파노라마 이미지 스티칭 및 보정
- [x] 캐릭터 음성 녹음
- [x] 배경음악 및 효과음 제작
- [x] 인트로/아웃트로 영상 제작

### **Phase 3: 시스템 개발 (Week 5-7)**
- [x] krpano 기본 환경 구축
- [x] 파노라마 씬 구성 및 최적화
- [x] 페르소나 선택 시스템 개발
- [x] 글래스모피즘 UI 디자인 및 구현
- [x] 핫스팟 시스템 구현
- [x] 사운드 인터페이스 통합

### **Phase 4: 콘텐츠 통합 및 테스트 (Week 8-9)**
- [x] 모든 씬 및 리소스 통합
- [x] 페르소나별 코스 분기 구현
- [x] 인터랙티브 요소 배치 및 테스트
- [x] 멀티 디바이스 호환성 테스트
- [x] 버그 수정 및 최적화

### **Phase 5: 최종 완성 및 배포 (Week 10)**
- [x] 최종 QA 및 사용자 테스트
- [x] 문서 작성 (README, 사용자 가이드)
- [x] 프로젝트 발표 준비
- [x] 웹 호스팅 및 배포

## **11. 트러블슈팅 (Troubleshooting)**

### **11.1. 파노라마 이미지가 로드되지 않는 경우**

**원인:** 로컬 파일 시스템에서 직접 HTML을 열면 CORS 정책으로 인해 리소스 로드가 차단됩니다.

**해결방법:** 반드시 웹 서버를 통해 실행해야 합니다.
```bash
# krpano Testing Server 사용
cd Source
tour_testingserver.exe  # Windows
./tour_testingserver_macos  # macOS
```

### **11.2. 사운드가 재생되지 않는 경우**

**원인:** 브라우저의 자동 재생 정책으로 인해 사용자 인터랙션 없이는 오디오가 재생되지 않습니다.

**해결방법:** 
* 사용자가 화면을 클릭하거나 터치한 후 사운드가 재생됩니다.
* 사운드 버튼을 클릭하여 수동으로 재생할 수 있습니다.

### **11.3. VR 모드가 작동하지 않는 경우**

**원인:** WebXR API를 지원하지 않는 브라우저이거나 HTTPS가 아닌 환경입니다.

**해결방법:**
* Chrome, Firefox, Edge 최신 버전 사용
* HTTPS 환경에서 실행 (로컬 테스트는 localhost 허용)
* VR 헤드셋이 연결되어 있는지 확인

### **11.4. 모바일에서 UI가 깨지는 경우**

**원인:** 반응형 CSS가 제대로 적용되지 않았거나 뷰포트 설정이 잘못되었습니다.

**해결방법:**
* `index.html`의 viewport 메타 태그 확인
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, viewport-fit=cover" />
```
* 브라우저 캐시 삭제 후 재시도


## **12. 성과 및 기대효과 (Results & Impact)**

### **12.1. 기술적 성과**

* **WebXR 기반 멀티 플랫폼 지원:** HMD, 모바일, PC 웹 브라우저에서 모두 작동하는 범용 VR 콘텐츠 구현
* **고품질 파노라마 VR:** 멀티레졸루션 타일 방식으로 최적화된 고해상도 360도 이미지 제공
* **인터랙티브 스토리텔링:** 사용자 선택에 따라 분기되는 동적 내러티브 구조 구현
* **글래스모피즘 UI:** 현대적이고 세련된 사용자 인터페이스 디자인 적용
* **동적 사운드 시스템:** 씬별 자동 배경음악 재생 및 사용자 제어 기능

### **12.2. 콘텐츠적 성과**

* **로컬 브랜디드 콘텐츠 모델 제시:** 의왕시 관광 자원을 효과적으로 홍보하는 새로운 방식 제안
* **게이미피케이션 적용:** 연애 시뮬레이션 형식을 통해 관광 콘텐츠의 몰입도 향상
* **페르소나 기반 맞춤형 경험:** 사용자 선택에 따른 개인화된 투어 코스 제공
* **스토리 기반 체험:** 단순 정보 나열이 아닌 감성적 스토리를 통한 지역 브랜딩

### **12.3. 교육적 성과**

* **실감미디어 기술 실습:** krpano, WebXR 등 최신 VR 기술 학습 및 적용
* **협업 프로젝트 경험:** 기획, 디자인, 개발, 촬영 등 다양한 역할 분담 및 협업
* **문제 해결 능력 향상:** 기술적 제약과 리소스 한계를 극복하는 과정에서 문제 해결 능력 배양
* **포트폴리오 구축:** 실제 배포 가능한 수준의 완성도 높은 프로젝트 결과물 확보

### **12.4. 확장 가능성**

* **타 지역 적용:** 본 프로젝트의 구조와 시스템을 다른 지역의 관광 콘텐츠에도 적용 가능
* **추가 기능 확장:** 
    * 다국어 지원 (영어, 중국어, 일본어 등)
    * 소셜 미디어 공유 기능
    * 사용자 리뷰 및 평점 시스템
    * AI 기반 추천 시스템
* **상업적 활용:** 지자체 관광 홍보, 교육 콘텐츠, 기업 브랜딩 등 다양한 분야에 활용 가능

## **13. 참고 자료 (References)**

### **13.1. 기술 문서**

* **krpano Documentation:** [https://krpano.com/docu/](https://krpano.com/docu/)
* **WebXR Device API:** [https://www.w3.org/TR/webxr/](https://www.w3.org/TR/webxr/)
* **MDN Web Docs - WebGL:** [https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)

### **13.2. 디자인 참고**

* **Glassmorphism UI Design:** [https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9](https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9)
* **360도 VR 촬영 가이드:** [https://www.insta360.com/blog/360-photography-guide](https://www.insta360.com/blog/360-photography-guide)

### **13.3. 의왕시 관광 정보**

* **의왕시 문화관광:** [https://www.uiwang.go.kr/tour](https://www.uiwang.go.kr/tour)
* **의왕레일바이크:** [https://www.uiwangrailbike.com/](https://www.uiwangrailbike.com/)
* **의왕스카이레일:** [https://www.uwskyrail.com/](https://www.uwskyrail.com/)

## **14. 라이선스 (License)**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## **15. 연락처 (Contact)**

프로젝트에 대한 문의사항이나 피드백은 아래 연락처로 보내주세요.

* **프로젝트 대표:** 배민우
* **Email:** alpha7179@ajou.ac.kr
* **GitHub:** [https://github.com/alpha7179](https://github.com/alpha7179)

---

**지도교수:** 조현준 교수님, 강명규 교수님  
**소속:** 아주대학교 디지털미디어학과  
**프로젝트 기간:** 2025년 동계계절학기

---

*"의왕시에 고백하다 - 실감미디어로 만나는 새로운 로컬 브랜딩"*

