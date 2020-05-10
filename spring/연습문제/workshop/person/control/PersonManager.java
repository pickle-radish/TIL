package workshop.person.control;

import workshop.person.entity.PersonEntity;

public class PersonManager {
	

	public static void main(String[] args) {
		
		PersonManager pManager = new PersonManager();
		
		printTitle("�ι� ��ȸ ���� �ý���");
		
		printTitleLine();
		
		PersonEntity[] persons = new PersonEntity[10];
		persons = fillPersons(persons);
		
		showPerson(persons);
		
		int count = findByGender(persons, '��');
		System.out.println("���� : '��'(��)�� " + count + "�� �Դϴ�.");
		
		printTitleLine();
		
		showPerson(persons, "���ϴ�");
		
		
		
	}


	public PersonManager() {
		
	}
	
	public static PersonEntity[] fillPersons(PersonEntity[] persons) {
		persons[0] = new PersonEntity("�̼�ȣ", "7212121028102", "��õ ��籸", "032-392-2932");
		persons[1] = new PersonEntity("���ϴ�", "7302132363217", "���� ������", "02-362-1932");
		persons[2] = new PersonEntity("�ڿ���", "7503111233201", "���� ���ϱ�", "02-887-1542");
		persons[3] = new PersonEntity("���μ�", "7312041038988", "���� ������", "032-384-2223");
		persons[4] = new PersonEntity("ȫ����", "7606221021341", "���� ��õ��", "02-158-7333");
		persons[5] = new PersonEntity("�̹̼�", "7502142021321", "���� ������", "02-323-1934");
		persons[6] = new PersonEntity("�ڼ���", "7402061023101", "���� ���α�", "02-308-0932");
		persons[7] = new PersonEntity("������", "7103282025101", "���� ����", "02-452-0939");
		persons[8] = new PersonEntity("Ȳ����", "7806231031101", "��õ �߱�", "032-327-2202");
		persons[9] = new PersonEntity("��ö��", "7601211025101", "��õ ��籸", "032-122-7832");
		
		return persons;
	}
	
	public static void showPerson(PersonEntity[] persons) {
		for(int i=0; i<persons.length; i++) {
			System.out.println("[�̸�] " + persons[i].getName() + "    [����] " + persons[i].getGender() + "    [��ȭ��ȣ] " + persons[i].getPhone());
			printItemLine();
		}
	}
	
	public static int findByGender(PersonEntity[] persons, char gender) {
		int count = 0;
		for(int i=0; i<persons.length; i++) {
			if(persons[i].getGender()=='��') {
				count++;
			}
		}
		
		return count;
	}
	
	public static void showPerson(PersonEntity[] persons, String name) {
		System.out.println("-- �̸� : '���ϴ�'(��)�� ã�� ����Դϴ�. --");
		for(int i=0; i<persons.length; i++) {
			if(persons[i].getName().equals(name)) {
				System.out.println("[�̸�] " + persons[i].getName());
				System.out.println("[����] " + persons[i].getGender());
				System.out.println("[��ȭ��ȣ] " + persons[i].getAddress());
				System.out.println("[�ּ�] " + persons[i].getPhone());
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
