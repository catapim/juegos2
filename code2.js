gdjs.Mapa0Code = {};
gdjs.Mapa0Code.GDBGSELECTORObjects1= [];
gdjs.Mapa0Code.GDBGSELECTORObjects2= [];
gdjs.Mapa0Code.GDBG0Objects1= [];
gdjs.Mapa0Code.GDBG0Objects2= [];
gdjs.Mapa0Code.GDNewObjectObjects1= [];
gdjs.Mapa0Code.GDNewObjectObjects2= [];
gdjs.Mapa0Code.GDM1Objects1= [];
gdjs.Mapa0Code.GDM1Objects2= [];
gdjs.Mapa0Code.GDM2Objects1= [];
gdjs.Mapa0Code.GDM2Objects2= [];
gdjs.Mapa0Code.GDM3Objects1= [];
gdjs.Mapa0Code.GDM3Objects2= [];
gdjs.Mapa0Code.GDTxt0Objects1= [];
gdjs.Mapa0Code.GDTxt0Objects2= [];

gdjs.Mapa0Code.conditionTrue_0 = {val:false};
gdjs.Mapa0Code.condition0IsTrue_0 = {val:false};
gdjs.Mapa0Code.condition1IsTrue_0 = {val:false};
gdjs.Mapa0Code.condition2IsTrue_0 = {val:false};
gdjs.Mapa0Code.condition3IsTrue_0 = {val:false};
gdjs.Mapa0Code.conditionTrue_1 = {val:false};
gdjs.Mapa0Code.condition0IsTrue_1 = {val:false};
gdjs.Mapa0Code.condition1IsTrue_1 = {val:false};
gdjs.Mapa0Code.condition2IsTrue_1 = {val:false};
gdjs.Mapa0Code.condition3IsTrue_1 = {val:false};


gdjs.Mapa0Code.mapOfGDgdjs_46Mapa0Code_46GDM1Objects1Objects = Hashtable.newFrom({"M1": gdjs.Mapa0Code.GDM1Objects1});gdjs.Mapa0Code.mapOfGDgdjs_46Mapa0Code_46GDM2Objects1Objects = Hashtable.newFrom({"M2": gdjs.Mapa0Code.GDM2Objects1});gdjs.Mapa0Code.mapOfGDgdjs_46Mapa0Code_46GDM3Objects1Objects = Hashtable.newFrom({"M3": gdjs.Mapa0Code.GDM3Objects1});gdjs.Mapa0Code.eventsList0xaff78 = function(runtimeScene) {

{


{
}

}


{

gdjs.Mapa0Code.GDM1Objects1.createFrom(runtimeScene.getObjects("M1"));

gdjs.Mapa0Code.condition0IsTrue_0.val = false;
gdjs.Mapa0Code.condition1IsTrue_0.val = false;
gdjs.Mapa0Code.condition2IsTrue_0.val = false;
{
gdjs.Mapa0Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa0Code.mapOfGDgdjs_46Mapa0Code_46GDM1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Mapa0Code.condition0IsTrue_0.val ) {
{
gdjs.Mapa0Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Mapa0Code.condition1IsTrue_0.val ) {
{
{gdjs.Mapa0Code.conditionTrue_1 = gdjs.Mapa0Code.condition2IsTrue_0;
gdjs.Mapa0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6742116);
}
}}
}
if (gdjs.Mapa0Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa1", true);
}}

}


{

gdjs.Mapa0Code.GDM2Objects1.createFrom(runtimeScene.getObjects("M2"));

gdjs.Mapa0Code.condition0IsTrue_0.val = false;
gdjs.Mapa0Code.condition1IsTrue_0.val = false;
gdjs.Mapa0Code.condition2IsTrue_0.val = false;
{
gdjs.Mapa0Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa0Code.mapOfGDgdjs_46Mapa0Code_46GDM2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Mapa0Code.condition0IsTrue_0.val ) {
{
gdjs.Mapa0Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Mapa0Code.condition1IsTrue_0.val ) {
{
{gdjs.Mapa0Code.conditionTrue_1 = gdjs.Mapa0Code.condition2IsTrue_0;
gdjs.Mapa0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6742916);
}
}}
}
if (gdjs.Mapa0Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa2", true);
}}

}


{

gdjs.Mapa0Code.GDM3Objects1.createFrom(runtimeScene.getObjects("M3"));

gdjs.Mapa0Code.condition0IsTrue_0.val = false;
gdjs.Mapa0Code.condition1IsTrue_0.val = false;
gdjs.Mapa0Code.condition2IsTrue_0.val = false;
{
gdjs.Mapa0Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa0Code.mapOfGDgdjs_46Mapa0Code_46GDM3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Mapa0Code.condition0IsTrue_0.val ) {
{
gdjs.Mapa0Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Mapa0Code.condition1IsTrue_0.val ) {
{
{gdjs.Mapa0Code.conditionTrue_1 = gdjs.Mapa0Code.condition2IsTrue_0;
gdjs.Mapa0Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6740844);
}
}}
}
if (gdjs.Mapa0Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa3", true);
}}

}


}; //End of gdjs.Mapa0Code.eventsList0xaff78


gdjs.Mapa0Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Mapa0Code.GDBGSELECTORObjects1.length = 0;
gdjs.Mapa0Code.GDBGSELECTORObjects2.length = 0;
gdjs.Mapa0Code.GDBG0Objects1.length = 0;
gdjs.Mapa0Code.GDBG0Objects2.length = 0;
gdjs.Mapa0Code.GDNewObjectObjects1.length = 0;
gdjs.Mapa0Code.GDNewObjectObjects2.length = 0;
gdjs.Mapa0Code.GDM1Objects1.length = 0;
gdjs.Mapa0Code.GDM1Objects2.length = 0;
gdjs.Mapa0Code.GDM2Objects1.length = 0;
gdjs.Mapa0Code.GDM2Objects2.length = 0;
gdjs.Mapa0Code.GDM3Objects1.length = 0;
gdjs.Mapa0Code.GDM3Objects2.length = 0;
gdjs.Mapa0Code.GDTxt0Objects1.length = 0;
gdjs.Mapa0Code.GDTxt0Objects2.length = 0;

gdjs.Mapa0Code.eventsList0xaff78(runtimeScene);
return;
}
gdjs['Mapa0Code'] = gdjs.Mapa0Code;
