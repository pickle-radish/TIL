# Vuex



#### state

- 데이터 저장소 ~= data



#### mutations

- data를 변경 ~=methods (동기적)

- 호출방법

  >$store.commit('함수명', data) 으로 호출

- 호출된 함수의 첫 번째 인자로 항상 state가 들어간다

#### actions

- data를 변경 + 비동기적 ~= method
- mutations+ 비동기적

- 호출되 함수의 인자 값
  1. context
- 사용하려는 함수에서 이벤트에서 바로 함수명으로 호출 가능
  대신 `import {mapActions} from 'vuex'` 로 mapActions를 import를 해주고
  methods에 `...mapActions(['testActions']),` 이런식으로 사용하고자 하는 함수 이름을 인자 값으로 넣어준다

#### modules

- vuex의 정의할 내용을 파일로 나눴을 때 불러오는 부분



#### getters

- data에 대한 getter(조회) ~= computed