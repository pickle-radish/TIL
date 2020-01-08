package controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MainServlet extends HttpServlet {
	//private static final long serialVersionUID = 1L;

	protected void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//요청분석(라우팅)
		request.setCharacterEncoding("utf-8");
		String sign = request.getParameter("sign");
		
		if(sign.equals("memberInsert")){ //회원가입처리
			String id = request.getParameter("id");
			String pw = request.getParameter("pw");
			String name = request.getParameter("name");
			
			//비즈니스... 데이터베이스
			
			//view 지정
			RequestDispatcher disp = request.getRequestDispatcher("memberInsert_result.jsp");
			request.setAttribute("name", name);
			disp.forward(request, response);
		}
		
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		process(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		process(request, response);
	}

}
