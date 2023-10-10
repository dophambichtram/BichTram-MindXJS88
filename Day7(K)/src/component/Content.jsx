import React from "react";
import Title from "./Title";
import ImageContent from "./pageHeader/ImageContent";
import Input from "./pageHeader/Input";
import "./Content.css";

function Content() {
  return (
    <div className="block">
      <div className="firstbox">
        <div className="content-first-box">
          <div className="h1">
            <Title title="Untile Event" />
          </div>
          <div className="handle-input">
            <div className="input">
              <Input
                image="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-date.cf31b5b1.svg"
                inputType="date"
              />
            </div>
            <div className="input">
              <Input
                image="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-time.0e52cc09.svg"
                inputType="time"
              />
            </div>
          </div>
          <div className="address">
            <Input
              image="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-address.634396fa.svg"
              inputType="text"
              placeholder="Venus"
            />
          </div>
          <div className="handle-input">
            <div className="person">
              <Input
                image="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-maxcacipi.35d06c6a.svg"
                inputType="text"
                placeholder="Max capacity"
              />
            </div>
            <div className="person">
              <Input
                image="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/logo-cost.0cbac456.svg"
                inputType="text"
                placeholder="Cost per person"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="secondbox">
        <div className="content-second-box">
          <div className="second-img">
            <ImageContent
              image="https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/banner.ed746733.svg"
              inputType="file"
              className="second-content"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
