import '../generic-items/genericItems.css'

function CustomModal({children,style={}}) {
  return (
    <div style={style} className='modalMainWrapper'>{children}</div>
  )
}

export default CustomModal