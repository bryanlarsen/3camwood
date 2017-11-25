// Created by iWeb 3.0.3 local-build-20110402

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_2:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),shadow_3:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),shadow_4:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,290),url:'Other_Pictures_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Other_Pictures_files/stroke_1.png'},{rect:new IWRect(2,-2,437,4),url:'Other_Pictures_files/stroke_2.png'},{rect:new IWRect(439,-2,4,4),url:'Other_Pictures_files/stroke_3.png'},{rect:new IWRect(439,2,4,290),url:'Other_Pictures_files/stroke_4.png'},{rect:new IWRect(439,292,4,5),url:'Other_Pictures_files/stroke_5.png'},{rect:new IWRect(2,292,437,5),url:'Other_Pictures_files/stroke_6.png'},{rect:new IWRect(-2,292,4,5),url:'Other_Pictures_files/stroke_7.png'}],new IWSize(441,294))});registry.applyEffects();}
function hostedOnDM()
{return true;}
function onPageLoad()
{loadMozillaCSS('Other_Pictures_files/Other_PicturesMoz.css')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id1');applyEffects()}
function onPageUnload()
{Widget.onunload();}
