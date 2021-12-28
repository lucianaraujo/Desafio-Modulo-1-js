function solucao(min, km) {
    const primeiros20Min = 1000;
    const primeiros10Km = 700;

    if (min <= 20 && km <= 10) {
        console.log(70 * km + 50 * min);
    } else if (min <= 20 && km > 10) {
        console.log(Math.floor(primeiros10Km + (km - 10) * 50 + 50 * min));
    } else if (min > 20 && km <= 10) {
        console.log(Math.floor(70 * km + (primeiros20Min + (min - 20) * 30)));
    } else {
        console.log((primeiros20Min + (min - 20) * 30) + (primeiros10Km + (km - 10) * 50))
    }
}