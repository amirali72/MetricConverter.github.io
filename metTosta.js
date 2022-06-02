

function calcVal() {
    let unitVal = document.getElementById('unitVal').value;
    let selectedOpt = document.getElementById('unitOpt');
    const value = unitOpt.options[selectedOpt.selectedIndex].value;
    let resultContainer = document.getElementById('resultContainer');

    // Millimeters Conversion

    let mmToinches;
    let mmTofeet;
    let mmToyards;
    let mmTomiles;

    function mmToinch(mm) {
        let cm = (unitVal/25.4);
        return cm.toFixed(5);
    }
    function mmTofoot(mm) {
        let cm = (unitVal/305);
        return cm.toFixed(5);
    }
    function mmToyard(mm) {
        let cm = (unitVal*0.001094);
        return cm.toFixed(5);
    }
    function mmTomile(mm) {
        let cm = (unitVal*1609344);
        return cm;
    }

    if(value == "mm"){
        mmToinches = mmToinch(unitVal);
        mmTofeet = mmTofoot(unitVal);
        mmToyards = mmToyard(unitVal);
        mmTomiles = mmTomile(unitVal);

        resultContainer.innerHTML = `${unitVal}mm =>  ${mmToinches} inches <br>
                            ${unitVal}mm =>  ${mmTofeet} ft <br>
                            ${unitVal}mm =>  ${mmToyards} yds <br>
                            ${unitVal}mm =>  ${mmTomiles} miles`
    }

    // Centimeters Conversion

    let cmToinches;
    let cmTofeet;
    let cmToyards;
    let cmTomiles;

    function cmToinch(mm) {
        let cm = (unitVal/2.54);
        return cm;
    }
    function cmTofoot(mm) {
        let cm = (unitVal/30.5);
        return cm;
    }
    function cmToyard(mm) {
        let cm = (unitVal*0.01093);
        return cm;
    }
    function cmTomile(mm) {
        let cm = (unitVal*160934);
        return cm;
    }

    if(value == "cm"){
        cmToinches = cmToinch(unitVal);
        cmTofeet = cmTofoot(unitVal);
        cmToyards = cmToyard(unitVal);
        cmTomiles = cmTomile(unitVal);

        resultContainer.innerHTML = `${unitVal}cm =>  ${cmToinches} inches <br>
                            ${unitVal}cm =>  ${cmTofeet} ft <br>
                            ${unitVal}cm =>  ${cmToyards} yds <br>
                            ${unitVal}cm =>  ${cmTomiles} miles`
    }

    // Meters Conversion

    let mToinches;
    let mTofeet;
    let mToyards;
    let mTomiles;

    function mToinch(m) {
        let cm = (unitVal*39.3701);
        return cm.toFixed(3);
    }
    function mTofoot(m) {
        let cm = (unitVal*3.28084);
        return cm.toFixed(3);
    }
    function mToyard(m) {
        let cm = (unitVal*1.09);
        return cm.toFixed(3);
    }
    function mTomile(m) {
        let cm = (unitVal/1609.3);
        return cm.toFixed(3);
    }

    if(value == "m"){
        mToinches = mToinch(unitVal);
        mTofeet = mTofoot(unitVal);
        mToyards = mToyard(unitVal);
        mTomiles = mTomile(unitVal);

        resultContainer.innerHTML = `${unitVal}m =>  ${mToinches} inches <br>
                            ${unitVal}m =>  ${mTofeet} ft <br>
                            ${unitVal}m =>  ${mToyards} yds <br>
                            ${unitVal}m =>  ${mTomiles} miles`
    }

    // Kilomketers Conversion

    let kmToinches;
    let kmTofeet;
    let kmToyards;
    let kkmTomiles;

    function kmToinch(km) {
        let cm = (unitVal*39370.078);
        return cm.toFixed(3);
    }
    function kmTofoot(km) {
        let cm = (unitVal*3280.83);
        return cm.toFixed(3);
    }
    function kmToyard(km) {
        let cm = (unitVal*1093.61);
        return cm.toFixed(3);
    }
    function kmTomile(km) {
        let cm = (unitVal*0.62137);
        return cm.toFixed(3);
    }

    if(value == "km"){
        kmToinches = kmToinch(unitVal);
        kmTofeet = kmTofoot(unitVal);
        kmToyards = kmToyard(unitVal);
        kmTomiles = kmTomile(unitVal);

        resultContainer.innerHTML = `${unitVal}km =>  ${kmToinches} inches <br>
                            ${unitVal}km =>  ${kmTofeet} ft <br>
                            ${unitVal}km =>  ${kmToyards} yds <br>
                            ${unitVal}km =>  ${kmTomiles} miles`
    }



}