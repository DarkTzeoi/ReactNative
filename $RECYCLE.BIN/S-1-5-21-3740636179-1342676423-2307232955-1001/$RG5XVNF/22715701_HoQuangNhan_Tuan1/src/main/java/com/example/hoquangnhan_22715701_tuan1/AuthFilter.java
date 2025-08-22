package com.example.hoquangnhan_22715701_tuan1;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

@WebServlet("/secure/*")
public class AuthFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request1 = (HttpServletRequest) request;
        HttpServletResponse response1 = (HttpServletResponse) response;
        HttpSession session = request1.getSession(false);

        boolean loggedIn = (session != null && session.getAttribute("userName") != null);
        if(loggedIn){
            filterChain.doFilter(request, response); // Tiếp tục chuỗi lọc
        } else {
            // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
            response1.sendRedirect(request1.getContextPath() + "/login.jsp");
        }
    }
}
