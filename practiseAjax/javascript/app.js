var xhttpForScope = false;
var xhttpForLevel = false;
createXHTTPObject();
function setScopeAccordingToCompany() {
    if(xhttpForScope.readyState==0||xhttpForScope.readyState==4) {
        var selectTag = document.getElementById('company');
        var companyTag = selectTag.options[selectTag.selectedIndex].value;
        if(companyTag != 'invalid') {
            document.getElementById('showSelectedCompany').innerHTML = companyTag;
            xhttpForScope.open('GET','http://localhost:7000/companyTag?companyName='+companyTag,true);
            xhttpForScope.send();
            xhttpForScope.onreadystatechange = function() {
                var listOfScopesForCompany = ""
                if(this.readyState==4 && this.status==200) {
                    listOfScopesForCompany += "<select id='scope' name='scope' onchange='setLevelAccordingToScope();'>";
                    listOfScopesForCompany += "<option value='invalid'>--Select--</option>"
                    var response = JSON.parse(xhttpForScope.responseText);
                    var numberOfCompanies = response.length;
                    for(var index = 0;index < numberOfCompanies ; index++) {
                        listOfScopesForCompany += "<option id='"+response[index]+"'>" + response[index] + "</option>";
                    }
                    listOfScopesForCompany += "</select>"
                    document.getElementById('scopeHere').innerHTML = listOfScopesForCompany;
                }
            }
        }
    }
    else {
        setTimeout('setScopeAccordingToCompany()',1000);
    }
}

function setLevelAccordingToScope() {
    if(xhttpForLevel.readyState==0||xhttpForLevel.readyState==4) 
    {
        var selectTag = document.getElementById('scope');
        var scopeTag = selectTag.options[selectTag.selectedIndex].value;
        document.getElementById('levelHere').innerHTML = scopeTag;
        if(scopeTag!='invalid') {
            document.getElementById('showSelectedScope').innerHTML = scopeTag;
            xhttpForLevel.open('GET','http://localhost:7000/scopeTag?scope='+scopeTag,true);
            xhttpForLevel.send();
            xhttpForLevel.onreadystatechange = function() {
                var listOfLevelsForScope = "";
                if(this.readyState ==4 && this.status == 200) {
                    var response = JSON.parse(xhttpForLevel.responseText);
                    var lengthOfScopes = response.length;
                    listOfLevelsForScope += "<select id='level' name='level' onchange='displayLevel();'>" +
                        "<option value='invalid'>--Select--</option>"; 
                    for(var index = 0;index < lengthOfScopes; index++) {
                        listOfLevelsForScope += "<option id='"+response[index]+"'>"+response[index]+"</option>";
                    }
                    listOfLevelsForScope += "</select>";
                    document.getElementById('levelHere').innerHTML = listOfLevelsForScope;
                }
            }
        }
    }
    else {
        setTimeout('setLevelAccordingToScope()',1000);
    }
}

function displayLevel() {
    var levelTag = document.getElementById('level');
    var level = levelTag.options[levelTag.selectedIndex].value;
    document.getElementById('showSelectedLevel').innerHTML = level;
}

function createXHTTPObject() {
    if(window.ActiveXObject) {
        try {
            xhttpForScope = new ActiveXObject();
            xhttpForLevel = new ActiveXObject();
        }
        catch(e) {
        }
    }
    else {
        try {
            xhttpForScope = new XMLHttpRequest();
            xhttpForLevel = new XMLHttpRequest();
        }
        catch(e){
        }
    }
    if(xhttpForScope == false) {
        alert("can't create xhttpForScope object");
    }
    if(xhttpForLevel == false) {
        alert("can't create xhttpForLevel object");
    }
}