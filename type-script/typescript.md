# Typescript

#### 정의

- type이 있는 javascript
- javascript를 실행하기 전 에러를 잡는 시간을 줄여준다







##### 설치

npm i typescript -g



#### 컴파일

- 컴파일(트랜스 파일) : 파일 대상
  - `tsc test.ts`
  - test.js 파일 생성됨

- 전체 컴파일
  - `tsc --init`
    - tsconfig.json 설정파일 생성
  - `tsc`





## 문법



##### type anotation

```ts
let a: number;
let b: string;
```





##### 기본 자료형

- boolean
- number
- string
- null
- undefined
- symbol



###### 개발시 사용하는 타입

- any
- void
- never
- unknown
- enum
- tuple





옵션

- noImplicitAny
  - 추론시 Any가 나올 경우 any를 명시적으로 하라는 에러

- strictNullChecks
  - 모든 타입에 자동으로 포함되어 있는 null 과 undefined 를 제거해준다

- noImplicitReturns
  - return 이 빠질 경우 에러



