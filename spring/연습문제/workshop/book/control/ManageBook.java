package workshop.book.control;

import workshop.book.entity.*;

public class ManageBook {
	
	public static void main(String[] args) {
		
		Publication[] publication = new Publication[5];
		
		publication[0] = new Magazine("마이크로소프트","2007-10-01", 328, 9900, "매월");
		publication[1] = new Magazine("경영과컴퓨터경영과컴퓨터", "2007-10-03", 316, 9000,"매월");
		publication[2] = new Novel("빠삐용", "2007-07-01", 396, 9800, "베르나르베르베르", "현대소설");
		publication[3] = new Novel("남한산성", "2007-04-14", 383, 11000, "김훈", "대하소설");
		publication[4] = new ReferenceBook("실용주의프로그래머", "2007-01-14", 496, 25000, "소프트웨어공학");

		
		System.out.println("==== Book 정보 출력 ====");
		for(int i=0; i<5; i++) {
			System.out.println(publication[i].toString());
		}
		
		System.out.println("==== 가격정보 변경 전 ====");
		System.out.println(publication[2].toString() + " : " + publication[2].getPrice());		
		
		publication = modifyPrice(publication);
		
		System.out.println("==== 가격정보 변경 후 ====");
		System.out.println(publication[2].toString() + " : " + publication[2].getPrice());	
		
		
		
		
		
	}
	
	
	public static Publication[] modifyPrice(Publication[] publication) {
		
		for(int i=0; i<5; i++) {
			int price=0;
			if(publication[i] instanceof Magazine) {
				price = publication[i].getPrice();
				publication[i].setPrice(price * 60/100);
			}else if(publication[i] instanceof Novel) {
				price = publication[i].getPrice();
				publication[i].setPrice(price * 80/100);
			}else {
				price = publication[i].getPrice();
				publication[i].setPrice(price * 90/100);
			}
		}
		
		
		return publication;
	}

}
