package workshop.book.entity;

public class Novel extends Publication{

	private String author;
	private String genre;
	
	public Novel() {}
	
	public Novel(String title, String publishingDate, int page, int price, String author, String genre) {
		this.title = title;
		this.publishingDate = publishingDate;
		this.page = page;
		this.price = price;
		this.author = author;
		this.genre = genre;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}
	
	
}
