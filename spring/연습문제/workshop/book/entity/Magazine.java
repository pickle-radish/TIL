package workshop.book.entity;

public class Magazine extends Publication {
	
	private String publishingPeriod;
	
	public Magazine() {}
	
	public Magazine(String title, String publishingDate, int page, int price, String publishingPeriod) {
		this.title = title;
		this.publishingDate = publishingDate;
		this.page = page;
		this.price = price;
		this.publishingPeriod = publishingPeriod;
		
	}

	public String getPublishingPeriod() {
		return publishingPeriod;
	}

	public void setPublishingPeriod(String publishingPeriod) {
		this.publishingPeriod = publishingPeriod;
	}
	
	

}
