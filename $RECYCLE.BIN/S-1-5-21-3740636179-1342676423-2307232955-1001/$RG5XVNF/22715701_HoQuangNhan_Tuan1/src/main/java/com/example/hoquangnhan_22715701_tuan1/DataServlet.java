package com.example.hoquangnhan_22715701_tuan1;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "dataServlet", value = "/data-servlet")
public class DataServlet extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String userName = request.getParameter("userName");
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        String facebook = request.getParameter("facebook");
        String url = request.getParameter("url");
        String bio = request.getParameter("note");

        // Xuất ra trang web
        out.println("<html><body>");
        out.println("<h2>Dữ liệu từ form:</h2>");
        out.println("Name: " + firstName +" "+ lastName + "<br/>");

        out.println("Username: " + userName + "<br/>");
        out.println("Email: " + email + "<br/>");
        out.println("Password: " + password + "<br/>");
        out.println("Facebook: " + facebook + "<br/>");
        out.println("Note: " + bio + "<br/>");
        out.println("</body></html>");


    }
}
