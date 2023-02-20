let tempconv = () => {
    const tempnum = document.getElementById("temp").value;
    // document.write(tempnum);

    const unit = document.getElementById("unitselect");
    const selected = unit.options[unit.selectedIndex].value;
    // document.write(selected);

    let ans;

    if (selected == 'celc') {
        ans = Math.round((tempnum * 9 / 5) + 32);
        if (tempnum <= 15) {
            document.getElementById("spanoutput").innerHTML = `${ans} °F 🥶`;
        }
        else if(tempnum > 15 && tempnum <= 35){
            document.getElementById("spanoutput").innerHTML = `${ans} °F 😌`;
        }
        else{
            document.getElementById("spanoutput").innerHTML = `${ans} °F 🥵`;
        }
    }
    else if (selected == 'farh') {
        ans = Math.round((tempnum - 32) * 5 / 9);
        if (ans <= 15) {
            document.getElementById("spanoutput").innerHTML = `${ans} °C 🥶`;
        }
        else if(ans > 15 && ans <= 35){
            document.getElementById("spanoutput").innerHTML = `${ans} °C 😌`;
        }
        else{
            document.getElementById("spanoutput").innerHTML = `${ans} °C 🥵`;
        }
    }
}