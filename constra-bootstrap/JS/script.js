var tabButtons= document.querySelectorAll(".tabcontainer .buttoncontainer button")
var tabpanels= document.querySelectorAll(".tabcontainer .tabpanel")
function showpanel(panelIndex, colorCode){
    tabButtons.forEach(function(node){
        node.style.backgroundColor = "";
        node.style.color = "";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabpanels.forEach(function(node){
        node.style.display = "none";
    });
    tabpanels[panelIndex].style.display = "block";
    tabpanels[panelIndex].style.backgroundColor = colorCode;
}
showpanel(0,'#f44336')