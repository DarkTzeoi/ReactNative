package fit.se.nguyenhoangtan_tuan1;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

@WebFilter("/secure/*")
public class AuthFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest req= (HttpServletRequest) servletRequest;
        HttpServletResponse res = (HttpServletResponse) servletResponse;
        HttpSession session = ((HttpServletRequest) servletRequest).getSession(false);

        boolean loggedIn = (session != null && session.getAttribute("user") !=null);
        if(loggedIn){
            filterChain.doFilter(servletRequest, servletResponse);
        }
        else {
            ((HttpServletResponse) servletResponse).sendRedirect(req.getContextPath()+"/login.jsp");
        }



    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }
}
