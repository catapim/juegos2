gdjs.Mapa1Code = {};
gdjs.Mapa1Code.GDTXT11Objects1= [];
gdjs.Mapa1Code.GDTXT11Objects2= [];
gdjs.Mapa1Code.GDM11Objects1= [];
gdjs.Mapa1Code.GDM11Objects2= [];
gdjs.Mapa1Code.GDM12Objects1= [];
gdjs.Mapa1Code.GDM12Objects2= [];
gdjs.Mapa1Code.GDM13Objects1= [];
gdjs.Mapa1Code.GDM13Objects2= [];
gdjs.Mapa1Code.GDBGObjects1= [];
gdjs.Mapa1Code.GDBGObjects2= [];
gdjs.Mapa1Code.GDstartObjects1= [];
gdjs.Mapa1Code.GDstartObjects2= [];

gdjs.Mapa1Code.conditionTrue_0 = {val:false};
gdjs.Mapa1Code.condition0IsTrue_0 = {val:false};
gdjs.Mapa1Code.condition1IsTrue_0 = {val:false};
gdjs.Mapa1Code.condition2IsTrue_0 = {val:false};
gdjs.Mapa1Code.condition3IsTrue_0 = {val:false};
gdjs.Mapa1Code.conditionTrue_1 = {val:false};
gdjs.Mapa1Code.condition0IsTrue_1 = {val:false};
gdjs.Mapa1Code.condition1IsTrue_1 = {val:false};
gdjs.Mapa1Code.condition2IsTrue_1 = {val:false};
gdjs.Mapa1Code.condition3IsTrue_1 = {val:false};


gdjs.Mapa1Code.mapOfGDgdjs_46Mapa1Code_46GDM11Objects1Objects = Hashtable.newFrom({"M11": gdjs.Mapa1Code.GDM11Objects1});gdjs.Mapa1Code.mapOfGDgdjs_46Mapa1Code_46GDM12Objects1Objects = Hashtable.newFrom({"M12": gdjs.Mapa1Code.GDM12Objects1});gdjs.Mapa1Code.mapOfGDgdjs_46Mapa1Code_46GDM13Objects1Objects = Hashtable.newFrom({"M13": gdjs.Mapa1Code.GDM13Objects1});gdjs.Mapa1Code.mapOfGDgdjs_46Mapa1Code_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.Mapa1Code.GDstartObjects1});gdjs.Mapa1Code.eventsList0xaff78 = function(runtimeScene) {

{

gdjs.Mapa1Code.GDM11Objects1.createFrom(runtimeScene.getObjects("M11"));

gdjs.Mapa1Code.condition0IsTrue_0.val = false;
gdjs.Mapa1Code.condition1IsTrue_0.val = false;
gdjs.Mapa1Code.condition2IsTrue_0.val = false;
{
gdjs.Mapa1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa1Code.mapOfGDgdjs_46Mapa1Code_46GDM11Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Mapa1Code.condition0IsTrue_0.val ) {
{
gdjs.Mapa1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Mapa1Code.condition1IsTrue_0.val ) {
{
{gdjs.Mapa1Code.conditionTrue_1 = gdjs.Mapa1Code.condition2IsTrue_0;
gdjs.Mapa1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6740868);
}
}}
}
if (gdjs.Mapa1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa1", false);
}}

}


{

gdjs.Mapa1Code.GDM12Objects1.createFrom(runtimeScene.getObjects("M12"));

gdjs.Mapa1Code.condition0IsTrue_0.val = false;
gdjs.Mapa1Code.condition1IsTrue_0.val = false;
gdjs.Mapa1Code.condition2IsTrue_0.val = false;
{
gdjs.Mapa1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa1Code.mapOfGDgdjs_46Mapa1Code_46GDM12Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Mapa1Code.condition0IsTrue_0.val ) {
{
gdjs.Mapa1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Mapa1Code.condition1IsTrue_0.val ) {
{
{gdjs.Mapa1Code.conditionTrue_1 = gdjs.Mapa1Code.condition2IsTrue_0;
gdjs.Mapa1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6837820);
}
}}
}
if (gdjs.Mapa1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa2", false);
}}

}


{

gdjs.Mapa1Code.GDM13Objects1.createFrom(runtimeScene.getObjects("M13"));

gdjs.Mapa1Code.condition0IsTrue_0.val = false;
gdjs.Mapa1Code.condition1IsTrue_0.val = false;
gdjs.Mapa1Code.condition2IsTrue_0.val = false;
{
gdjs.Mapa1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa1Code.mapOfGDgdjs_46Mapa1Code_46GDM13Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Mapa1Code.condition0IsTrue_0.val ) {
{
gdjs.Mapa1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Mapa1Code.condition1IsTrue_0.val ) {
{
{gdjs.Mapa1Code.conditionTrue_1 = gdjs.Mapa1Code.condition2IsTrue_0;
gdjs.Mapa1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6838604);
}
}}
}
if (gdjs.Mapa1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa3", false);
}}

}


{

gdjs.Mapa1Code.GDstartObjects1.createFrom(runtimeScene.getObjects("start"));

gdjs.Mapa1Code.condition0IsTrue_0.val = false;
gdjs.Mapa1Code.condition1IsTrue_0.val = false;
gdjs.Mapa1Code.condition2IsTrue_0.val = false;
{
gdjs.Mapa1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Mapa1Code.mapOfGDgdjs_46Mapa1Code_46GDstartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Mapa1Code.condition0IsTrue_0.val ) {
{
gdjs.Mapa1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Mapa1Code.condition1IsTrue_0.val ) {
{
{gdjs.Mapa1Code.conditionTrue_1 = gdjs.Mapa1Code.condition2IsTrue_0;
gdjs.Mapa1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6741764);
}
}}
}
if (gdjs.Mapa1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mapa0", false);
}}

}


}; //End of gdjs.Mapa1Code.eventsList0xaff78


gdjs.Mapa1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Mapa1Code.GDTXT11Objects1.length = 0;
gdjs.Mapa1Code.GDTXT11Objects2.length = 0;
gdjs.Mapa1Code.GDM11Objects1.length = 0;
gdjs.Mapa1Code.GDM11Objects2.length = 0;
gdjs.Mapa1Code.GDM12Objects1.length = 0;
gdjs.Mapa1Code.GDM12Objects2.length = 0;
gdjs.Mapa1Code.GDM13Objects1.length = 0;
gdjs.Mapa1Code.GDM13Objects2.length = 0;
gdjs.Mapa1Code.GDBGObjects1.length = 0;
gdjs.Mapa1Code.GDBGObjects2.length = 0;
gdjs.Mapa1Code.GDstartObjects1.length = 0;
gdjs.Mapa1Code.GDstartObjects2.length = 0;

gdjs.Mapa1Code.eventsList0xaff78(runtimeScene);
return;
}
gdjs['Mapa1Code'] = gdjs.Mapa1Code;
