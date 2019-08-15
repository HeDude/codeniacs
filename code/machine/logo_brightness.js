var halt = true;
var PC = "adres00";
var brightness = 0;
var pauze = 2000;

function runProgram()
{
    brightness = 0;
    halt = !halt;

    var inst = document.getElementById( "instructions" );
    if ( !halt )
    {
        inst.innerHTML = "Programma draait!";
    }
    else
    {
        inst.innerHTML = "Programma is gestopt!";
    }

    logo = document.getElementById( "logo" );

    if ( halt )
    {
        logo.src = "images/codeniacs_logo_brightness_70.gif";
    }
    else
    {
        logo.src = "images/codeniacs_logo_brightness_00.gif";
        PC = "adres00";
        brightness = 0;
        machineCycle();
    }
}

function incrementPC()
{
    if      ( PC == "adres00" ) PC = "adres01" ;
    else if ( PC == "adres01" ) PC = "adres02" ;
    else if ( PC == "adres02" ) PC = "adres03" ;
    else if ( PC == "adres03" ) PC = "adres04" ;
    else if ( PC == "adres04" ) PC = "adres05" ;
    else if ( PC == "adres05" ) PC = "adres06" ;
    else if ( PC == "adres06" ) PC = "adres07" ;
    else if ( PC == "adres07" ) PC = "adres08" ;
    else if ( PC == "adres08" ) PC = "adres09" ;
    else if ( PC == "adres09" ) PC = "adres10" ;
    else if ( PC == "adres10" ) PC = "adres11" ;
    else if ( PC == "adres11" ) PC = "adres12" ;
    else if ( PC == "adres12" ) PC = "adres00" ;
}

function machineCycle()
{
    logo = document.getElementById( "logo" );

    if ( !halt )
    {
        var inst = document.getElementById("instructions");
        inst.innerHTML = "Uitvoeren van geheugen " + PC;
        opcode = document.getElementById( PC ).value.trim();

        incrementPC();

        if ( opcode == "00000000" )
        {
            halt = true;
            inst.innerHTML += "<br>Programma is gestopt!";
        }
        else if ( opcode == "00000001" )
        {
            brightness = 70;
            inst.innerHTML += "<br>Logo op volle helderheid";
        }
        else if ( opcode == "00000010" )
        {
            brightness = 0;
            inst.innerHTML += "<br>Logo zo donker mogelijk";
        }
        else if ( opcode == "00000100" )
        {
            if ( brightness > 0 ) brightness -= 10;
            inst.innerHTML += "<br>Verminder helderheid";
        }
        else if ( opcode == "00001000" )
        {
            if ( brightness < 70 ) brightness += 10;
            inst.innerHTML += "<br>Verhoog helderheid";
        }
        else if ( opcode == "00010000" )
        {
            if ( brightness == 70 )
            {
                incrementPC();
                inst.innerHTML += "<br>Sla volgende instructie over";
            }
            else
            {
                inst.innerHTML += "<br>Sla volgende<br>instructie niet over";
            }
        }
        else if ( opcode == "00100000" )
        {
            if ( brightness == 00 )
            {
                incrementPC();
                inst.innerHTML += "<br>Sla volgende instructie over";
            }
            else
            {
                inst.innerHTML += "<br>Sla volgende<br>instructie niet over";
            }
        }
        else if ( opcode == "01000000" )
        {
            PC = "adres00";
            inst.innerHTML += "<br>Herhaal";
        }
        else
        {
            alert("Logo brightness controller is gecrashed.");
            return;
        }

        if      ( brightness ==   0 ) { logo.src = "images/codeniacs_logo_brightness_00.gif";  }
        else if ( brightness ==  10 ) { logo.src = "images/codeniacs_logo_brightness_10.gif";  }
        else if ( brightness ==  20 ) { logo.src = "images/codeniacs_logo_brightness_20.gif";  }
        else if ( brightness ==  30 ) { logo.src = "images/codeniacs_logo_brightness_30.gif";  }
        else if ( brightness ==  40 ) { logo.src = "images/codeniacs_logo_brightness_40.gif";  }
        else if ( brightness ==  50 ) { logo.src = "images/codeniacs_logo_brightness_50.gif";  }
        else if ( brightness ==  60 ) { logo.src = "images/codeniacs_logo_brightness_60.gif";  }
        else if ( brightness >   60 ) { logo.src = "images/codeniacs_logo_brightness_70.gif";  }
        else                          { logo.src = "images/codeniacs_logo_brightness_00.gif";  }

        if ( !halt )
        {
            setTimeout( machineCycle, pauze );
        }
        else
        {
            inst.innerHTML = "Programma is gestopt!";
        }
    }
}
