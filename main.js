//=============================================================================
// main.js
//=============================================================================

//加载插件
PluginManager.setup($plugins);


window.onload = function() {
    //进入启动场景
    SceneManager.run(Scene_Boot);


};
