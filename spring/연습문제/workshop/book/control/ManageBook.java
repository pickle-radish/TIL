package workshop.book.control;

import workshop.book.entity.*;

public class ManageBook {
	
	public static void main(String[] args) {
		
		Publication[] publication = new Publication[5];
		
		publication[0] = new Magazine("����ũ�μ���Ʈ","2007-10-01", 328, 9900, "�ſ�");
		publication[1] = new Magazine("�濵����ǻ�Ͱ濵����ǻ��", "2007-10-03", 316, 9000,"�ſ�");
		publication[2] = new Novel("���߿�", "2007-07-01", 396, 9800, "����������������", "����Ҽ�");
		publication[3] = new Novel("���ѻ꼺", "2007-04-14", 383, 11000, "����", "���ϼҼ�");
		publication[4] = new ReferenceBook("�ǿ��������α׷���", "2007-01-14", 496, 25000, "����Ʈ�������");

		
		System.out.println("==== Book ���� ��� ====");
		for(int i=0; i<5; i++) {
			System.out.println(publication[i].toString());
		}
		
		System.out.println("==== �������� ���� �� ====");
		System.out.println(publication[2].toString() + " : " + publication[2].getPrice());		
		
		publication = modifyPrice(publication);
		
		System.out.println("==== �������� ���� �� ====");
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
