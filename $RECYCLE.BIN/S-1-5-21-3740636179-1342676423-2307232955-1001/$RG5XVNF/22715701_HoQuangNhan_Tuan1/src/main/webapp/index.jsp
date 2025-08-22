<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Form Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f6f9;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }

        .form-container {
            background: #fff;
            padding: 25px 30px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            width: 400px;
        }

        .form-container h1 {
            text-align: center;
            color: #333;
            margin-bottom: 15px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            font-weight: bold;
            display: block;
            margin-bottom: 6px;
            color: #444;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-sizing: border-box;
            transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            border-color: #007bff;
            outline: none;
        }

        .form-group textarea {
            resize: none;
        }

        .btn-submit {
            width: 100%;
            padding: 12px;
            background: #007bff;
            color: white;
            font-size: 16px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .btn-submit:hover {
            background: #0056b3;
        }

        .link-container {
            text-align: center;
            margin-bottom: 15px;
        }

        .link-container a {
            color: #007bff;
            text-decoration: none;
        }

        .link-container a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
<div class="form-container" id="mainForm">
    <h1 id="formTitle">Form Demo</h1>

    <div class="link-container">
        <a href="hello-servlet" id="helloLink">Hello Servlet</a>
    </div>

    <form action="data-servlet" method="get" id="userForm">
        <div class="form-group">
            <label for="firstName">Name</label>
            <input type="text" id="firstName" name="firstName" placeholder="First name"/>
            <input type="text" id="lastName" name="lastName" placeholder="Last name" style="margin-top:8px;"/>
        </div>

        <div class="form-group">
            <label for="userName">Username</label>
            <input type="text" id="userName" name="userName" placeholder=""/>
        </div>

        <div class="form-group">
            <label for="email">E-mail</label>
            <input type="text" id="email" name="email" placeholder=""/>
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="text" id="password" name="password" placeholder=""/>
        </div>

        <div class="form-group">
            <label for="facebook">Facebook</label>
            <input type="url" id="facebook" name="facebook" placeholder=""/>
        </div>

        <div class="form-group">
            <label for="note">Short Bio</label>
            <textarea id="note" name="note" rows="4" cols="40" placeholder="Nhập ghi chú tại đây..."></textarea>
        </div>

        <input type="submit" class="btn-submit" id="submitBtn" value="Submit"/>
    </form>
</div>
</body>
</html>
