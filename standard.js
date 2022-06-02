

function calcVal() {
    let unitVal = document.getElementById('unitVal').value;
    let selectedOpt = document.getElementById('unitOpt');
    const value = unitOpt.options[selectedOpt.selectedIndex].value;
    let resultContainer = document.getElementById('resultContainer');

    // Inches Conversion

    let inchToft;
    let inchToyd;
    let inchTomiles;

    function inchTofoot(inch) {
        let cm = (unitVal*0.0833);
        return cm;
    }
    function inchToyard(inch) {
        let cm = (unitVal/36);
        return cm;
    }
    function inchTomile(inch) {
        let cm = (unitVal/63360);
        return cm;
    }

    if(value == "inch"){
        inchToft = inchTofoot(unitVal);
        inchToyd = inchToyard(unitVal);
        inchTomiles = inchTomile(unitVal);

        resultContainer.innerHTML = `${unitVal}inch =>  ${inchToft} ft <br>
                            ${unitVal}inch =>  ${inchToyd} yd <br>
                            ${unitVal}inch =>  ${inchTomiles} miles`
    }

    // Feet Conversion

    let feetToinch;
    let feetToyd;
    let feetTomiles;

    function footToinch(foot) {
        let cm = (unitVal*12);
        return cm;
    }
    function footToyard(foot) {
        let cm = (unitVal/3);
        return cm;
    }
    function footTomile(foot) {
        let cm = (unitVal/5280);
        return cm;
    }

    if(value == "ft"){
        feetToinch = footToinch(unitVal);
        feetToyd = footToyard(unitVal);
        feetTomiles = footTomile(unitVal);

        resultContainer.innerHTML = `${unitVal}ft =>  ${feetToinch} inch <br>
                            ${unitVal}ft =>  ${feetToyd} yd <br>
                            ${unitVal}ft =>  ${feetTomiles} miles`
    }

    // Yard Conversion

    let yardToinch;
    let yardTofeet;
    let yardTomiles;

    function ydToinch(yards) {
        let cm = (unitVal*36);
        return cm;
    }
    function ydTofeet(yards) {
        let cm = (unitVal*3);
        return cm;
    }
    function ydTomile(yards) {
        let cm = (unitVal/1760);
        return cm;
    }

    if(value == "yd"){
        yardToinch = ydToinch(unitVal);
        yardTofeet = ydTofeet(unitVal);
        yardTomiles = ydTomile(unitVal);

        resultContainer.innerHTML = `${unitVal}yds =>  ${yardToinch} inches <br>
                            ${unitVal}yds =>  ${yardTofeet} fts <br>
                            ${unitVal}yds =>  ${yardTomiles} miles`
    }
    

    // Miles Conversion

    let milesToinch;
    let milesTofeet;
    let milesToyard;

    function mileToinch(miles) {
        let cm = (unitVal*63360);
        return cm;
    }
    function mileTofeet(miles) {
        let cm = (unitVal*5280);
        return cm;
    }
    function mileToyard(miles) {
        let cm = (unitVal*1760);
        return cm;
    }

    if(value == "mile"){
        milesToinch = mileToinch(unitVal);
        milesTofeet = mileTofeet(unitVal);
        milesToyard = mileToyard(unitVal);

        resultContainer.innerHTML = `${unitVal}miles =>  ${milesToinch} inches <br>
                            ${unitVal}miles =>  ${milesTofeet} fts <br>
                            ${unitVal}miles =>  ${milesToyard} yds`
    }

}