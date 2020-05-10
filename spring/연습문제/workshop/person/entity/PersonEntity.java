package workshop.person.entity;

public class PersonEntity {
	
	private String name;
	private char gender;
	private String ssn;
	private String address;
	private String phone;
	
	
	public PersonEntity () {
		
	}
	
	public PersonEntity (String name, String ssn, String address, String phone) {
		this.name = name;
		this.ssn = ssn;
		this.address = address;
		this.phone = phone;
		
		if(ssn.charAt(6)=='1' || ssn.charAt(6)=='3') {
			this.gender = '��';
		}else {
			this.gender = '��';
		}
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	public char getGender() {
		return gender;
	}
	public void setGender(char gender) {
		this.gender = gender;
	}

	
	public String getSsn() {
		return ssn;
	}
	public void setSsn(String ssn) {
		this.ssn = ssn;
	}

	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}

	
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	
}

