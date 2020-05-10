package workshop.person.control;

import workshop.person.entity.PersonEntity;

public class PersonManager {
	

	public static void main(String[] args) {
		
		PersonManager pManager = new PersonManager();
		
		printTitle("인물 조회 정보 시스템");
		
		printTitleLine();
		
		PersonEntity[] persons = new PersonEntity[10];
		persons = fillPersons(persons);
		
		showPerson(persons);
		
		int count = findByGender(persons, '여');
		System.out.println("성별 : '여'(은)는 " + count + "명 입니다.");
		
		printTitleLine();
		
		showPerson(persons, "김하늘");
		
		
		
	}


	public PersonManager() {
		
	}
	
	public static PersonEntity[] fillPersons(PersonEntity[] persons) {
		persons[0] = new PersonEntity("이성호", "7212121028102", "인천 계양구", "032-392-2932");
		persons[1] = new PersonEntity("김하늘", "7302132363217", "서울 강동구", "02-362-1932");
		persons[2] = new PersonEntity("박영수", "7503111233201", "서울 성북구", "02-887-1542");
		persons[3] = new PersonEntity("나인수", "7312041038988", "대전 유성구", "032-384-2223");
		persons[4] = new PersonEntity("홍정수", "7606221021341", "서울 양천구", "02-158-7333");
		persons[5] = new PersonEntity("이미숙", "7502142021321", "서울 강서구", "02-323-1934");
		persons[6] = new PersonEntity("박성구", "7402061023101", "서울 종로구", "02-308-0932");
		persons[7] = new PersonEntity("유성미", "7103282025101", "서울 은평구", "02-452-0939");
		persons[8] = new PersonEntity("황재현", "7806231031101", "인천 중구", "032-327-2202");
		persons[9] = new PersonEntity("최철수", "7601211025101", "인천 계양구", "032-122-7832");
		
		return persons;
	}
	
	public static void showPerson(PersonEntity[] persons) {
		for(int i=0; i<persons.length; i++) {
			System.out.println("[이름] " + persons[i].getName() + "    [성별] " + persons[i].getGender() + "    [전화번호] " + persons[i].getPhone());
			printItemLine();
		}
	}
	
	public static int findByGender(PersonEntity[] persons, char gender) {
		int count = 0;
		for(int i=0; i<persons.length; i++) {
			if(persons[i].getGender()=='여') {
				count++;
			}
		}
		
		return count;
	}
	
	public static void showPerson(PersonEntity[] persons, String name) {
		System.out.println("-- 이름 : '김하늘'(으)로 찾기 결과입니다. --");
		for(int i=0; i<persons.length; i++) {
			if(persons[i].getName().equals(name)) {
				System.out.println("[이름] " + persons[i].getName());
				System.out.println("[성별] " + persons[i].getGender());
				System.out.println("[전화번호] " + persons[i].getAddress());
				System.out.println("[주소] " + persons[i].getPhone());
			}
		}
	}
	
	
	public static void printTitle(String title) {
		System.out.println("@@@ "+title+" @@@");
	}
	
	public static void printTitleLine() {
		System.out.println("============================================================");
	}
	
	public static void printItemLine() {
		System.out.println("------------------------------------------------------------");
	}
	
	
}
