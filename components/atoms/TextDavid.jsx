import React from 'react'
import TypeIt from 'typeit-react';



function TextDavid() {

  return (
    <div className="flex flex-col text-black mx-auto">
      <h1 className="flex text-center font-Code text-2xl lg:text-5xl gap-y-10">
        <TypeIt options={{
          strings: [
            "Hi! I'm DAVID, ",
            "a Junior FrontEnd ",
            "Developer!"
            ],
            speed:180,
            waitUntilVisible: true,
        }} />
      </h1>
    </div>
  );
}

export default TextDavid 