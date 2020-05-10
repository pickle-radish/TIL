 package workshop.book.entity;

public class ReferenceBook extends Publication {
	
	private String field;
	
	public ReferenceBook() {}
	
	public ReferenceBook(String title, String publishingDate, int page, int price, String field) {
		this.title = title;
		this.publishingDate = publishingDate;
		this.page = page;
		this.price = price;
		this.field = field;
	}

	public String getField() {
		return field;
	}

	public void setField(String field) {
		this.field = field;
	}
	
	

}
