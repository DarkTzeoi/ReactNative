package com.fit.nguyenhuynhthanhson_tuan01;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.util.logging.Filter;
import java.util.logging.LogRecord;

@WebFilter("/secure/*")
public class AuthFilter implements Filter {
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;
        HttpSession session = req.getSession(false);

        boolean loggedIn = ( session != null && session.getAttribute("user") != null);

        if (loggedIn) {
            chain.doFilter(request, response);
        }else {
            res.sendRedirect(req.getContextPath() + "/login.html");
        }
    }

    @Override
    public boolean isLoggable(LogRecord record) {
        return false;
    }
}
