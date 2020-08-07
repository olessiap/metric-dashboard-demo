import React, { Component } from 'react'
import BoxHeader from "../../../components/app-layout/box-layout/BoxHeader"
import DispositivosDetails from "./DispositivosDetails"
import DispositivosOS from "./DispositivosOS"
import DispositivosBrowser from "./DispositivosBrowser"

export class DemoDispositivos extends Component {
  render() {
    return (
      <div className="demoDispositivos">
        <BoxHeader title={"Dispositivos utilizados"} id={"with-background"} className={"title-wrapper"} statsDots={false} />
        <div className="flex dispositivos-wrapper">
          <DispositivosDetails />
          <DispositivosOS />
          <DispositivosBrowser />
        </div>
      </div>
    )
  }
}

export default DemoDispositivos
