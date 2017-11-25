// Created by iWeb 3.0.3 local-build-20110331

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,899),url:'Room_Sizes_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Room_Sizes_files/stroke_1.png'},{rect:new IWRect(2,-2,726,4),url:'Room_Sizes_files/stroke_2.png'},{rect:new IWRect(728,-2,4,4),url:'Room_Sizes_files/stroke_3.png'},{rect:new IWRect(728,2,4,899),url:'Room_Sizes_files/stroke_4.png'},{rect:new IWRect(728,901,4,5),url:'Room_Sizes_files/stroke_5.png'},{rect:new IWRect(2,901,726,5),url:'Room_Sizes_files/stroke_6.png'},{rect:new IWRect(-2,901,4,5),url:'Room_Sizes_files/stroke_7.png'}],new IWSize(730,903))});registry.applyEffects();}
function hostedOnDM()
{return true;}
function onPageLoad()
{loadMozillaCSS('Room_Sizes_files/Room_SizesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
