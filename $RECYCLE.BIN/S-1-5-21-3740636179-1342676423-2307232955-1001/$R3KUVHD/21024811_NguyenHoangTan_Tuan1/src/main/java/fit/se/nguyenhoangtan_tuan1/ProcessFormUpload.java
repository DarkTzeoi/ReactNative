package fit.se.nguyenhoangtan_tuan1;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "processFormUpload" ,value="/processFormUpload")
public class ProcessFormUpload extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String first_name = req.getParameter("first-name");
        String last_name = req.getParameter("last-name");

        String email = req.getParameter("email");

        String password = req.getParameter("password");

        String facebook = req.getParameter("facebook");

        String short_bio = req.getParameter("shortbio");

        System.out.println(first_name + last_name + email +password+facebook+short_bio);

        PrintWriter out = resp.getWriter();
        out.println("<html><body>");
        out.println("<h2>Thong Tin:</h2>");
        out.println("<p><strong>First name:</strong> " + first_name + "</p>");
        out.println("<p><strong>Last name:</strong> " + last_name + "</p>");
        out.println("<p><strong>Email:</strong> " + email + "</p>");
        out.println("<p><strong>Password:</strong> " + password + "</p>");
        out.println("<p><strong>Facebook:</strong> " + facebook + "</p>");
        out.println("<p><strong>Short bio:</strong> " + short_bio + "</p>");
        out.println("</body></html>");

    }
}
