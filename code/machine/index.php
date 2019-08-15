
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="author" content="Codeniacs">
    <meta name="robots" content="index,follow">
    <title>Codeniacs - Machine code</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Een voorbeeld van machinetaal</h1>

    <div class="container">
        <div class="row">
            <div class="col-sm">
                <table>
                    <tr><th>Instructie</th><th>Taak</th></tr>
                    <tr><td style="text-align:right">00000000</td><td>Stop Programma</td></tr>
                    <tr><td style="text-align:right">00000001</td><td>Codeniacs Logo Licht</td></tr>
                    <tr><td style="text-align:right">00000010</td><td>Codeniacs Logo Donker</td></tr>
                    <tr><td style="text-align:right">00000100</td><td>Donkerer</td></tr>
                    <tr><td style="text-align:right">00001000</td><td>Lichter</td></tr>
                    <tr><td style="text-align:right">00010000</td><td>Als Codeniacs is donker, dan sla volgende instructie over.</td></tr>
                    <tr><td style="text-align:right">00100000</td><td>Als Codeniacs is licht, dan sla volgende instructie over</td></tr>
                    <tr><td style="text-align:right">01000000</td><td>Ga naar het begin van het programma (adres 0)</td></tr>
                </table>
            </div>
            <div class="col-sm">
                <form>
                    <table>
                        <tr><th>Geheugen</th><th>Instructie</th></tr>
                        <tr><td>adres00</td><td><input id="adres00" type="text" size="20" value="00000001"></td></tr>
                        <tr><td>adres01</td><td><input id="adres01" type="text" size="20" value="00000010"></td></tr>
                        <tr><td>adres02</td><td><input id="adres02" type="text" size="20" value="00000001"></td></tr>
                        <tr><td>adres03</td><td><input id="adres03" type="text" size="20" value="00000010"></td></tr>
                        <tr><td>adres04</td><td><input id="adres04" type="text" size="20" value="00000001"></td></tr>
                        <tr><td>adres05</td><td><input id="adres05" type="text" size="20" value="00000100"></td></tr>
                        <tr><td>adres06</td><td><input id="adres06" type="text" size="20" value="00000100"></td></tr>
                        <tr><td>adres07</td><td><input id="adres07" type="text" size="20" value="00000100"></td></tr>
                        <tr><td>adres08</td><td><input id="adres08" type="text" size="20" value="00000100"></td></tr>
                        <tr><td>adres09</td><td><input id="adres09" type="text" size="20" value="00000000"></td></tr>
                        <tr><td>adres10</td><td><input id="adres10" type="text" size="20" value="00000000"></td></tr>
                        <tr><td>adres11</td><td><input id="adres11" type="text" size="20" value="00000000"></td></tr>
                        <tr><td>adres12</td><td><input id="adres12" type="text" size="20" value="00000000"></td></tr>
                    </table>
                </form>
            </div>
            <div class="col-sm">
                <table style="width:230;" >
                    <tr>
                        <td><img id="logo" width="217" height="220" src="images/codeniacs_logo_brightness_00.gif" class="rightimage" alt="light bulb off" onclick="runProgram()"></td>
                    </tr>

                    <tr>
                        <td><p id="instructions">Klik op het logo<br/>om het programma<br/>te starten of te stoppen.</p></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="logo_brightness.js"></script>

</body>
</html>
