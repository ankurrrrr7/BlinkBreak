export const handleNotification = ()=>{
    chrome.notifications.create({
        type: 'basic',
        title: 'Time to Blink!',
        message: 'Don’t forget to blink your eyes to protect them!',
        priority: 2
    });
}

