/*

Array helper method

*/

const colors = ['red', 'blue', 'green']

//배열의 요소를 순회하며 하나씩 출력하기
//전통적인 for문
for(let i=0; i<colors.length; i++){
    console.log(colors[i])
}

//순회문으로서의 for문
for (let color of colors){
    console.log(color)
}

//forEach 헬퍼 메서드
colors.forEach(item => console.log(item))


//filter()
const numbers1 = [-20, -15, 5, 10];

const positivaeNumber = []
numbers1.forEach(number => {
    if(number>0){
        positivaeNumber.push(number)
    }
})

console.log(positivaeNumber)

const positivaeNumber2 = numbers1.filter(number => number > 0)
console.log(positivaeNumber2);

//map()
//순회를 하며, 내부의 모든 요소에 동일한 작업을 해야하는 경우
//숫자배열 <->글자배열, 동일한 데이터를 적용해야 하는 경우

inputs = ['1', '5', '3', '6'];
inputs = inputs.map(input=>parseInt(input))

console.log(inputs);


//reduce()
// 순회를 하며 내부의 모든 요소를 하나의 값으로 환원해야 하는 경우

let sum = inputs.reduce((acc, cur)=>{
    return acc+cur;
})

console.log(sum)

console.log('------------------------------------------------------------------------------------')

//find, some, every

// 1. images 배열안에 있는 정보(height, width)를 곱해 넓이를 구하여 areas 배열에 저장하세요.
console.log("1번")
const images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ]
  
  const areas = []
  images.forEach(image=>areas.push(image.height*image.width))

  console.log("areas")
  console.log(areas)
  console.log()
  
  // 2. 아래 함수에서 for 를 forEach 로 바꾸세요.
  console.log("2번")
  function handlePosts() {
      const posts = [
        { id: 23, title: 'Daily JS News' },
        { id: 52, title: 'Code Refactor City' },
        { id: 105, title: 'The Brightest Ruby' }
      ]
      /*
      for (let i = 0; i < posts.length; i++){
          console.log(posts[i]) 
      console.log(posts[i].id)
      console.log(posts[i].title)
      }*/
      posts.forEach(post=>{
          console.log(post)
          console.log(post.id)
          console.log(post.title)
      })
  }
  
  handlePosts()
  console.log()
  
  
  
  // 3. 숫자가 담긴 배열로 각 숫자들의 제곱근이 들어있는 새로운 배열 roots를 만드세요.
  console.log("3번")
  const newNumbers = [4, 9, 16]
  const roots = newNumbers.map(number=>number**(1/2));
  console.log(roots)
  console.log()
  
  
  // 4. 속도(distance/time)를 저장하는 배열 speeds 를 만드세요.
  console.log("4번")
  const trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 },
  ]
  const speeds = trips.map(trip=>trip.distance/trip.time);
  console.log(speeds)
  console.log()
  
  
  // 5. numbers 배열중 50보다 큰 값들만 모은 배열 filteredNumbers 을 만드세요.
  console.log('5번')
  const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95]
  const filteredNumbers = numbers.filter(number=>number>50);
  console.log(filteredNumbers)
  console.log()
  
  
  // 6. 배열에 담긴 중복된 이름을 {'이름': 수} 형태의 object로 반환하세요. (map)
  console.log('6번')
  const names = ['harry', 'jason', 'tak', 'tak', 'justin']
  

  let result = names.reduce((prev, curr) => {
    console.log(prev)
    console.log(curr)
    prev[curr] = (prev[curr] || 0) + 1;
    return prev;
  },{});
  console.log(result);


  // 7. people에서 admin 권한을 가진 요소를 찾으세요. (find)
  console.log('7번')
  const people = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true },
  ]
  const findAdmin = people.find(man=>man.admin)
  console.log(findAdmin)
  console.log()
  
  
  // 8. accounts에서 잔액이 24,000인 사람을 찾으세요. (find)
  console.log('8번')
  const accounts = [
      { name: 'justin', balance: 1200 },
      { name: 'harry', balance: 50000 },
      { name: 'jason', balance: 24000 },
  ]
  const find24000 = accounts.find(account=>account.balance==24000)
  console.log(find24000)
  console.log()
  
  
  // 9. requests 배열에서 status가 pending인 요청이 있는지 확인하세요. (some)
  console.log('9번')
  const requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' },
  ]
  const requestPending = requests.some(request=>request.status==='pending')
  console.log(requestPending)
  console.log()
  
  
  
  // 10. users 배열에서 모두가 submmited 인지 여부를 hasSubmitted 에 저장하세요. (every)
  console.log('10번')
  const users = [
      { id: 21, submmited: true },
      { id: 33, submmited: false },
      { id: 712, submmited: true},
  ]
  const hasSubmitted = users.every(user=>user.submmited)
  console.log(hasSubmitted)
  console.log()
  