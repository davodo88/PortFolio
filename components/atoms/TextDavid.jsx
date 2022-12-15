import React from 'react'
import TypeIt from 'typeit-react';



function TextDavid() {

  return (
    <div className="flex flex-col text-white m-auto">
      <p className="flex font-Code text-2xl lg:text-5xl gap-y-10">
        <TypeIt options={{
          strings: [
            "Hi! I'm DAVID, ",
            "a Web Developer. "
            ],
            speed:180,
            waitUntilVisible: true,
        }} />
      </p>
    </div>
  );
}

export default TextDavid 