# type-script 설정하기



### create-react-app 프로젝트가 이미 생성되어 있을 때 type-script적용하기





#### react_scrips 의존성 바꾸기

package.json 의 dependencies에 있는 react-scripts를 react-scripts-ts로 바꾼다 버전은 2.16.0

```json
..
"dependencies":{
	"react-scripts-ts": "2.16.0"
},
```



devDependencies에 typ`escript 의존성 추가

```json
 ..
  "devDependencies": {
    "@types/jest": "^23.1.5",
    "@types/node": "^10.5.2",
    "@types/react": "^16.4.6",
    "@types/react-dom": "^16.0.6",
    "typescript": "^2.9.2"
  }
```



`npm cache clean --force `

package-lock.json 및 node_modules 삭제 후 재설치



typescript config 파일 생성

tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "build/dist",
    "module": "esnext",
    "target": "es5",
    "lib": ["es6", "dom"],
    "sourceMap": true,
    "allowJs": true,
    "jsx": "react",
    "moduleResolution": "node",
    "rootDir": "src",
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "suppressImplicitAnyIndexErrors": true,
    "noUnusedLocals": true
  },
  "exclude": [
    "node_modules",
    "build",
    "scripts",
    "acceptance-tests",
    "webpack",
    "jest",
    "src/setupTests.ts"
  ]
}
```



tslint.json

```json
{
  "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
  "linterOptions": {
    "exclude": [
      "config/**/*.js",
      "node_modules/**/*.ts"
    ]
  }
}
```



images.d.ts

```ts
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
```



index.js를 index.tsx로 파일명 변경후 import부분 코드를 다음과 같이 변경한다

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';

...
```















