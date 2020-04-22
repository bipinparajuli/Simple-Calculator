function fun(a) {

    if (a === "=")
        document.querySelector(".head").value = eval(document.querySelector(".head").value);
    else if (a === 'C')
        document.querySelector(".head").value = '';
    else
        document.querySelector(".head").value += a;
}