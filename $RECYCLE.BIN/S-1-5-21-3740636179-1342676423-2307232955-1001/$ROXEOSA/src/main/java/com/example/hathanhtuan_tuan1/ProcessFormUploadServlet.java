package com.example.hathanhtuan_tuan1;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/processFormUpload")
@MultipartConfig(
        fileSizeThreshold = 1024 * 1024,
        maxFileSize = 1024 * 1024 * 10,
        maxRequestSize = 1024 * 1024 * 15
)
public class ProcessFormUploadServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");
        String name = req.getParameter("Name");
        String password = req.getParameter("Password");
        String gender = req.getParameter("Gender");
        String[] hobbies= req.getParameterValues("hob");
        String country = req.getParameter("Country");
        String birthDate = req.getParameter("Birth Date");

        resp.getWriter().println("Name: "+ name);
        resp.getWriter().println("password: "+ password);
        resp.getWriter().println("gender: "+ gender);

        resp.getWriter().println("country: "+ country);
    }
}
