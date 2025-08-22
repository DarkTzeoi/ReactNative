package com.fit.trannguyenminhkhoi_tuan01;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    public LoginServlet() {}

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        if("admin".equals(username) && "123456".equals(password)) {
            HttpSession session = request.getSession();
            session.getAttribute(username);
            response.sendRedirect(request.getContextPath() + "/home.html");
        }else {
            request.setAttribute("error", "Sai!!!!");
            request.getRequestDispatcher("/login.html").forward(request, response);
        }
    }
}
