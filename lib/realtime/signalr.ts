import {
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState,
  LogLevel,
} from "@microsoft/signalr";

let signalRConnection: HubConnection | null = null;

export function createSignalRConnection(accessToken?: string) {
  if (signalRConnection) return signalRConnection;

  signalRConnection = new HubConnectionBuilder()
    .withUrl(`${process.env.NEXT_PUBLIC_API_URL}hubs/notifications`, {
      accessTokenFactory: () => accessToken || "",
    })
    .withAutomaticReconnect()
    .configureLogging(LogLevel.Warning)
    .build();

  return signalRConnection;
}

export async function startSignalRConnection(accessToken?: string) {
  const connection = createSignalRConnection(accessToken);

  if (connection.state === HubConnectionState.Disconnected) {
    await connection.start();
  }

  return connection;
}

export async function stopSignalRConnection() {
  if (!signalRConnection) return;
  if (signalRConnection.state !== HubConnectionState.Disconnected) {
    await signalRConnection.stop();
  }
}
