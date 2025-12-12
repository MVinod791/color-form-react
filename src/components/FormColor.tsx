import { useState } from "react";

function FormColor() {
  const [body, setBody] = useState<string>("");

  const [h1HeadingColor, setH1HeadingColor] = useState<string>("#000");
  const [h2Color, setH2Color] = useState<string>("#f1f");
  const [bodyBgColor, setBodyBgColor] = useState<string>("#fff");

  return (
    <>
      <div style={{backgroundColor: bodyBgColor}} className="w-full h-full p-2 flex flex-col gap-3">
        <div className="flex items-center gap-6">
          <div className="flex items-end">
            {/* <label>Pick Color for h1:</label> */}
            <input
              type="color"
              value={h1HeadingColor}
              onChange={(e) => setH1HeadingColor(e.target.value)}
              className="mt-5"
            />
          </div>
          <h1  style={{ color: h1HeadingColor }}>This is H1 Heading</h1>
        </div>
     
        <div className="flex items-center gap-6 mt-2">
          <div className="flex items-end">
            {/* <label>Pick Color for h2:</label> */}
            <input
              type="color"
              value={h2Color}
              onChange={(e) => setH2Color(e.target.value)}
              className="mt-5"
            />
          </div>
          <h2 style={{ color: h2Color }}>This is H2 subheading</h2>
        </div>

        <div className="flex items-center w-full gap-6 mt-2">
          <div  className="flex flex-col items-start">
            <label>Body:</label>
            <textarea
              value={body}
              style={{backgroundColor:bodyBgColor}}
              onChange={(e) => setBody(e.target.value)}
              className="w-full h-20 mt-1 border rounded-sm"
            />
          </div>
          <div className="flex items-end">
            <label>Body bg Color:</label>
            <input
              type="color"
              value={bodyBgColor}
              onChange={(e) => setBodyBgColor(e.target.value)}
            />
          </div>
          <p>{body || "Body preview:"}</p>
        </div>
      </div>
    </>
  );
}

export default FormColor;