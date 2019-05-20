#!/usr/bin/env bash

cat <<- EOF > index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>SpikePy</title>
    <meta charset="UTF-8">
    <link rel="icon" href="favicon.svg">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Table of Contents</h1>
    <ul>
$(for index in */index.html; do echo -e "\t\t<li><a href=\"$index\">${index%%/*}</a></li>"; done)
    </ul>
</body>
</html>

EOF
