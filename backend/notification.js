export const handleNotification = ()=>{
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png', // Path to your icon image
        title: 'Time to Blink!',
        message: 'Don’t forget to blink your eyes to protect them!',
        priority: 2
    });
}

