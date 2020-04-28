## React-native 초기 설정

1. react-native init Counter
2. cd Counter
3. npm i --save styled-components
4. npm i --save-dev typescript @types/react @types/react-native @types/styled-components babel-plugin-root-import
5. tsconfig.json파일을 생성하고 다음과 같이 작성한다

```json
{
	"compilerOptions":{
		"allowJs": true,
		"allowSyntheticDefaultImports": true,
		"esModuleInterop": true,
		"isolatedModules": true,
		"jsx": "react",
		"lib": ["es6"],
		"moduleResolution": "node",
		"noEmit": true,
		"strict": true,
		"target": "esnext",
		"baseUrl": "./src",
		"paths": {
			"~/*": ["*"]
		}
	},
	"exclude": [
		"node_modules",
		"babel.config.js",
		"metro.config.js",
		"jest.config.js"
	]
}
```

6. babel.config.js파일을 열고 다음과 같이 수정한다

```js
module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
        [
            'babel-plugin-root-import',
            {
                rootPathPrefix: '~',
                rootPathSuffix: 'src',
            },
        ],
    ],
};
```

7. src폴더를 생성후 App.js파일을 App.tsx로 이름을 변경한 후 다음과 같이 수정한다

```tsx
import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styled from 'styled-components/native';

const ScrollView = Styled.ScrollView`
	background-color: ${Colors.lighter};
`;

const Body = Styled.View`
	background-color: ${Colors.white};
`;

const SectionContainer = Styled.View`
	margin-top: 32px;
	padding-horizontal: 24px;
`;

const SectionDescription = Styled.Text`
	margin-top: 8px;
	font-size: 18px;
	font-weight: 400;
	color: ${Colors.dark};
`;

const HighLight = Styled.Text`
	font-weight: 700;
`;

interface Props {}

const App = ({}:Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Body>
            <SectionContainer>
            	<SectionDescription>Step One</SectionDescription>
              <SectionDescription>
               	Edit <HighLight>App.js</HighLight> to change this screen and then come back to see your edits.
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
            	<SectionDescription>See Your Changes</SectionDescription>
              <SectionDescription>
              	<ReloadInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
            	<SectionDescription>Debug</SectionDescription>
              <SectionDescription>
               	<DebugInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
            	<SectionDescription>Learn More</SectionDescription>
              <SectionDescription>
              	Read the docs to discover what to do next;
              </SectionDescription>
            </SectionContainer>
            <LearnMoreLinks />
          </Body>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
```

8. 마지막으로 index.js파일을 열고
   `import App from './App';` 부분을 `import App from '~/App';`으로 수정한다