<%--
  Created by IntelliJ IDEA.
  User: Student
  Date: 8/18/2025
  Time: 8:00 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Form-data</title>
</head>
<body>
<h1>Register</h1>
<form action="processFormUpload" method="get" enctype="multipart/form-data">
    <div class="form-input">
        <label for="first-name">Name</label>
        <input type="text" id="first-name" name="first-name" required>
        <input type="text" id="last-name" name="last-name" required>
    </div>

    <div class="form-input">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required>
    </div>
    <div class="form-input">
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" required>
    </div>

    <div class="form-input">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>
    </div>
    <div class="form-input">
        <label for="facebook">Facebook</label>
        <input type="text" id="facebook" name="facebook" required>
    </div>
    <div class="form-input">

        <label for="shortbio">Short-bio</label>
        <textarea id="shortbio" name="shortbio">

        </textarea>

    </div>



    <button type="submit">Submit</button>

</form>
</body>
</html>
