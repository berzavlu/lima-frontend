import style from './style.module.scss'

function Button(props) {
  return (
    <>
      <button className={style.limaFrontendBtn} onClick={props.onClick}>
        <span className={style['limaFrontendBtn--textColor']}>
          {props.children}
        </span>
      </button>
    </>
  )
}

export default Button
