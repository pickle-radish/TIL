<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    
    <jsp:include page="title.jsp"></jsp:include>
    <jsp:include page="menu.jsp"></jsp:include>
	
			<td>
			<h3>회원가입</h3>
				<form metho="post" action="main">
					<input type="hidden" name="sign" value="memberInsert">
					ID <input type="text" name="id" required><br>
					PW <input type="password" name="pw"><br>
					NAME <input type="text" name="name"><br>
					Class <input name type="text" value="볼록체인C반" disabled><br>
					<input type="submit" value="회원가입">
										
				</form>
			</td>
			
			<jsp:include page="banner.jsp"></jsp:include>
   			<jsp:include page="copyright.jsp"></jsp:include>