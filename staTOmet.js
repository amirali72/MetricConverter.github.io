

function calcVal() {
    let unitVal = document.getElementById('unitVal').value;
    let selectedOpt = document.getElementById('unitOpt');
    const value = unitOpt.options[selectedOpt.selectedIndex].value;
    let resultContainer = document.getElementById('resultContainer');

    // Inches Conversion

    let inchTomillimeter;
    let inchTocentimeter;
    let inchTometer;
    let inchTokilometer;

    function inchTomm(inch) {
        let cm = (unitVal*25.4);
        return cm;
    }
    function inchTocm(inch) {
        let cm = (unitVal*2.54);
        return cm;
    }
    function inchTom(inch) {
        let cm = (unitVal*0.0254);
        return cm;
    }
    function inchTokm(inch) {
        let cm = (unitVal/39370);
        return cm;
    }

    if(value == "inch"){
        inchTomillimeter = inchTomm(unitVal);
        inchTocentimeter = inchTocm(unitVal);
        inchTometer = inchTom(unitVal);
        inchTokilometer = inchTokm(unitVal);

        resultContainer.innerHTML = `${unitVal}inch =>  ${inchTomillimeter} mm <br>
                            ${unitVal}inch =>  ${inchTocentimeter} cm <br>
                            ${unitVal}inch =>  ${inchTometer} m <br>
                            ${unitVal}inch =>  ${inchTokilometer} km`
    }


    // Foot Conversion

    let footTomillimeter;
    let footTocentimeter;
    let footTometer;
    let footTokilometer;

    function footTomm(inch) {
        let cm = (unitVal*304.8);
        return cm.toFixed(4);
    }
    function footTocm(inch) {
        let cm = (unitVal*30.48);
        return cm.toFixed(4);
    }
    function footTom(inch) {
        let cm = (unitVal/3.28);
        return cm.toFixed(4);
    }
    function footTokm(inch) {
        let cm = (unitVal*0.000305);
        return cm.toFixed(4);
    }

    if(value == "ft"){
        footTomillimeter = footTomm(unitVal);
        footTocentimeter = footTocm(unitVal);
        footTometer = footTom(unitVal);
        footTokilometer = footTokm(unitVal);

        resultContainer.innerHTML = `${unitVal}foot =>  ${footTomillimeter} mm <br>
                            ${unitVal}foot =>  ${footTocentimeter} cm <br>
                            ${unitVal}foot =>  ${footTometer} m <br>
                            ${unitVal}foot =>  ${footTokilometer} km`
    }


    // Yard Conversion

    let yardTomillimeter;
    let yardTocentimeter;
    let yardTometer;
    let yardTokilometer;

    function yardTomm(yard) {
        let cm = (unitVal*914.4);
        return cm.toFixed(4);
    }
    function yardTocm(yard) {
        let cm = (unitVal*91.44);
        return cm.toFixed(4);
    }
    function yardTom(yard) {
        let cm = (unitVal*0.9144);
        return cm.toFixed(4);
    }
    function yardTokm(yard) {
        let cm = (unitVal*0.000914);
        return cm.toFixed(4);
    }

    if(value == "yd"){
        yardTomillimeter = yardTomm(unitVal);
        yardTocentimeter = yardTocm(unitVal);
        yardTometer = yardTom(unitVal);
        yardTokilometer = yardTokm(unitVal);

        resultContainer.innerHTML = `${unitVal}yd =>  ${yardTomillimeter} mm <br>
                            ${unitVal}yd =>  ${yardTocentimeter} cm <br>
                            ${unitVal}yd =>  ${yardTometer} m <br>
                            ${unitVal}yd =>  ${yardTokilometer} km`
    }

    // Miles Conversion

    let mileTomillimeter;
    let mileTocentimeter;
    let mileTometer;
    let mileTokilometer;

    function mileTomm(mile) {
        let cm = (unitVal*1609344);
        return cm.toFixed(4);
    }
    function mileTocm(mile) {
        let cm = (unitVal*160934.4);
        return cm.toFixed(4);
    }
    function mileTom(mile) {
        let cm = (unitVal*1609.344);
        return cm.toFixed(4);
    }
    function mileTokm(mile) {
        let cm = (unitVal*1.6);
        return cm.toFixed(4);
    }

    if(value == "mile"){
        mileTomillimeter = mileTomm(unitVal);
        mileTocentimeter = mileTocm(unitVal);
        mileTometer = mileTom(unitVal);
        mileTokilometer = mileTokm(unitVal);

        resultContainer.innerHTML = `${unitVal} miles =>  ${mileTomillimeter} mm <br>
                            ${unitVal} miles =>  ${mileTocentimeter} cm <br>
                            ${unitVal} miles =>  ${mileTometer} m <br>
                            ${unitVal} miles =>  ${mileTokilometer} km`
    }
}