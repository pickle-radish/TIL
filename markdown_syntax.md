# 마크다운 문법 정리

마크다운 문법 정리





## 1. 마크다운이란?

간단하게 **코드에 관련된** 문서 정리를 할 수 있는 문서포멧





## 2. 코드 블락

#### 인라인으로 코드 강조하기

background 혹은 background-image속성으로 요소에 배경 이미지를 삽입 할 수 있습니다.

```
`background`
```

`bakcground`

​	

코드를 쓸때는 '```' 빽틱 3개를 사용하고 오른쪽 하단에 어느 언어인지 코드의 종류도 적어준다



- java코드

```java
public static void main(){
	
}
```



- Python 코드

``` python
print("hello")
```





## 3. 제목 부분 크기

'#'의 갯수로 제목의 크기를 h1부터 h6까지 조정한다

# '#'한개

## '#' 두개

### '#' 세개

#### '#' 네개

##### '#' 다섯개

###### '#' 여섯개



## 4. 강조

이텔릭체는 '*' 별표 혹은 '_' 언더바를 사용한다

```
*별표* 또는 _언더바_
```

*별표*   또는  _언더바_



두껍게는 '**' 별표 두개 혹은 '__' 언더바 두개를 사용한다

```
**별표 또는 __언더바__
```

**별표**  또는  __언더바__



이텔릭체와 두껍게는 같이 사용할 수 있습니다 '**'

```
**_이텔릭체를_ 두껍게**
```

**_이텔릭체를_  두껍게**



취소선은 '~' 물결표시를 사용한다

```
~~취소선~~
```

~~취소선~~



밑줄은 <u></u> 를 사용한다

```
<u>밑줄</u>
```

<u>밑줄</u>





## 5. 목록

1. 순서가 필요한 목록인 경우에는 숫자와 마침표를 찍고 스페이스바
2. 순서가 필요하지 않는 경우
   - '-' 하이픈 또는 '*' 별 또는 '+' 플러스를 입력하고 스페이스바
     - Tap을 누르면 서브 목록 

- 목록의 들여쓰기에 따라 모양 변화
  + 하지만 모양 변화에서
    + 마지막 들여쓰기 모양은 검은색 네모
      + 이후에는 들여써도 계속 같은 모양이다





## 6. 링크

```
[GOOGLE](https://google.com)
```

[GOOGEL](https://google.com)



```
[NAVER](https://naver.com "링크설명(title)을 작성하세요")
```

[NAVER](https://naver.com "링크설명(title)을 작성하세요")



```
[상대적 참조](../users/login)
```

[상대적 참조](../users/login)



```
[Dribbble][Dribbble link]
[Dribble link]:https://dribbble.com
```

[Dribbble][Dribbble link]

[Dribbble link]:https://dribble.com





```
[GitHub][1]
[1]:https://github.com
```

[GitHub][1]

[1]:https://github.com





문서안에서 [참조 링크]를 그대로 사용할 수 있습니다

```
[참조 링크]: https://naver.com "네이버로 이동합니다!"
```

[참조 링크]:https://naver.com "네이버로 이동합니다!"





문서 내에 일반 URL이나 꺾쇠  괄호 (<>)안의 URL은 자동으로 링크를 사용합니다

```
구글 홈페이지: https://google.com
네이버 홈페이지: <https://naver.com>
```

구글 홈페이지: https://google.com

네이버 홈페이지: <https://naver.com>







## 7. 이미지

링크와 비슷하지만 앞에 '!'가 붙습니다

```
![대체 텍스트를 입력하세요](http://www.gstatic.com/webp/gallery/5.jpg "링크 설명을 작성하세요")
![Kayak][logo]
[logo]: https://www.gstatic.com/webp/gallery/2.jpg "To go kayaking."
```



![대체 텍스트를 입력하세요](http://www.gstatic.com/webp/gallery/5.jpg "링크 설명을 작성하세요")
![Kayak][logo]

[logo]: https://www.gstatic.com/webp/gallery/2.jpg "To go kayaking."





#### 이미지에 링크하기

마크다운 이미지 코드를 링크 코드로 묶어 줍니다.

```
[![Vue](https://www.gstatic.com/webp/gallery/3.jpg)](https://kr.vuejs.org/)
```



[![Vue](https://www.gstatic.com/webp/gallery/3.jpg)](https://kr.vuejs.org/)







## 8. 표

헤더 셀을 구분할 때 3개 이상의 `-`(hyphen/dash) 기호가 필요합니다.
헤더 셀을 구분하면서 `:`(Colons) 기호로 셀(열/칸) 안에 내용을 정렬할 수 있습니다.
가장 좌측과 가장 우측에 있는 `|`(vertical bar) 기호는 생략 가능합니다.



```
| 값 | 의미 | 기본값 |
|---|:---:|---:|
| `static` | 유형(기준) 없음 / 배치 불가능 | `static` |
| `relative` | 요소 자신을 기준으로 배치 |  |
| `absolute` | 위치 상 부모(조상)요소를 기준으로 배치 |  |
| `fixed` | 브라우저 창을 기준으로 배치 |  |

값 | 의미 | 기본값
---|:---:|---:
`static` | 유형(기준) 없음 / 배치 불가능 | `static`
`relative` | 요소 **자신**을 기준으로 배치 |
`absolute` | 위치 상 **_부모_(조상)요소**를 기준으로 배치 |
`fixed` | **브라우저 창**을 기준으로 배치 |
```



| 값         |                  의미                  |   기본값 |
| ---------- | :------------------------------------: | -------: |
| `static`   |     유형(기준) 없음 / 배치 불가능      | `static` |
| `relative` |       요소 자신을 기준으로 배치        |          |
| `absolute` | 위치 상 부모(조상)요소를 기준으로 배치 |          |
| `fixed`    |      브라우저 창을 기준으로 배치       |          |



| 값         |                     의미                     |   기본값 |
| ---------- | :------------------------------------------: | -------: |
| `static`   |        유형(기준) 없음 / 배치 불가능         | `static` |
| `relative` |        요소 **자신**을 기준으로 배치         |          |
| `absolute` | 위치 상 **_부모_(조상)요소**를 기준으로 배치 |          |
| `fixed`    |       **브라우저 창**을 기준으로 배치        |          |







## 9. 인용문

```
인용문(blockQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> _(네이버 국어 사전)_

BREAK!

> 인용문을 작성하세요!
>> 중첩된 인용문(nested blockquote)을 만들 수 있습니다.
>>> 중중첩된 인용문 1
>>> 중중첩된 인용문 2
>>> 중중첩된 인용문 3
```



인용문(blockQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> _(네이버 국어 사전)_

BREAK!

> 인용문을 작성하세요!
> > 중첩된 인용문(nested blockquote)을 만들 수 있습니다.
> > > 중중첩된 인용문 1
> > > 중중첩된 인용문 2
> > > 중중첩된 인용문 3





## 10. 원시 HTML(Raw HTML)

마크다운 문법이 아닌 HTML 문법을 사용할 수 있습니다.

마크다운에서 지원하지 않는 기능을 사용할 때 유용하며 대부분 잘 동작합니다.



```
<u>밑줄 긑기</u> 
<img width="150" src="http://www.gstatic.com/webp/gallery/4.jpg" alt="Prunus" title="A Wild Cherry (Prunus avium) in flower">

```

<u>밑줄 긑기</u> 
<img width="150" src="http://www.gstatic.com/webp/gallery/4.jpg" alt="Prunus" title="A Wild Cherry (Prunus avium) in flower">







## 11. 수평선

각 기호를 3개 이상 입렵합니다.

```
--- (hyphens)
*** (asterisks)
___ (underscores)
```



---

(hyphens)





***

(asterisks)





___

(underscores)





## 12. 줄바꿈

줄바꿈을 하려면  띄어쓰기를 2번 하거나 \<br>을 사용합니다



> 일반 줄바꿈이 동작하지 않는 환경(설정 및 버전에 따라)의 경우 '2번 띄어쓰기' 나 \<br>를 활용할 수 있습니다.





## 13. 체크박스

'-', '+', '*' 뒤에 띄어쓰기 후 대괄호를 넣어 작성해 주세요

대괄호 안에 띄어쓰기를 하면 빈 체크박스, x를 넣으면 체크된 체크박스가 생깁니다





```
- [ ] 운동 하기
- [x] 음악 듣기
```



- [ ] 운동 하기
- [x] 음악 듣기







출처 : [[MarkDown 사용법 총정리 | HEROPY](https://heropy.blog/2017/09/30/markdown/)]