let subs: number | string = 1000;
console.log(`Subscribers: ${subs}`);

subs = "One Thousand";
console.log(`Subscribers: ${subs}`);

function displayInfo(info: number | string): void {
    console.log(`Info: ${info}`);
}

displayInfo(42);
displayInfo("Forty Two");

let channelName: 'youtube' | 'vimeo' | 'twitch'; // Also called as literal types
channelName = 'youtube';
console.log(`Channel Name: ${channelName}`);