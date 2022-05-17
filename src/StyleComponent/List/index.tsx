import React from "react";
import Color from "color";
import "./index.css"

const getListColor = (value: string) => {

  const darken = []
  const lighten = []
  const fade = []
  const negate = []
  const lightness = []
  const saturate = []
  const desaturate = []
  const whiten = []
  const blacken = []
  const opaquer = []
  const rotate = []
  const mix = []
  try {
    let i = 1
    while (i <= 10) {
      let op = i / 10
      darken.push(Color(value).darken(op).hex())
      lighten.push(Color(value).lighten(op).hex())
      fade.push(Color(value).fade(op).hex())
      negate.push(Color(value).negate().hex())
      lightness.push(Color(value).lightness(op).hex())
      saturate.push(Color(value).saturate(op).hex())
      desaturate.push(Color(value).desaturate(op).hex())
      whiten.push(Color(value).whiten(op).hex())
      blacken.push(Color(value).blacken(op).hex())
      opaquer.push(Color(value).opaquer(op).hex())
      rotate.push(Color(value).rotate(op).hex())
      mix.push(Color().mix(Color(value), op).hex())
      i++
    }
  }
  catch (err) {
    console.log(err)
  }

  return {
    darken,
    lighten,
    fade,
    negate,
    lightness,
    saturate,
    desaturate,
    whiten,
    blacken,
    opaquer,
    rotate,
    mix,
  }
}
const Copy = (text: string,) => {
  if (navigator.clipboard) {
    // clipboard api 复制
    navigator.clipboard.writeText(text);
  }
}

const List = () => {
  const [colors, setColors] = React.useState("")
  const ColorList = React.useMemo(() => {
    if (colors) {
      return Object.entries(getListColor(colors)).map(([key, valueList]) => {
        return <fieldset key={key} >
          <legend>{key}</legend>
          {valueList.map((item, index) => {
            const isDark = Color(item).isDark()
            return <span onDoubleClick={(event) => {
              // @ts-ignore
              if (event.target && event.target.dataset && event.target.dataset.color) {
                // @ts-ignore
                Copy(event.target.dataset.color)
              }
            }} key={index} className="color-item" data-color={item} style={{ backgroundColor: item, color: isDark ? "#fff" : "#000" }} >{item}</span>
          })}
        </fieldset>
      })
    }
    return <React.Fragment />
  }, [colors])


  return <div>
    <label>
      选择颜色值：
      <input value={colors} onChange={(event) => {
        setColors(event.target.value)
      }} />
      <input value={colors} type="color" onChange={(event) => {
        setColors(event.target.value)
      }} />
    </label>
    {ColorList}
  </div>
}
export default List
