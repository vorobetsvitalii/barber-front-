import React, { useState } from "react";
import Nav from "./Nav";
import registerNNPushToken from 'native-notify';


export default function A() {
  registerNNPushToken(5604, 'PWOQskXHUsIUG6FMVfpyJB');
    return (
   <Nav/>
  )
};

