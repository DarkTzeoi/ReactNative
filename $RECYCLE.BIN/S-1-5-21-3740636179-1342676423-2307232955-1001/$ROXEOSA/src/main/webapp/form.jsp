<%--
  Created by IntelliJ IDEA.
  User: Student
  Date: 8/21/2025
  Time: 10:45 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h2>HTML Form Example</h2>
<form action="${pageContext.request.contextPath}/processFormUpload" method="get" enctype="multipart/form-data">
    <label>Name:</label> <input type="text" name="Name">
    <br><br>
    <label>Password:</label> <input type="text" name="Password">
    <br><br>
    <label>Gender:</label> <input type="radio" name="Gender" value="male"> Male <input type="radio" name="gender" value="female"> Female
    <br><br>
    <label>Hobbies: </label>Reading <input type="checkbox" name="hob" value="Reading">Sport <input type="checkbox" name="hob" value="Sport">Music <input type="checkbox" name="hob" value="Music">
    <br><br>
    Country <select name="Country" id="">
    <option value="Vietnam">Vietnam</option></select>
    <br><br>
    Birth Date: <input type="date" name="Birth Date">
    <br><br>
    Profile Picture: <input type="file" name="file" >

    <br><br>
    <button>Submit</button>
</form>
</body>
</html>
