import { Quaternion } from "./Yuu API/Basic Types/Quaternion";
import { Vector3 } from "./Yuu API/Basic Types/Vector3";
import { inWorldConsole } from "./Yuu API/Console";
import { registerStart } from "./Yuu API/RegisterStart";
import { spawnPrimitive } from "./Yuu API/SpawnPrimitive";


registerStart(start);
function start() {
    inWorldConsole.visible(true, new Vector3(0,1.5,-1.5));

    console.log('You Did A Thing!');

    spawnPrimitive.plane("Front", new Vector3(0, 1, 1), new Vector3(1, 1, 1), Quaternion, new Vector3(0, 0 , 0), 1, true, "Static", undefined);
}
