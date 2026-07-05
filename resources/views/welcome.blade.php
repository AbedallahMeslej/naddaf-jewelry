<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Naddaf Jewelry</title>
  @viteReactRefresh
  @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>
<body>
  <div id="root"></div>
</body>
</html>