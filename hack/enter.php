<?php
if
(
    $_GET[ 'page' ] == "https://www.codeniacs.nl/hack/mypage.php"
)
{
    $passwords = file_get_contents( 'passwords.txt' );
    echo $passwords;
    exit(1);
}
else
{
    echo "<html>" . PHP_EOL;
    echo "    <title>Enter</title>" . PHP_EOL;
    echo "<body>" . PHP_EOL;

    $lines = file( "passwords.txt", FILE_SKIP_EMPTY_LINES | FILE_IGNORE_NEW_LINES );
    $passwords = [];

    for( $i = 0; $i < count( $lines ) - 1; $i++ )
    {
        $passwords[ $lines[ $i ] ] = $lines[ $i + 1 ];
    }

    $username = htmlspecialchars( $_GET['username'] );
    if
    (
        array_key_exists( $username, $passwords )
        &&
        $passwords[ $username ] == $_GET['password']
    )
    {
        echo "Je hebt me gehackt!";

    }
    else
    {
        echo "incorrect login";
    }
    echo '    <form name="input" action="login.php" method="get">' . PHP_EOL;
    echo '        <input type="submit" value="Home">' . PHP_EOL;
    echo '    </form>' . PHP_EOL;
    echo '</body>' . PHP_EOL;
    echo '</html>' . PHP_EOL;
}
