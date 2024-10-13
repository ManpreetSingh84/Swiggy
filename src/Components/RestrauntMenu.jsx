import React from 'react'
import { useParams } from 'react-router-dom'

function RestrauntMenu({item}) {
  let objparameter = useParams()
  return (
    <div>{item.info.name}
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto numquam ipsum quisquam, aspernatur incidunt voluptatem porro accusantium consectetur quae nobis, placeat adipisci, nulla temporibus molestias. Corrupti cum placeat ratione fuga praesentium nobis dolor nemo? Porro, maiores distinctio? Repellat dignissimos praesentium ea delectus sint quod. A, ipsum optio nisi libero quae eum assumenda voluptatum similique aperiam, dolor delectus id, odit consectetur iste. Omnis, temporibus animi! A assumenda quam nemo quas doloremque sunt velit, asperiores cum, iusto odio accusamus, itaque exercitationem. Alias in omnis, qui sed impedit nisi odit quasi, quam ratione velit beatae quisquam sint, enim asperiores? Quidem laborum atque nihil.</div>
  )
}

export default RestrauntMenu