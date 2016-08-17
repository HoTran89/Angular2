export class EventManager {
    static instance: EventManager = null;
    static hash: any = {};

    public static getInstance(): EventManager {
        if (!EventManager.instance) {
            EventManager.instance = new EventManager();
        }
        return EventManager.instance;
    }

    public publish(data: any) {
        let dataSplit: Array<string> = data[0].msg.split(".");
        let key: string = dataSplit[0] + "." + dataSplit[1];
        let fnc: any = EventManager.hash[key];
        fnc(data);
    }

    public subcribe(key: string, handle: any) {
        EventManager.hash[key] = handle;
    }
}