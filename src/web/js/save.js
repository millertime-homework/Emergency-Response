function saveGame() {
    var saveable = {"player": {"x": player.x, "y": player.y, "z": player.z, "facing": player.facing}};
    var str = escape(JSON.stringify(saveable));
    // TODO expire
    document.cookie = "emergencySave="+str+"";
}
