package controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MainServlet extends HttpServlet {
//	private static final long serialVersionUID = 1L;

	protected void process (HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		request.setCharacterEncoding("utf-8");
		String sign = request.getParameter("sign");
		
		if(sign.equals("memberInsert")){  //회원가입 처리
			String name = request.getParameter("name");
			String ssn1 = request.getParameter("ssn1");
			String ssn2 = request.getParameter("ssn2");
			String country = request.getParameter("country");
			String license = request.getParameter("license");
			String sex = request.getParameter("sex");
			String year = request.getParameter("year");
			String mday = request.getParameter("mday");
			String mtime = request.getParameter("mtime");
			
			System.out.println(name+":"+ssn1+"-"+ssn2);
			System.out.println(country);
			System.out.println(license);
			System.out.println(sex);
			System.out.println(year+"year");
			System.out.println(mday);
			System.out.println(mtime);
			
			response.setContentType("text/html;charset=utf-8");
			
			PrintWriter buffer = response.getWriter();
			buffer.append(name+"님 가입되셨습니다.");
		}
	}

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		process(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		process(request, response);
	}

}
