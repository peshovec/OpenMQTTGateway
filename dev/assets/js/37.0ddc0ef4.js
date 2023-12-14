(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{276:function(e,t,a){e.exports=a.p+"assets/img/OpenMQTTGateway-Configuration-Home-Assistant.3ca02117.png"},277:function(e,t,a){e.exports=a.p+"assets/img/OpenMQTTGateway_Home_Assistant_MQTT_discovery.e0225c4f.png"},445:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"advanced-configuration-of-the-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#advanced-configuration-of-the-gateway"}},[e._v("#")]),e._v(" Advanced configuration of the gateway")]),e._v(" "),t("h2",{attrs:{id:"secure-connection-to-the-broker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#secure-connection-to-the-broker"}},[e._v("#")]),e._v(" Secure connection to the broker")]),e._v(" "),t("p",[e._v("By default the connection between the gateway and the MQTT broker is not encrypted and the identity of the broker is not verified.\nFor connections in a private local area network this might not be a big issue, but if you connect to a broker on the internet or the gateway is connected to a public network there is a high security risk.")]),e._v(" "),t("p",[e._v("To secure the connection, Transport Layer Security (TLS) can be used which is supported by most MQTT brokers.\nSetting up and configuring TLS in the MQTT broker is a complex process and perhaps include creating a self-signed certificate.\nThe configuration of the broker is not covered here, you should look into the documentation of your broker.")]),e._v(" "),t("h3",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("p",[e._v("The MQTT broker is configured for TLS and you have access to the CA certificate which was used to sign the MQTT broker certificate.\nYou are using ESP8266 or ESP32.")]),e._v(" "),t("h3",{attrs:{id:"configure-secure-connection-in-the-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-secure-connection-in-the-gateway"}},[e._v("#")]),e._v(" Configure secure connection in the gateway")]),e._v(" "),t("p",[e._v("To enable the secure connection and use TLS set the "),t("code",[e._v("#define MQTT_DEFAULT_SECURE")]),e._v(" to true at build time, or the "),t("code",[e._v("mqtt secure")]),e._v(" parameter with WiFi Manager or "),t("code",[e._v("mqtt_secure")]),e._v(" with MQTT.\nSet "),t("code",[e._v("MQTT_SERVER")]),e._v(" to the Common Name (CN) of the certificate of the broker.")]),e._v(" "),t("p",[e._v("The server identity can be verified against a certificate or not, if you don't want to use a certicate to verify the server you can uncheck the option "),t("code",[e._v("validate cert")]),e._v(" with WiFi Manager or set "),t("code",[e._v("mqtt_validate")]),e._v(" to "),t("code",[e._v("false")]),e._v(" with MQTT")]),e._v(" "),t("p",[e._v("The CA certificate should be in PEM ascii format.\nIf your CA certificate is not in the correct format or you don't know the format, use "),t("code",[e._v("openssl")]),e._v(" to convert the certificate to the correct format.\nAt build time, in "),t("code",[e._v("main/certs/default_server_cert.h")]),e._v(" replace the "),t("code",[e._v("...")]),e._v(" with the content of your certificate which is between the "),t("code",[e._v("-----BEGIN CERTIFICATE-----")]),e._v(" and "),t("code",[e._v("-----END CERTIFICATE-----")]),e._v(" lines:")]),e._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" certificate CERT_ATTRIBUTE "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token raw-string string"}},[e._v('R"EOF("\n-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\n")EOF"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("With WiFi Manager copy your certificate from "),t("code",[e._v("-----BEGIN CERTIFICATE-----")]),e._v(" to  "),t("code",[e._v("-----END CERTIFICATE-----")]),e._v(" (included) and paste it into the input field:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("This process can also be used for the other certificates, OTA, client key, client certificate if necessary.")]),e._v(" "),t("h2",{attrs:{id:"add-the-received-value-at-the-end-of-the-topic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-the-received-value-at-the-end-of-the-topic"}},[e._v("#")]),e._v(' Add the received "value" at the end of the topic')]),e._v(" "),t("p",[e._v('For the gateways that publish a "value" parameter on the json (RF, IR...), it is possible to concatenate this parameter at the end of the topic.\nSo as to activate this function you need to set '),t("code",[e._v("valueAsATopic")]),e._v(" to true in User_config.h")]),e._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("ifndef")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("valueAsATopic")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("define")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[e._v("valueAsATopic")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v(" ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// define true to integrate msg value into the subject when receiving")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("endif")])]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("Per default you see the following data:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('home/OpenMQTTGateway/SRFBtoMQTT {"raw":"2B660186042E00E7E5","value":"59365","delay":"1111","val_Thigh":"390","val_Tlow":"1070"}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("With the line uncommented you will see:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('home/OpenMQTTGateway/SRFBtoMQTT/59365 {"raw":"2B660186042E00E7E5","value":"59365","delay":"1111","val_Thigh":"390","val_Tlow":"1070"}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("It can be useful to avoid warning or errors on certain controllers.")]),e._v(" "),t("h2",{attrs:{id:"auto-discovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-discovery"}},[e._v("#")]),e._v(" Auto discovery")]),e._v(" "),t("p",[e._v("Home Assistant discovery is enabled by default on all binaries and platformio configurations.")]),e._v(" "),t("p",[e._v("To have a working discovery setup you need to enable it on your MQTT integration definition in HASS.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("With platformio you can deactivate discovery by adding:")]),e._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("'-UZmqttDiscovery")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v('"HADiscovery"\'')]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("To your environment definition.")])]),e._v(" "),t("p",[e._v("So as to create the MQTT username and password, you have to create a new user(recommended) into Home Assistant->Configuration->Users (available in admin mode) or use an existing username/pwd combination (not recommended). This user doesn't need to be an administrator.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(276),alt:"MQTT User"}})]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("The max size of the username is 30 and 60 for the password.")])]),e._v(" "),t("p",[e._v("OMG will use the auto discovery functionality of home assistant to create sensors and gateways into your HASS instance automatically.")]),e._v(" "),t("p",[e._v("The gateway device will be available into Configuration->Devices section of Home Assistant.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(277),alt:"MQTT Device settings"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);