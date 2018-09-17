gdjs.Mapa3Code = {};
gdjs.Mapa3Code.GDTXT30Objects1= [];
gdjs.Mapa3Code.GDTXT30Objects2= [];
gdjs.Mapa3Code.GDM31Objects1= [];
gdjs.Mapa3Code.GDM31Objects2= [];
gdjs.Mapa3Code.GDM32Objects1= [];
gdjs.Mapa3Code.GDM32Objects2= [];
gdjs.Mapa3Code.GDM33Objects1= [];
gdjs.Mapa3Code.GDM33Objects2= [];
gdjs.Mapa3Code.GDbgObjects1= [];
gdjs.Mapa3Code.GDbgObjects2= [];
gdjs.Mapa3Code.GDstartObjects1= [];
gdjs.Mapa3Code.GDstartObjects2= [];

gdjs.Mapa3Code.conditionTrue_0 = {val:false};
gdjs.Mapa3Code.condition0IsTrue_0 = {val:false};
gdjs.Mapa3Code.condition1IsTrue_0 = {val:false};
gdjs.Mapa3Code.condition2IsTrue_0 = {val:false};
gdjs.Mapa3Code.condition3IsTrue_0 = {val:false};
gdjs.Mapa3Code.conditionTrue_1 = {val:false};
gdjs.Mapa3Code.condition0IsTrue_1 = {val:false};
gdjs.Mapa3Code.condition1IsTrue_1 = {val:false};
gdjs.Mapa3Code.condition2IsTrue_1 = {val:false};
gdjs.Mapa3Code.condition3IsTrue_1 = {val:false};


gdjs.Mapa3Code.mapOfGDgdjs_46Mapa3Code_46GDM31Objects1Objects = Hashtable.newFrom({"M31": gdjs.Mapa3Code.GDM31Objects1});gdjs.Mapa3Code.mapOfGDgdjs_46Mapa3Code_46GDM32Objects1Objects = Hashtable.newFrom({"M32": gdjs.Mapa3Code.GDM32Objects1});gdjs.Mapa3Code.mapOfGDgdjs_46Mapa3Code_46GDM33Objects1Objects = Hashtable.newFrom({"M33": gdjs.Mapa3Code.GDM33Objects1});gdjs.Mapa3Code.mapOfGDgdjs_46Mapa3Code_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.Mapa3Code.GDstartObjects1});gdjs.Mapa3Code.eventsList0xaff78 = function(runtimeScene) {

{

gdjs.Mapa3Code.GDM31Objects1.createFrom(runtimeScene.getObjects("M31"));

gdjs.Mapa3Code.condition0IsTrue_0.val = false;
gdjs.Mapa3Code.condition1IsTrue_0.val = false;
gdjs.Mapa3Code.condition2IsTrue_0.val = false;
{
gdjs.Mapa3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa3Code.mapOfGDgdjs_46Mapa3Code_46GDM31Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Mapa3Code.condition0IsTrue_0.val ) {
{
gdjs.Mapa3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Mapa3Code.condition1IsTrue_0.val ) {
{
{gdjs.Mapa3Code.conditionTrue_1 = gdjs.Mapa3Code.condition2IsTrue_0;
gdjs.Mapa3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6837916);
}
}}
}
if (gdjs.Mapa3Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa1", false);
}}

}


{

gdjs.Mapa3Code.GDM32Objects1.createFrom(runtimeScene.getObjects("M32"));

gdjs.Mapa3Code.condition0IsTrue_0.val = false;
gdjs.Mapa3Code.condition1IsTrue_0.val = false;
gdjs.Mapa3Code.condition2IsTrue_0.val = false;
{
gdjs.Mapa3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa3Code.mapOfGDgdjs_46Mapa3Code_46GDM32Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Mapa3Code.condition0IsTrue_0.val ) {
{
gdjs.Mapa3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Mapa3Code.condition1IsTrue_0.val ) {
{
{gdjs.Mapa3Code.conditionTrue_1 = gdjs.Mapa3Code.condition2IsTrue_0;
gdjs.Mapa3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6838668);
}
}}
}
if (gdjs.Mapa3Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa2", false);
}}

}


{

gdjs.Mapa3Code.GDM33Objects1.createFrom(runtimeScene.getObjects("M33"));

gdjs.Mapa3Code.condition0IsTrue_0.val = false;
gdjs.Mapa3Code.condition1IsTrue_0.val = false;
gdjs.Mapa3Code.condition2IsTrue_0.val = false;
{
gdjs.Mapa3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa3Code.mapOfGDgdjs_46Mapa3Code_46GDM33Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Mapa3Code.condition0IsTrue_0.val ) {
{
gdjs.Mapa3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Mapa3Code.condition1IsTrue_0.val ) {
{
{gdjs.Mapa3Code.conditionTrue_1 = gdjs.Mapa3Code.condition2IsTrue_0;
gdjs.Mapa3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6835148);
}
}}
}
if (gdjs.Mapa3Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa3", false);
}}

}


{

gdjs.Mapa3Code.GDstartObjects1.createFrom(runtimeScene.getObjects("start"));

gdjs.Mapa3Code.condition0IsTrue_0.val = false;
gdjs.Mapa3Code.condition1IsTrue_0.val = false;
gdjs.Mapa3Code.condition2IsTrue_0.val = false;
{
gdjs.Mapa3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa3Code.mapOfGDgdjs_46Mapa3Code_46GDstartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Mapa3Code.condition0IsTrue_0.val ) {
{
gdjs.Mapa3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Mapa3Code.condition1IsTrue_0.val ) {
{
{gdjs.Mapa3Code.conditionTrue_1 = gdjs.Mapa3Code.condition2IsTrue_0;
gdjs.Mapa3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6835924);
}
}}
}
if (gdjs.Mapa3Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa0", false);
}}

}


}; //End of gdjs.Mapa3Code.eventsList0xaff78


gdjs.Mapa3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Mapa3Code.GDTXT30Objects1.length = 0;
gdjs.Mapa3Code.GDTXT30Objects2.length = 0;
gdjs.Mapa3Code.GDM31Objects1.length = 0;
gdjs.Mapa3Code.GDM31Objects2.length = 0;
gdjs.Mapa3Code.GDM32Objects1.length = 0;
gdjs.Mapa3Code.GDM32Objects2.length = 0;
gdjs.Mapa3Code.GDM33Objects1.length = 0;
gdjs.Mapa3Code.GDM33Objects2.length = 0;
gdjs.Mapa3Code.GDbgObjects1.length = 0;
gdjs.Mapa3Code.GDbgObjects2.length = 0;
gdjs.Mapa3Code.GDstartObjects1.length = 0;
gdjs.Mapa3Code.GDstartObjects2.length = 0;

gdjs.Mapa3Code.eventsList0xaff78(runtimeScene);
return;
}
gdjs['Mapa3Code'] = gdjs.Mapa3Code;
