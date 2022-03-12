# Classting 과제

신동철 Classting Frontend 개발자 과제입니다

URL : https://classting.vercel.app/

## 개발환경

- node.js v14.17.0
- CRA
- react v17.0.2
- typescript v4.6.2
- prettier
- vercel

## 폴더 구조

- src
  - apis -> api 모듈 정리
  - apps -> 각 페이지에 쓰이는 컴포넌트들 및 로직들
  - components -> 공용으로 쓰이는 컴포넌트들
  - constants -> 전역으로 쓰이는 상수들
  - pages -> 페이지를 명시해주는 컴포넌트 (안에 로직들은 apps폴더로 분리)
  - recoil -> 전역상태관리로 쓰이는 store
  - type -> 전역으로 쓰이는 type들
  - utils -> 공용으로 쓰이는 함수 및 클래스
  - Root.tsx -> 라우터 및 provider 환경 셋팅

## 컨벤션

- commit
  - [FIX]내용 -> 버그, 리팩토링 등 수정사항이 있을 때
  - [ADD]내용 -> 기능추가, 기능개선 등 추가사항이 있을 때
- component 로직
  - 무조건 bussiness로직은 customhooks로 분리
  - screen컴포넌트를 제외하고 하나의 컴포넌트에는 한 역할만 가져가도록 하기
  - 렌더링 최적화는 유저에게 눈에 띄는 성능저하가 나타나는 로직에만 고려하기
- 변수명 지을 땐
  - camelcase로 작성
  - 줄임말은 최대한 피하기
  - 명시적인 이름 > 글자수

## 컴포넌트 테스트 process

### MVP 구현 전단계

- 반응형을 고려하여 UI 체크
- 단방향 데이터 흐름을 고려하여 state관리가 다른 페이지에서도 원할할지 고려해보기
- 기능이 원할하게 작동하는지 확인

### MVP 구현 이후

- 한번더 UI, 기능체크
- 돌발적인 유저의 상호작용에도 기능 및 state가 제대로 관리되는지 확인

## 주요 사용 라이브러리

### emotion

jsx태그 이름을 역할에 맞게 명시적으로 표현하기 위해 사용

### MaterialTheme

디자인 관련 기획이 없는 상태에서 좀 더 통일화된 UI를 구현하기위해 사용

### recoil

비교적 짧은 코드로 전역상태관리를 할 수 있어 개발속도를 올릴 수 있다는 판단하에 사용
