//
// Dependencies:
// <script src="https://unpkg.com/mqtt/dist/mqtt.min.js"></script>
//
var myMQTT = (function () {
    var BROKER_URL = "ws://52.39.125.106:1885";
    var TOPIC_STATE = "clealp/sie/of/state";
    var TOPIC_INSTDATA = "clealp/sie/of/instdata";
    var TOPIC_CONFDATA = "clealp/sie/of/confdata";
    var TOPIC_MEASURES = "clealp/sie/of/measures";
    var TOPIC_PUT = "clealp/sie/of/put";

    var state_callback;
    var instdata_callback;
    var confdata_callback;
    var measures_callback;


    var client = mqtt.connect(BROKER_URL);

    client.on('message', function (topic, message) {

        if (state_callback && topic == TOPIC_STATE) {
            state_callback(JSON.parse(message));
        }
        else if (instdata_callback && topic == TOPIC_INSTDATA) {
            instdata_callback(JSON.parse(message));
        }
        else if (confdata_callback && topic == TOPIC_CONFDATA) {
            confdata_callback(JSON.parse(message));
        }
        else if (measures_callback && topic == TOPIC_MEASURES) {
            measures_callback(JSON.parse(message));
        }
    });

    return {
        subscribe_state: function (callback) {
            state_callback = callback;
            client.subscribe(TOPIC_STATE);
        },
        subscribe_instData: function (callback) {
            instdata_callback = callback;
            client.subscribe(TOPIC_INSTDATA);
        },
        subscribe_confData: function (callback) {
            confdata_callback = callback;
            client.subscribe(TOPIC_CONFDATA);
        },
        subscribe_measures: function (callback) {
            measures_callback = callback;
            client.subscribe(TOPIC_MEASURES);
        },
        publish_put: function (new_confData) {
            client.publish(TOPIC_PUT, new_confData);
        },

        stop: function () {
            state_callback = undefined;
            instdata_callback = undefined;
            confdata_callback = undefined;
            measures_callback = undefined;
            client.close();
        }

    };

})();