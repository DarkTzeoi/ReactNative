<%--
  Created by IntelliJ IDEA.
  User: Student
  Date: 8/18/2025
  Time: 2:25 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Log - in</title>
</head>
<body>
    <h1>Log in</h1>
    <form action="login" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required> <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>
        <button type="submit">Log in</button>
    </form>
</body>
</html>
