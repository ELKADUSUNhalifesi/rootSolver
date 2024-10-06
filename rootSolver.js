function kök (sayı, derece, doNotPass)
{
    if (!doNotPass)
    {
        derece = prompt("First Define In Which Degree You Want To Take Roots Of Numbers! : ");

        sayı = prompt("Enter A Number You Wished To Be Rooted In Order Of " + derece + " : ")
    }
    
    var kökü, kuvveti;
    var altLimit = 0, üstLimit = sayı;

    kökü = (altLimit + üstLimit) / 2;
    var tekrar = 0;

    var sonDeğer, hassasiyet = 0.00000000000000001

    do
    {
        sonDeğer = kökü;
        tekrar++;

        kuvveti = kökü**derece;

        if (kuvveti > sayı)
            üstLimit = kökü;
        else if (kuvveti < sayı)
            altLimit = kökü;

        kökü = (altLimit + üstLimit) / 2;

        // console.log(kökü);
    }
    while (kuvveti != sayı && tekrar < 190 && sonDeğer != kökü && Math.abs(kuvveti - sayı) >= hassasiyet);

    return kökü;
}

// console.log(kök(9,2,true)); // for direct usage from console as command İnşALLAH
console.log(kök());
