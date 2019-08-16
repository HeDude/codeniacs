<html>
    <title>Login</title>
    <body>
        <?php
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
            echo "je hebt me gehackt";

        }
        else
        {
            echo "incorrect login";
        }
        ?>

        <form name="input" action="login.php" method="get">
            <input type="submit" value="Home">
        </form>
    </body>
</html>
