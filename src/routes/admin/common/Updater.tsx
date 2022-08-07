import * as React from "react";
import styled from "styled-components";
import { proxy, useSnapshot } from 'valtio'

const state = proxy({ count: 0, text: 'hello' })


function Updater({data}: OptionProps) {

 const snap = useSnapshot(state)

  return (


     <div>
      {snap.count}
      <button onClick={() => ++state.count}>+1</button>
    </div>
  );
}

export default Updater;