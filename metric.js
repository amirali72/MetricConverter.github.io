
function calcVal() {
    let unitVal = document.getElementById('unitVal').value;
    let selectedOpt = document.getElementById('unitOpt');
    const value = unitOpt.options[selectedOpt.selectedIndex].value;
    let resultContainer = document.getElementById('resultContainer');

    // Millimeters Conversion

    let mmTocm;
    let mmTom;
    let mmTokm;

    function mmTocentimeter(mm) {
        let cm = (unitVal/10);
        return cm;
    }
    function mmTometer(mm) {
        let cm = (unitVal/1000);
        return cm;
    }
    function mmTokilometer(mm) {
        let cm = (unitVal/1000000);
        return cm;
    }

    if(value == "mm"){
        mmTocm = mmTocentimeter(unitVal);
        mmTom = mmTometer(unitVal);
        mmTokm = mmTokilometer(unitVal);

        resultContainer.innerHTML = `${unitVal}mm =>  ${mmTocm} cm <br>
                            ${unitVal}mm =>  ${mmTom} mtr <br>
                            ${unitVal}mm =>  ${mmTokm} km`
    }

    // Centimeter Conversions

    let cmTomm;
    let cmTom;
    let cmTokm;

    function cmTomillimeter(mm) {
        let cm = (unitVal*10);
        return cm;
    }
    function cmTometer(mm) {
        let cm = (unitVal/100);
        return cm;
    }
    function cmTokilometer(mm) {
        let cm = (unitVal/100000);
        return cm;
    }

    if(value == "cm"){
        cmTomm = cmTomillimeter(unitVal);
        cmTom = cmTometer(unitVal);
        cmTokm = cmTokilometer(unitVal);

        resultContainer.innerHTML = `${unitVal}cm =>  ${cmTomm} mm <br>
                            ${unitVal}cm =>  ${cmTom} mtr <br>
                            ${unitVal}cm =>  ${cmTokm} km`
    }


    // Meter Conversions

    let mTomm;
    let mTocm;
    let mTokm;

    function mTomillimeter(m) {
        let cm = (unitVal*1000);
        return cm;
    }
    function mTocentimeter(m) {
        let cm = (unitVal*100);
        return cm;
    }
    function mTokilometer(m) {
        let cm = (unitVal/1000);
        return cm;
    }

    if(value == "m"){
        mTomm = mTomillimeter(unitVal);
        mTocm = mTocentimeter(unitVal);
        mTokm = mTokilometer(unitVal);

        resultContainer.innerHTML = `${unitVal}m =>  ${mTomm} mm <br>
                            ${unitVal}m =>  ${mTocm} cm <br>
                            ${unitVal}m =>  ${mTokm} km`
    }

    // Kilometer Conversions

    let kmTomm;
    let kmTocm;
    let kmTom;

    function kmTomillimeter(km) {
        let cm = (unitVal*1000000);
        return cm;
    }
    function kmTocentimeter(km) {
        let cm = (unitVal*100000);
        return cm;
    }
    function kmTometer(km) {
        let cm = (unitVal*1000);
        return cm;
    }

    if(value == "km"){
        kmTomm = kmTomillimeter(unitVal);
        kmTocm = kmTocentimeter(unitVal);
        kmTom = kmTometer(unitVal);

        resultContainer.innerHTML = `${unitVal}km =>  ${kmTomm} mm <br>
                            ${unitVal}km =>  ${kmTocm} cm <br>
                            ${unitVal}km =>  ${kmTom} m`
    }
}