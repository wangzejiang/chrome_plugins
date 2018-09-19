function sendMessageToContentScript(message, callback){
    chrome.tabs.query({url: "*://*.jd.com/*"}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, message, function(response){
            if(callback) callback(response);
        });
    });
}

function closeed(){
    sendMessageToContentScript({cmd:'closeed', value:'closeed!'}, function(response){
        console.log('来自content的回复：'+response);
    });
}

function opened(){
    sendMessageToContentScript({cmd:'opened', value:'opened!'}, function(response){
        console.log('来自content的回复：'+response);
    });
}