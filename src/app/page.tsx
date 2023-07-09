
'use client'
import { useEffect } from 'react'
export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap")
  },[])
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore deserunt fuga, expedita delectus consequuntur non.</p>
        </div>
        <div className="col-md-6">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab qui ad ea perferendis sit. Error consequatur perferendis autem nulla vero impedit. Libero, eligendi nihil voluptates incidunt iusto nostrum consequatur amet eius eos eveniet fuga accusantium! Repellendus sint quod suscipit ut ipsum. Nobis veritatis neque molestiae consectetur! Aperiam iste minima sequi, delectus veritatis maiores maxime dignissimos iure eos praesentium distinctio! Quasi?</p>
        </div>
        <div className="col-md-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quam, ab hic recusandae at neque?</p>
        </div>
      </div>
    </div>
    </>
  )
}
