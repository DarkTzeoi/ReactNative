package com.example.hoquangnhan_22715701_tuan1;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

@WebServlet("/logout")
public class LogoutServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        super.doGet(req, resp);
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate(); // Hủy phiên làm việc
        }
        response.sendRedirect(request.getContextPath() + "/login.jsp");
    }
}
