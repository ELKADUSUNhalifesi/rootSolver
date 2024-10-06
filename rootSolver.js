function karekök (sayı)
{
    var N = prompt("First Define In Which Degree You Want To Take Roots Of Numbers! : ");

    sayı = prompt("Enter A Number You Wished To Be Rooted In Order Of " + N + " : ")

    var kökü, kuvveti;
    var altLimit = 0, üstLimit = sayı;

    kökü = (altLimit + üstLimit) / 2;
    var tekrar = 0;

    var sonDeğer, hassasiyet = 0.000001
    do
    {
        sonDeğer = kökü;
        tekrar++;

        kuvveti = kökü**N;

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

console.log(karekök(9));
