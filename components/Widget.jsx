import React, { useEffect } from "react";
import Head from "next/head";

const RealWidget = () => {
  useEffect(() => {
    const widgets = document.querySelectorAll(".realwidget");
    const body = document.body;

    // Create and append stylesheet link
    const stylesheet = document.createElement("link");
    stylesheet.href =
      "https://www.enhancify.com/build/css/marketplace_realwidget_button.css";
    stylesheet.rel = "stylesheet";
    body.append(stylesheet);

    // Create pop-up structure
    const popUp = document.createElement("div");
    popUp.className = "pop_up-realwidget";
    body.append(popUp);

    const popUpSection = document.createElement("div");
    popUpSection.className = "pop_up-realwidget_section";
    popUp.append(popUpSection);

    const popUpClose = document.createElement("div");
    popUpClose.className = "pop_up-realwidget_close";
    popUpSection.append(popUpClose);

    popUpClose.addEventListener("click", function () {
      popUp.style.display = "none";
      document.querySelector("html").classList.remove("overflow-shadow");
    });

    widgets.forEach((widget) => {
      widget.innerHTML = `<div class='realwidget_button' style='background:#B31417;border: 2px solid #B31417; color: #FFFFFF; width:calc(${widget.dataset.widthbtn}px - 10px);'>${widget.dataset.textbutton}</div>`;

      widget
        .querySelector(".realwidget_button")
        .addEventListener("click", function () {
          if (document.getElementById("realwidget_content") == null) {
            const frame = document.createElement("iframe");
            frame.src =
              "https://www.enhancify.com/blue-horizon-exteriors?siteaction=realwidget&utm_source=realwidget&color1=%23B31417&color2=%23064C8F&color3=%23FFFFFF";
            frame.style.width = "100%";
            frame.style.height = "95%";
            frame.frameBorder = "0";
            frame.id = "realwidget_content";
            frame.referrerPolicy = "unsafe-url";
            popUpSection.append(frame);
          }
          popUp.style.display = "flex";
          document.querySelector("html").classList.add("overflow-shadow");
        });
    });
  }, []);

  return (
    <>
      <Head>{/* External CSS can also be added here if not dynamic */}</Head>
      {/* Your component's HTML structure here if needed */}
    </>
  );
};

export default RealWidget;
