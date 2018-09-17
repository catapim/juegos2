gdjs.Mapa2Code = {};
gdjs.Mapa2Code.GDTXT20Objects1= [];
gdjs.Mapa2Code.GDTXT20Objects2= [];
gdjs.Mapa2Code.GDM21Objects1= [];
gdjs.Mapa2Code.GDM21Objects2= [];
gdjs.Mapa2Code.GDM22Objects1= [];
gdjs.Mapa2Code.GDM22Objects2= [];
gdjs.Mapa2Code.GDM23Objects1= [];
gdjs.Mapa2Code.GDM23Objects2= [];
gdjs.Mapa2Code.GDbgObjects1= [];
gdjs.Mapa2Code.GDbgObjects2= [];
gdjs.Mapa2Code.GDstartObjects1= [];
gdjs.Mapa2Code.GDstartObjects2= [];

gdjs.Mapa2Code.conditionTrue_0 = {val:false};
gdjs.Mapa2Code.condition0IsTrue_0 = {val:false};
gdjs.Mapa2Code.condition1IsTrue_0 = {val:false};
gdjs.Mapa2Code.condition2IsTrue_0 = {val:false};
gdjs.Mapa2Code.condition3IsTrue_0 = {val:false};
gdjs.Mapa2Code.conditionTrue_1 = {val:false};
gdjs.Mapa2Code.condition0IsTrue_1 = {val:false};
gdjs.Mapa2Code.condition1IsTrue_1 = {val:false};
gdjs.Mapa2Code.condition2IsTrue_1 = {val:false};
gdjs.Mapa2Code.condition3IsTrue_1 = {val:false};


gdjs.Mapa2Code.mapOfGDgdjs_46Mapa2Code_46GDM21Objects1Objects = Hashtable.newFrom({"M21": gdjs.Mapa2Code.GDM21Objects1});gdjs.Mapa2Code.mapOfGDgdjs_46Mapa2Code_46GDM22Objects1Objects = Hashtable.newFrom({"M22": gdjs.Mapa2Code.GDM22Objects1});gdjs.Mapa2Code.mapOfGDgdjs_46Mapa2Code_46GDM23Objects1Objects = Hashtable.newFrom({"M23": gdjs.Mapa2Code.GDM23Objects1});gdjs.Mapa2Code.mapOfGDgdjs_46Mapa2Code_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.Mapa2Code.GDstartObjects1});gdjs.Mapa2Code.eventsList0xaff78 = function(runtimeScene) {

{

gdjs.Mapa2Code.GDM21Objects1.createFrom(runtimeScene.getObjects("M21"));

gdjs.Mapa2Code.condition0IsTrue_0.val = false;
gdjs.Mapa2Code.condition1IsTrue_0.val = false;
gdjs.Mapa2Code.condition2IsTrue_0.val = false;
{
gdjs.Mapa2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa2Code.mapOfGDgdjs_46Mapa2Code_46GDM21Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Mapa2Code.condition0IsTrue_0.val ) {
{
gdjs.Mapa2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Mapa2Code.condition1IsTrue_0.val ) {
{
{gdjs.Mapa2Code.conditionTrue_1 = gdjs.Mapa2Code.condition2IsTrue_0;
gdjs.Mapa2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6740948);
}
}}
}
if (gdjs.Mapa2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa1", false);
}}

}


{

gdjs.Mapa2Code.GDM22Objects1.createFrom(runtimeScene.getObjects("M22"));

gdjs.Mapa2Code.condition0IsTrue_0.val = false;
gdjs.Mapa2Code.condition1IsTrue_0.val = false;
gdjs.Mapa2Code.condition2IsTrue_0.val = false;
{
gdjs.Mapa2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa2Code.mapOfGDgdjs_46Mapa2Code_46GDM22Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Mapa2Code.condition0IsTrue_0.val ) {
{
gdjs.Mapa2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Mapa2Code.condition1IsTrue_0.val ) {
{
{gdjs.Mapa2Code.conditionTrue_1 = gdjs.Mapa2Code.condition2IsTrue_0;
gdjs.Mapa2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6741700);
}
}}
}
if (gdjs.Mapa2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa2", false);
}}

}


{

gdjs.Mapa2Code.GDM23Objects1.createFrom(runtimeScene.getObjects("M23"));

gdjs.Mapa2Code.condition0IsTrue_0.val = false;
gdjs.Mapa2Code.condition1IsTrue_0.val = false;
gdjs.Mapa2Code.condition2IsTrue_0.val = false;
{
gdjs.Mapa2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa2Code.mapOfGDgdjs_46Mapa2Code_46GDM23Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Mapa2Code.condition0IsTrue_0.val ) {
{
gdjs.Mapa2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Mapa2Code.condition1IsTrue_0.val ) {
{
{gdjs.Mapa2Code.conditionTrue_1 = gdjs.Mapa2Code.condition2IsTrue_0;
gdjs.Mapa2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6742540);
}
}}
}
if (gdjs.Mapa2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa3", false);
}}

}


{

gdjs.Mapa2Code.GDstartObjects1.createFrom(runtimeScene.getObjects("start"));

gdjs.Mapa2Code.condition0IsTrue_0.val = false;
gdjs.Mapa2Code.condition1IsTrue_0.val = false;
gdjs.Mapa2Code.condition2IsTrue_0.val = false;
{
gdjs.Mapa2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa2Code.mapOfGDgdjs_46Mapa2Code_46GDstartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Mapa2Code.condition0IsTrue_0.val ) {
{
gdjs.Mapa2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Mapa2Code.condition1IsTrue_0.val ) {
{
{gdjs.Mapa2Code.conditionTrue_1 = gdjs.Mapa2Code.condition2IsTrue_0;
gdjs.Mapa2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6743372);
}
}}
}
if (gdjs.Mapa2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa0", false);
}}

}


}; //End of gdjs.Mapa2Code.eventsList0xaff78


gdjs.Mapa2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Mapa2Code.GDTXT20Objects1.length = 0;
gdjs.Mapa2Code.GDTXT20Objects2.length = 0;
gdjs.Mapa2Code.GDM21Objects1.length = 0;
gdjs.Mapa2Code.GDM21Objects2.length = 0;
gdjs.Mapa2Code.GDM22Objects1.length = 0;
gdjs.Mapa2Code.GDM22Objects2.length = 0;
gdjs.Mapa2Code.GDM23Objects1.length = 0;
gdjs.Mapa2Code.GDM23Objects2.length = 0;
gdjs.Mapa2Code.GDbgObjects1.length = 0;
gdjs.Mapa2Code.GDbgObjects2.length = 0;
gdjs.Mapa2Code.GDstartObjects1.length = 0;
gdjs.Mapa2Code.GDstartObjects2.length = 0;

gdjs.Mapa2Code.eventsList0xaff78(runtimeScene);
return;
}
gdjs['Mapa2Code'] = gdjs.Mapa2Code;
