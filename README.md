<br/>

# ✨ HaruHana - 나만의 학습 설정 프로젝트 ✨

HaruHana는 웹 개발과 CS 공부를 더 쉽고 재미있게 할 수 있도록 도와주는 웹 애플리케이션이에요!🔥  <br/>
사용자는 원하는 카테고리를 선택하고, 학습 시간과 문제 수를 조절하여 딱 맞는 학습 플랜을 세울 수 있어요! <br/>

매일 꾸준히 학습할 수 있도록 도와주고, 학습 통계를 한눈에 볼 수 있도록 제공해요! 📊💡

<br/><br/>

# 👨‍👧‍👧 팀 소개

👥 함께하는 팀원들 👫

| [남승현](https://github.com/namsh1125) | [김새봄](https://github.com/saebomnewspring) | [윤예진](https://github.com/yezanee) | 
| --- | --- | --- |
| <img width="180" src="/docs/namsh.png" /> | <img width="180" src="/docs/saebom.png" /> | <img width="180" src="/docs/yezanee.png" /> |
| 팀장 | 팀원 | 팀원 |

<br/><br/>


# 🌐 배포
🔗 [ 하루하나 URL ](http://haruhana.woorifisa.site:3000/)

<br/><br/>


# 📦 폴더 구조

<img width="500"  src="/docs/folderstructure.png" />



 <br/><br/>

# 🖥️ 화면 구성
### [ 랜딩페이지 ]
<img width="301"  src="/docs/landing.png" />
 <br/><br/>


### [ 로그인 / 회원가입 ]
<img width="301"  src="/docs/login.png" />
 <br/>

<img width="301" src="/docs/logout.png" />

 <br/><br/>


### [ 사용자 정보 입력 모달창 ]
<img width="301" src="docs/modal.png" />

사용자가 처음 학습을 시작할 때, 원하는 학습 스타일을 설정할 수 있는 화면이에요! 📝 <br/>
🎯 카테고리 선택: 백엔드, 프론트엔드, 네트워크, 데이터베이스, 운영체제, 자료구조 등 원하는 분야를 골라 학습 가능! <br/>
⏳ 학습 시간 설정: 하루에 공부할 시간을 정하고 루틴을 만들 수 있어요! <br/>
🔢 문제 수 설정: 원하는 만큼 문제를 풀면서 실력을 쌓을 수 있어요!

 <br/><br/>


### [ 마이페이지 ]
<img width="438" src="/docs/mypage.png" />

📅 마이페이지: 학습 캘린더를 제공하여 매일매일 학습 기록을 확인할 수 있어요! <br/>
문제 풀이 기록이 마이페이지에서 저장되고, 학습 성취도를 분석할 수 있어요.


 <br/><br/>


### [ 차트 통계 분석 ]
<img width="500" src="/docs/statistics.png" />

📊 학습 통계: 내가 푼 문제들의 정답률과 학습 패턴을 분석해줘요!

 <br/><br/>


### [ 오늘의 문제 ]
<img width="465" src="/docs/todayproblem.png" />

사용자가 설정한 학습 정보에 맞춰 맞춤형 문제를 제공하는 화면이에요! 🎯 <br/>
선택한 카테고리의 문제를 자동으로 구성하여 학습을 도와줘요.


 <br/><br/>


### [ 문제 리스트 ]
<img width="301" src="/docs/ProblemList.png" />

🏆 문제 리스트: 카테고리별, 난이도별로 문제를 골라 풀 수 있어요!

 <br/><br/>


## 🌐 Mock 서버
HaruHana에서는 실제 백엔드 API를 사용하기 전에 프론트엔드 개발을 원활하게 진행할 수 있도록 Mock 서버를 운영하고 있어요.

📍**Mock 서버 정보**

Repository: [**Haruhana mock server**](http://api.haruhana.woorifisa.site:8080/) <br/>
기반 기술: Express.js<br/><br/>

아래 링크를 클릭하면 운영 중인 Mock 서버에 접속할 수 있어요!<br/>
[**👉 Mock 서버 바로가기**](http://api.haruhana.woorifisa.site:8080/)

<br/><br/>
## 📈 LightHouse 성능 지표

<img width="673"  src="/docs/lighthouse1.png" />

<img width="694"  src="/docs/lighthouse2.png" />


 <br/><br/>


## Convention

### [prettier-vscode에서-저장만하면-자동으로-적용하는법](how-to-prettier.md)

### File

파일 및 폴더 이름의 경우는 Nextjs에서 제공하는 [Convention](https://nextjs-ko.org/docs/getting-started/project-structure)을 따릅니다.

### Branch Strategy

![Git Flow 전략](./docs/GitFlow.png)

저희는 Git Flow 전략을 기반으로 개발을 진행하였습니다.

### Commit Message

Commit Message는 다음의 형식을 따르며,

```
<이모지> <커밋 메시지>
```

이모지는 다음의 표를 참고하여 사용합니다.

 <br/><br/>


| **이모지** | **의미**             | **설명**                                               | **예시**                            |
| ---------- | -------------------- | ------------------------------------------------------ | ----------------------------------- |
| 🎨         | 코드 구조/형식 개선  | 코드의 기능 변경 없이 리팩토링이나 코드 스타일을 개선. | `🎨 CSS 클래스 이름 리팩토링`       |
| ✨         | 새로운 기능 추가     | 기존 코드에 새로운 기능을 추가.                        | `✨ 사용자 인증 기능 추가`          |
| 🐛         | 버그 수정            | 코드의 버그를 수정.                                    | `🐛 로그인 버튼 오류 수정`          |
| 📝         | 문서화               | README, 주석 등 문서와 관련된 작업.                    | `📝 API 문서 업데이트`              |
| 💄         | UI/스타일 수정       | CSS 변경 등 사용자에게 보이는 부분의 스타일 변경.      | `💄 버튼 색상 업데이트`             |
| 🔧         | 설정 파일 수정       | ESLint, Prettier 등 설정 파일 변경.                    | `🔧 ESLint 규칙 업데이트`           |
| ✅         | 테스트 추가/수정     | 테스트 코드와 관련된 작업.                             | `✅ 로그인에 대한 단위 테스트 추가` |
| 🔥         | 코드 및 파일 삭제    | 불필요한 코드나 파일 삭제.                             | `🔥 사용하지 않는 CSS 파일 삭제`    |
| ♻️         | 코드 리팩토링        | 성능 개선, 가독성 향상을 위해 기존 코드 수정.          | `♻️ 인증 로직 리팩토링`             |
| ⚡         | 성능 개선            | 속도나 효율성을 개선하기 위한 코드 변경.               | `⚡ 데이터베이스 쿼리 속도 개선`    |
| 🚑         | 긴급 수정            | 치명적인 문제나 버그를 빠르게 수정.                    | `🚑 홈페이지 깨짐 문제 핫픽스`      |
| 📦         | 패키지 추가/업데이트 | npm, Yarn 등 패키지 매니저를 통한 패키지 변경.         | `📦 React 버전 업그레이드`          |
| 🎉         | 초기 작업            | 프로젝트의 초기 설정 및 파일 추가.                     | `🎉 프로젝트 초기화`                |
| 🚚         | 파일/폴더 이동       | 파일이나 폴더의 위치를 변경.                           | `🚚 에셋 폴더 이동`                 |
| ➕         | 종속성 추가          | 새로운 라이브러리나 종속성 추가.                       | `➕ lodash 종속성 추가`             |
| ➖         | 종속성 제거          | 사용하지 않는 라이브러리나 종속성 제거.                | `➖ jQuery 제거`                    |


 <br/><br/>


# 📌 HaruHana와 함께 하루하나씩 실력을 키워봐요! 🌱




