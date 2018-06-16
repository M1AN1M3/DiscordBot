async () => {
const m = await message.channel.send("Ping?");
m.edit(`Pong! Latency is ${m.createdTimestamp - messagse.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
}
