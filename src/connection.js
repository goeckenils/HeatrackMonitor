import { HubConnectionBuilder, LogLevel } from "@aspnet/signalr";
import { addTemp } from "./redux/actions";
import store from "./redux/store"


let connection = new HubConnectionBuilder()
    .withUrl("http://192.168.16.36:5000/TemperatureHub")
    .configureLogging(LogLevel.Debug)
    .build();
 
connection.on("Temperature_Received", data => {
    console.log(data)
    const action = addTemp(data)
    store.dispatch(action)
});
 
connection.start()
