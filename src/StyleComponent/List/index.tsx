import React from "react";
import Color from "color";
import "./index.css"

const getListColor = (value: string, ratio: number | string, type: string) => {
  console.log("ratio", ratio)

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
    let i = 0
    let lg = 10
    if (typeof ratio === "number") {
      lg = 0
    }
    while (i <= lg) {
      let op = i / 10
      if (typeof ratio === "number") {
        op = ratio
      }
      if (type === "rgb") {
        darken.push(Color(value).darken(op).rgb().string())
        lighten.push(Color(value).lighten(op).rgb().string())
        fade.push(Color(value).fade(op).hex())
        negate.push(Color(value).negate().hex())
        lightness.push(Color(value).lightness(op).rgb().string())
        saturate.push(Color(value).saturate(op).hex())
        desaturate.push(Color(value).desaturate(op).rgb().string())
        whiten.push(Color(value).whiten(op).hex())
        blacken.push(Color(value).blacken(op).rgb().string())
        opaquer.push(Color(value).opaquer(op).rgb().string())
        rotate.push(Color(value).rotate(op).rgb().string())
        mix.push(Color().mix(Color(value), op).rgb().string())
      } else if (type === "hsl") {
        darken.push(Color(value).darken(op).string())
        lighten.push(Color(value).lighten(op).string())
        fade.push(Color(value).fade(op).string())
        negate.push(Color(value).negate().string())
        lightness.push(Color(value).lightness(op).string())
        saturate.push(Color(value).saturate(op).string())
        desaturate.push(Color(value).desaturate(op).string())
        whiten.push(Color(value).whiten(op).string())
        blacken.push(Color(value).blacken(op).string())
        opaquer.push(Color(value).opaquer(op).string())
        rotate.push(Color(value).rotate(op).string())
        mix.push(Color().mix(Color(value), op).string())
      } else {
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
      }
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
  const [ratio, setRatio] = React.useState<string | number>("")
  const [type, setType] = React.useState<string>("hex")
  const ColorList = React.useMemo(() => {
    if (colors) {
      return Object.entries(getListColor(colors, ratio, type)).map(([key, valueList]) => {
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
  }, [colors, ratio, type])
  return <div className="color-list" >
    <label>
      选择颜色值：
      <input value={colors} onChange={(event) => {
        setColors(event.target.value)
      }} />
      <input value={colors} type="color" onChange={(event) => {
        setColors(event.target.value)
      }} />
    </label>
    <label>
      比率：
      <input type="number" value={ratio} onChange={(event) => {
        if (event.target.value) {
          setRatio(Number(event.target.value))
        } else {
          setRatio(event.target.value)
        }
      }}
      />
    </label>
    <label>
      转换类型：
      <select value={type} onChange={(event) => {
        setType(event.target.value)
      }} >
        <option value={"hex"} >hex</option>
        <option value={"hsl"} >hsl</option>
        <option value={"rgb"} >rgb</option>
      </select>
      {/* <input  value={ratio} onChange={(event) => {
        if (event.target.value) {
          setRatio(Number(event.target.value))
        } else {
          setRatio(event.target.value)
        }
      }}
      /> */}

    </label>
    {ColorList}
  </div>
}
export default List
